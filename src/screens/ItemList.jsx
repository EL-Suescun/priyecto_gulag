import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import ItemCard from './ItemCard';
import styles from '../styles/ItemListStyles';

const ItemList = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); 
  const [items, setItems] = useState([ 
    {
      id: '1',
      name: 'Producto 1',
      shortDescription: 'Breve descripción del producto 1',
      price: 25000,
      available: 10,
      favorite: true, 
      category: 'Electrónica',
      offer: 0, 
      image: 'https://via.placeholder.com/50',
    },
    {
      id: '2',
      name: 'Producto 2',
      shortDescription: 'Breve descripción del producto 2',
      price: 15000,
      available: 0,
      favorite: false, 
      category: 'Ropa',
      offer: 20, 
      image: 'https://via.placeholder.com/50',
    },
    {
      id: '3',
      name: 'Producto 3',
      shortDescription: 'Breve descripción del producto 3',
      price: 35000,
      available: 5,
      favorite: false, 
      category: 'Electrónica',
      offer: 0, 
      image: 'https://via.placeholder.com/50',
    },
    {
      id: '4',
      name: 'Producto 4',
      shortDescription: 'Breve descripción del producto 4',
      price: 18000,
      available: 2,
      favorite: true, 
      category: 'Muebles',
      offer: 15, 
      image: 'https://via.placeholder.com/50',
    },
    {
      id: '5',
      name: 'Producto 5',
      shortDescription: 'Breve descripción del producto 5',
      price: 12000,
      available: 7,
      favorite: false, 
      category: 'Accesorios',
      offer: 0, 
      image: 'https://via.placeholder.com/50',
    },
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
