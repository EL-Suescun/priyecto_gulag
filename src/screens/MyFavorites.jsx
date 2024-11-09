import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles/MyFavoritesStyles';
import ItemCard from './ItemCard';

const MyFavorites = () => {
  const [items, setItems] = useState([
    { id: '1', name: 'Producto 1', shortDescription: 'Breve descripción del producto 1', price: 25000, available: 10, favorite: true, category: 'Electrónica', offer: 0, image: 'https://via.placeholder.com/50', quantity: 1 },
    { id: '2', name: 'Producto 2', shortDescription: 'Breve descripción del producto 2', price: 15000, available: 0, favorite: true, category: 'Ropa', offer: 20, image: 'https://via.placeholder.com/50', quantity: 1 },
    { id: '3', name: 'Producto 3', shortDescription: 'Breve descripción del producto 3', price: 35000, available: 5, favorite: true, category: 'Electrónica', offer: 0, image: 'https://via.placeholder.com/50', quantity: 1 },
   
  ]);

  const handleFavoriteToggle = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  const renderItem = ({ item }) => (
    <ItemCard
      item={item}
      onFavoriteToggle={handleFavoriteToggle}
      showRemoveButton={true}  
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Favoritos</Text>
      <FlatList
        data={items.filter(item => item.favorite)} // Filtrar solo los favoritos
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MyFavorites;
