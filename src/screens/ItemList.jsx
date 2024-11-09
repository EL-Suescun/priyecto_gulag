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
      longDescription: 'Descripción completa del Producto 1. Este producto es ideal para uso diario y está diseñado con materiales de alta calidad para garantizar durabilidad y rendimiento.',
      price: 25000,
      available: 10,
      favorite: true,
      category: 'Electrónica',
      offer: 0,
      image: 'https://via.placeholder.com/50'
    },
    {
      id: '2',
      name: 'Producto 2',
      shortDescription: 'Breve descripción del producto 2',
      longDescription: 'Descripción completa del Producto 2. Este artículo de ropa es perfecto para cualquier ocasión, con un estilo moderno y cómodo para todos los días.',
      price: 15000,
      available: 0,
      favorite: false,
      category: 'Ropa',
      offer: 20,
      image: 'https://via.placeholder.com/50'
    },
    {
      id: '3',
      name: 'Producto 3',
      shortDescription: 'Breve descripción del producto 3',
      longDescription: 'Descripción completa del Producto 3. Ideal para los amantes de la tecnología, este dispositivo cuenta con las últimas innovaciones del mercado.',
      price: 35000,
      available: 5,
      favorite: false,
      category: 'Electrónica',
      offer: 0,
      image: 'https://via.placeholder.com/50'
    },
    {
      id: '4',
      name: 'Producto 4',
      shortDescription: 'Breve descripción del producto 4',
      longDescription: 'Descripción completa del Producto 4. Perfecto para decorar tu hogar, este mueble ofrece estilo y funcionalidad a la vez.',
      price: 18000,
      available: 2,
      favorite: true,
      category: 'Muebles',
      offer: 15,
      image: 'https://via.placeholder.com/50'
    },
    {
      id: '5',
      name: 'Producto 5',
      shortDescription: 'Breve descripción del producto 5',
      longDescription: 'Descripción completa del Producto 5. Un accesorio versátil que complementará cualquier conjunto y aportará un toque de elegancia.',
      price: 12000,
      available: 7,
      favorite: false,
      category: 'Accesorios',
      offer: 0,
      image: 'https://via.placeholder.com/50'
    },
    {
      id: '6',
      name: 'Producto 6',
      shortDescription: 'Breve descripción del producto 6',
      longDescription: 'Descripción completa del Producto 6. Con una tecnología avanzada, este producto electrónico es perfecto para mejorar tu experiencia diaria.',
      price: 9000,
      available: 3,
      favorite: true,
      category: 'Electrónica',
      offer: 10,
      image: 'https://via.placeholder.com/50'
    },
    {
      id: '7',
      name: 'Producto 7',
      shortDescription: 'Breve descripción del producto 7',
      longDescription: 'Descripción completa del Producto 7. Una prenda que no solo es cómoda, sino que también tiene un diseño vanguardista.',
      price: 45000,
      available: 0,
      favorite: false,
      category: 'Ropa',
      offer: 25,
      image: 'https://via.placeholder.com/50'
    },
    {
      id: '8',
      name: 'Producto 8',
      shortDescription: 'Breve descripción del producto 8',
      longDescription: 'Descripción completa del Producto 8. Un mueble práctico y elegante que se adapta perfectamente a cualquier hogar.',
      price: 12000,
      available: 8,
      favorite: true,
      category: 'Muebles',
      offer: 5,
      image: 'https://via.placeholder.com/50'
    },
    {
      id: '9',
      name: 'Producto 9',
      shortDescription: 'Breve descripción del producto 9',
      longDescription: 'Descripción completa del Producto 9. Este accesorio combina funcionalidad y diseño para el día a día.',
      price: 28000,
      available: 1,
      favorite: false,
      category: 'Accesorios',
      offer: 0,
      image: 'https://via.placeholder.com/50'
    },
    {
      id: '10',
      name: 'Producto 10',
      shortDescription: 'Breve descripción del producto 10',
      longDescription: 'Descripción completa del Producto 10. Un dispositivo de alta tecnología que te permitirá realizar múltiples tareas de manera eficiente.',
      price: 37000,
      available: 4,
      favorite: true,
      category: 'Electrónica',
      offer: 30,
      image: 'https://via.placeholder.com/50'
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
