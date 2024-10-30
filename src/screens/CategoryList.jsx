import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/CategoryListStyles';

const CategoryList = ({ categories, items }) => {
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

      {/* Mostrar categorías */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.categoryButton,
              selectedCategory === item.name && styles.selectedCategory,
            ]}
            onPress={() => handleCategorySelect(item.name)}
          >
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.title}>Artículos</Text>

      {/* Mostrar artículos filtrados */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No hay artículos para esta categoría</Text>
        }
      />
    </View>
  );
};

export default CategoryList;
