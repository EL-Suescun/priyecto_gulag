import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import ItemCard from './ItemCard';
import styles from '../styles/ItemListStyles';

const ItemList = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); 
  const [items, setItems] = useState([ 
  { id: '1', name: 'Producto 1', shortDescription: 'Breve descripción del producto 1', price: 25000, available: 10, favorite: true, category: 'Electrónica', offer: 0, image: 'https://via.placeholder.com/50' },
  { id: '2', name: 'Producto 2', shortDescription: 'Breve descripción del producto 2', price: 15000, available: 0, favorite: false, category: 'Ropa', offer: 20, image: 'https://via.placeholder.com/50' },
  { id: '3', name: 'Producto 3', shortDescription: 'Breve descripción del producto 3', price: 35000, available: 5, favorite: false, category: 'Electrónica', offer: 0, image: 'https://via.placeholder.com/50' },
  { id: '4', name: 'Producto 4', shortDescription: 'Breve descripción del producto 4', price: 18000, available: 2, favorite: true, category: 'Muebles', offer: 15, image: 'https://via.placeholder.com/50' },
  { id: '5', name: 'Producto 5', shortDescription: 'Breve descripción del producto 5', price: 12000, available: 7, favorite: false, category: 'Accesorios', offer: 0, image: 'https://via.placeholder.com/50' },
  { id: '6', name: 'Producto 6', shortDescription: 'Breve descripción del producto 6', price: 9000, available: 3, favorite: true, category: 'Electrónica', offer: 10, image: 'https://via.placeholder.com/50' },
  { id: '7', name: 'Producto 7', shortDescription: 'Breve descripción del producto 7', price: 45000, available: 0, favorite: false, category: 'Ropa', offer: 25, image: 'https://via.placeholder.com/50' },
  { id: '8', name: 'Producto 8', shortDescription: 'Breve descripción del producto 8', price: 12000, available: 8, favorite: true, category: 'Muebles', offer: 5, image: 'https://via.placeholder.com/50' },
  { id: '9', name: 'Producto 9', shortDescription: 'Breve descripción del producto 9', price: 28000, available: 1, favorite: false, category: 'Accesorios', offer: 0, image: 'https://via.placeholder.com/50' },
  { id: '10', name: 'Producto 10', shortDescription: 'Breve descripción del producto 10', price: 37000, available: 4, favorite: true, category: 'Electrónica', offer: 30, image: 'https://via.placeholder.com/50' },
  { id: '11', name: 'Producto 11', shortDescription: 'Breve descripción del producto 11', price: 23000, available: 2, favorite: true, category: 'Ropa', offer: 0, image: 'https://via.placeholder.com/50' },
  { id: '12', name: 'Producto 12', shortDescription: 'Breve descripción del producto 12', price: 19000, available: 0, favorite: false, category: 'Muebles', offer: 10, image: 'https://via.placeholder.com/50' },
  { id: '13', name: 'Producto 13', shortDescription: 'Breve descripción del producto 13', price: 15000, available: 3, favorite: true, category: 'Accesorios', offer: 0, image: 'https://via.placeholder.com/50' },
  { id: '14', name: 'Producto 14', shortDescription: 'Breve descripción del producto 14', price: 29000, available: 0, favorite: false, category: 'Electrónica', offer: 10, image: 'https://via.placeholder.com/50' },
  { id: '15', name: 'Producto 15', shortDescription: 'Breve descripción del producto 15', price: 35000, available: 8, favorite: true, category: 'Ropa', offer: 5, image: 'https://via.placeholder.com/50' },
  { id: '16', name: 'Producto 16', shortDescription: 'Breve descripción del producto 16', price: 22000, available: 0, favorite: false, category: 'Muebles', offer: 20, image: 'https://via.placeholder.com/50' },
  { id: '17', name: 'Producto 17', shortDescription: 'Breve descripción del producto 17', price: 18000, available: 6, favorite: true, category: 'Accesorios', offer: 15, image: 'https://via.placeholder.com/50' },
  { id: '18', name: 'Producto 18', shortDescription: 'Breve descripción del producto 18', price: 25000, available: 10, favorite: false, category: 'Electrónica', offer: 0, image: 'https://via.placeholder.com/50' },
  { id: '19', name: 'Producto 19', shortDescription: 'Breve descripción del producto 19', price: 10000, available: 2, favorite: false, category: 'Ropa', offer: 0, image: 'https://via.placeholder.com/50' },
  { id: '20', name: 'Producto 20', shortDescription: 'Breve descripción del producto 20', price: 38000, available: 4, favorite: true, category: 'Muebles', offer: 25, image: 'https://via.placeholder.com/50' },
  { id: '21', name: 'Producto 21', shortDescription: 'Breve descripción del producto 21', price: 28000, available: 0, favorite: true, category: 'Accesorios', offer: 0, image: 'https://via.placeholder.com/50' },
  { id: '22', name: 'Producto 22', shortDescription: 'Breve descripción del producto 22', price: 19000, available: 3, favorite: false, category: 'Electrónica', offer: 0, image: 'https://via.placeholder.com/50' },
  { id: '23', name: 'Producto 23', shortDescription: 'Breve descripción del producto 23', price: 22000, available: 2, favorite: true, category: 'Ropa', offer: 0, image: 'https://via.placeholder.com/50' },
  { id: '24', name: 'Producto 24', shortDescription: 'Breve descripción del producto 24', price: 29000, available: 7, favorite: true, category: 'Muebles', offer: 20, image: 'https://via.placeholder.com/50' },
  { id: '25', name: 'Producto 25', shortDescription: 'Breve descripción del producto 25', price: 18000, available: 4, favorite: true, category: 'Accesorios', offer: 10, image: 'https://via.placeholder.com/50' },
  { id: '26', name: 'Producto 26', shortDescription: 'Breve descripción del producto 26', price: 40000, available: 0, favorite: false, category: 'Electrónica', offer: 15, image: 'https://via.placeholder.com/50' },
  { id: '27', name: 'Producto 27', shortDescription: 'Breve descripción del producto 27', price: 32000, available: 1, favorite: false, category: 'Ropa', offer: 5, image: 'https://via.placeholder.com/50' },
  { id: '28', name: 'Producto 28', shortDescription: 'Breve descripción del producto 28', price: 25000, available: 6, favorite: true, category: 'Muebles', offer: 0, image: 'https://via.placeholder.com/50' },
  { id: '29', name: 'Producto 29', shortDescription: 'Breve descripción del producto 29', price: 22000, available: 0, favorite: false, category: 'Accesorios', offer: 0, image: 'https://via.placeholder.com/50' },
  { id: '30', name: 'Producto 30', shortDescription: 'Breve descripción del producto 30', price: 15000, available: 4, favorite: true, category: 'Electrónica', offer: 5, image: 'https://via.placeholder.com/50' },
  { id: '31', name: 'Producto 31', shortDescription: 'Breve descripción del producto 31', price: 25000, available: 8, favorite: true, category: 'Ropa', offer: 20, image: 'https://via.placeholder.com/50' },
  
  ]);

  const handleFavoriteToggle = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, favorite: !item.favorite } : item
      )
    );
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || 
                            (selectedCategory === 'Oferta' && item.offer > 0) ||
                            item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Artículos</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar artículo"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      <View style={styles.categoryContainer}>
        {['All', 'Electrónica', 'Ropa', 'Muebles', 'Accesorios', 'Oferta'].map((category) => (
          <Pressable 
            key={category}
            style={[styles.categoryButton, selectedCategory === category && styles.categoryButtonSelected]} 
            onPress={() => handleCategorySelect(category)}
          >
            <Text style={styles.categoryButtonText}>{category}</Text>
          </Pressable>
        ))}
      </View>

      <FlatList
        data={filteredItems}
        renderItem={({ item }) => (
          <ItemCard 
            item={item} 
            onFavoriteToggle={handleFavoriteToggle} // Pasar la función para actualizar el favorito
          />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No se encontraron artículos</Text>}
        contentContainerStyle={{ paddingBottom: 20 }} // Añadir algo de espacio al final
      />
    </View>
  );
};

export default ItemList;
