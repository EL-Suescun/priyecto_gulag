import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from '../styles/MyFavoritesStyles';

const MyFavorites = ({ favorites }) => {
    const favorites = [
        {
          id: 1,
          image: 'https://example.com/product1.jpg',
          description: 'Camiseta de algodón',
          status: 'Disponible',
        },
        {
          id: 2,
          image: 'https://example.com/product2.jpg',
          description: 'Reloj digital',
          status: 'No disponible',
        },
        {
          id: 3,
          image: 'https://example.com/product3.jpg',
          description: 'Auriculares inalámbricos',
          status: 'Disponible',
        },
      ];      
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Favoritos</Text>

      {/* Listado de favoritos */}
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.favoriteItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.status}>Estado: {item.status}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No tienes ítems favoritos.</Text>
        }
      />
    </View>
  );
};

export default MyFavorites;
