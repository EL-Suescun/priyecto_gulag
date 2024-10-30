import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet } from 'react-native';
import styles from '../styles/ItemListStyles';

const ItemList = () => {
  const [searchText, setSearchText] = useState('');
  const [items, setItems] = useState([
    { id: '1', name: 'Producto 1', description: 'Breve descripción del producto 1', price: 25000, image: 'https://via.placeholder.com/50' },
    { id: '2', name: 'Producto 2', description: 'Breve descripción del producto 2', price: 15000, image: 'https://via.placeholder.com/50' },
    { id: '3', name: 'Producto 3', description: 'Breve descripción del producto 3', price: 35000, image: 'https://via.placeholder.com/50' }
  ]);

  // Filtrar los productos con base en el texto de búsqueda
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.thumbnail} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text style={styles.itemPrice}>${item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Artículos</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar artículo"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <FlatList
        data={filteredItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No se encontraron artículos</Text>}
      />
    </View>
  );
};

export default ItemList;
