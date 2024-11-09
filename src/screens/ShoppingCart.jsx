import React, { useReducer, useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { db } from '../database/firebase'; 
import { collection, getDocs } from 'firebase/firestore';
import ItemShoppingCard from './ItemShoppingCard';  
import PaymentBranch from './PaymentBranch'; 
import Modal from 'react-native-modal'; 
import styles from '../styles/ShoppingCartStyles';

const initialState = {
  items: [],
  total: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.available > item.cantidad
            ? { ...item, cantidad: action.payload.cantidad }
            : item
        ),
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    case 'CALCULATE_TOTAL':
      return {
        ...state,
        total: state.items.reduce((total, item) => total + item.price * item.cantidad, 0),
      };
    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isModalVisible, setIsModalVisible] = useState(false); 
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartRef = collection(db, 'carrito');
        const cartSnapshot = await getDocs(cartRef);
        const cartData = cartSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setCartItems(cartData);
        
        cartData.forEach(item => {
          dispatch({
            type: 'ADD_QUANTITY',
            payload: { id: item.id, cantidad: item.cantidad || 1 },
          });
        });
      } catch (error) {
        console.error("Error al obtener los productos del carrito:", error);
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    dispatch({ type: 'CALCULATE_TOTAL' });
  }, [state.items]);

  const handleFavoriteToggle = (itemId) => {
    console.log(`Producto ${itemId} favorito cambiado`);
  };

  const handleRemoveItem = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id: itemId } });
  };

  const handleIncreaseQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item) {
      dispatch({
        type: 'ADD_QUANTITY',
        payload: { id: itemId, cantidad: item.cantidad + 1 },
      });
    }
  };

  const handleDecreaseQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId);
    if (item && item.cantidad > 1) {
      dispatch({
        type: 'ADD_QUANTITY',
        payload: { id: itemId, cantidad: item.cantidad - 1 },
      });
    }
  };

  const openPaymentModal = () => {
    setIsModalVisible(true);
  };

  const closePaymentModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.emptyMessage}>El carrito está vacío.</Text>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <ItemShoppingCard 
              item={item}
              onFavoriteToggle={handleFavoriteToggle}
              onRemoveItem={handleRemoveItem}
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}

      <Text style={styles.total}>Valor Total: ${state.total.toFixed(2)}</Text>

      <Button title="Proceder al Pago" onPress={openPaymentModal} /> 

      <Modal 
        isVisible={isModalVisible}
        onBackdropPress={closePaymentModal} 
        onBackButtonPress={closePaymentModal} 
        animationIn="slideInUp" 
        animationOut="slideOutDown"
      >
        <View style={{ flex: 1 }}>
          <PaymentBranch 
            closeModal={closePaymentModal} 
            items={cartItems}  
            total={state.total} 
          />
        </View>
      </Modal>
    </View>
  );
};

export default ShoppingCart;
