import React, { useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from '../styles/CategoryListStyles';

// Ejemplo de categorías
const categories = [
  { id: 1, name: 'Electrónica', image: 'https://example.com/electronics.png' },
  { id: 2, name: 'Ropa', image: 'https://example.com/clothing.png' },
  { id: 3, name: 'Hogar y Jardín', image: 'https://example.com/home_garden.png' },
  { id: 4, name: 'Deportes', image: 'https://example.com/sports.png' },
  { id: 5, name: 'Juguetes', image: 'https://example.com/toys.png' },
];

// Ejemplo de artículos
const items = [
  { id: 1, name: 'Smartphone', category: 'Electrónica', image: 'https://example.com/smartphone.png' },
  { id: 2, name: 'Laptop', category: 'Electrónica', image: 'https://example.com/laptop.png' },
  { id: 3, name: 'Camiseta', category: 'Ropa', image: 'https://example.com/tshirt.png' },
  { id: 4, name: 'Jeans', category: 'Ropa', image: 'https://example.com/jeans.png' },
  { id: 5, name: 'Sofá', category: 'Hogar y Jardín', image: 'https://example.com/sofa.png' },
  { id: 6, name: 'Maceta', category: 'Hogar y Jardín', image: 'https://example.com/pot.png' },
  { id: 7, name: 'Pelota de Fútbol', category: 'Deportes', image: 'https://example.com/soccer_ball.png' },
  { id: 8, name: 'Raqueta de Tenis', category: 'Deportes', image: 'https://example.com/tennis_racket.png' },
  { id: 9, name: 'Muñeca', category: 'Juguetes', image: 'https://example.com/doll.png' },
  { id: 10, name: 'Bloques de Construcción', category: 'Juguetes', image: 'https://example.com/building_blocks.png' },
];

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filtrar artículos según la categoría seleccionada
  const filteredItems = selectedCategory
    ? items.filter((item) => item.category === selectedCategory)
    : items;

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorías</Text>

      {/* Contenedor de categorías */}
      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          renderItem={({ item }) => (
            <View
              style={[
                styles.categoryButton,
                selectedCategory === item.name && styles.selectedCategory,
              ]}
              onTouchEnd={() => handleCategorySelect(item.name)} // Usar onTouchEnd en lugar de TouchableOpacity
            >
              <Image source={{ uri: item.image }} style={styles.categoryImage} />
              <Text style={styles.categoryText}>{item.name}</Text>
            </View>
          )}
        />
      </View>

      <Text style={styles.title}>Artículos</Text>

      {/* Contenedor de artículos */}
      <View style={styles.itemContainer}>
        <FlatList
          data={filteredItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemCard}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No hay artículos para esta categoría</Text>
          }
        />
      </View>
    </View>
  );
};

export default CategoryList;
