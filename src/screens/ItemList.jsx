import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import { getDocs, collection } from 'firebase/firestore';
import { db } from '../database/firebase';
import ItemCard from './ItemCard';
import styles from '../styles/ItemListStyles';

const ItemList = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'productos'));
      const fetchedItems = querySnapshot.docs.map(doc => ({
        id: doc.id,  // Usa el id de Firestore
        ...doc.data(),
      }));
      setItems(fetchedItems);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };

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
            onFavoriteToggle={handleFavoriteToggle} 
          />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No se encontraron artículos</Text>}
        contentContainerStyle={{ paddingBottom: 20 }} 
      />
    </View>
  );
};

export default ItemList;
