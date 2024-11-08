import React, { useReducer, useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Alert } from 'react-native';
import ItemCard from './ItemCard'; // Importa el componente ItemCard
import PaymentBranch from './PaymentBranch'; // Importa el componente PaymentBranch
import Modal from 'react-native-modal'; // Importa la librería de modal
import styles from '../styles/ShoppingCartStyles';

const initialState = {
  items: [
    { id: '1', name: 'Producto 1', shortDescription: 'Breve descripción del producto 1', price: 25000, available: 10, favorite: true, category: 'Electrónica', offer: 0, image: 'https://via.placeholder.com/50', quantity: 1 },
    { id: '2', name: 'Producto 2', shortDescription: 'Breve descripción del producto 2', price: 15000, available: 0, favorite: false, category: 'Ropa', offer: 20, image: 'https://via.placeholder.com/50', quantity: 1 },
    { id: '3', name: 'Producto 3', shortDescription: 'Breve descripción del producto 3', price: 35000, available: 5, favorite: false, category: 'Electrónica', offer: 0, image: 'https://via.placeholder.com/50', quantity: 1 },
  ],
  total: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.available > item.quantity
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.min(parseInt(action.payload.quantity) || 0, item.available) }
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
        total: state.items.reduce((total, item) => total + item.price * item.quantity, 0),
      };
    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isModalVisible, setIsModalVisible] = useState(false); 

  useEffect(() => {
    dispatch({ type: 'CALCULATE_TOTAL' });
  }, [state.items]);

  const handleFavoriteToggle = (itemId) => {
    console.log(`Producto ${itemId} favorito cambiado`);
  };

  const handleRemoveItem = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id: itemId } });
  };

  const renderItem = ({ item }) => (
    <ItemCard
      item={item}
      onFavoriteToggle={handleFavoriteToggle}
      onRemoveItem={handleRemoveItem}
      showRemoveButton={true}  
    />
  );

  const openPaymentModal = () => {
    setIsModalVisible(true);
  };

  const closePaymentModal = () => {
    setIsModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrito de Compras</Text>

      {state.items.length === 0 ? (
        <Text style={styles.emptyMessage}>El carrito está vacío.</Text>
      ) : (
        <FlatList
          data={state.items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}

      <Text style={styles.total}>Valor Total: ${state.total}</Text>

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
            items={state.items}
            total={state.total} 
          />
        </View>
      </Modal>
    </View>
  );
};

export default ShoppingCart;
