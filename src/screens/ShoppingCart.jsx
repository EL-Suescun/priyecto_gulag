import React, { useReducer, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Image, Button, Alert, TouchableOpacity } from 'react-native';
import styles from '../styles/ShoppingCartStyles';

const initialState = {
  items: [
    { id: '1', name: 'Producto 1', description: 'Breve descripción del producto 1', price: 25000, quantity: 1, image: 'https://via.placeholder.com/50' },
    { id: '2', name: 'Producto 2', description: 'Breve descripción del producto 2', price: 15000, quantity: 1, image: 'https://via.placeholder.com/50' }
  ],
  total: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.min(item.quantity + 1, 99) }
            : item
        ),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: Math.min(parseInt(action.payload.quantity) || 0, 99) }
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

  useEffect(() => {
    dispatch({ type: 'CALCULATE_TOTAL' });
  }, [state.items]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.thumbnail} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
        
        <TextInput
          style={styles.numericInput}
          keyboardType="numeric"
          maxLength={2}
          value={item.quantity.toString()}
          onChangeText={(quantity) => {
            const parsedQuantity = parseInt(quantity);
            if (!isNaN(parsedQuantity) && parsedQuantity >= 1 && parsedQuantity <= 99) {
              dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity } });
            }
          }}
          placeholder="Cantidad"
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => dispatch({ type: 'ADD_QUANTITY', payload: { id: item.id } })}
        >
          <Text style={styles.addButtonText}>Agregar más</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })}
      >
        <Text style={styles.deleteButtonText}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

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

      <Button title="Proceder al Pago" onPress={() => Alert.alert('Pago', `Total a pagar: $${state.total}`)} />
    </View>
  );   
};

export default ShoppingCart;
