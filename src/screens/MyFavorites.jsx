import React, { useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import styles from '../styles/MyFavoritesStyles';


const exampleFavorites = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    description: 'Camiseta de algodón',
    status: 'Disponible',
    isFavorite: true,
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    description: 'Reloj digital',
    status: 'No disponible',
    isFavorite: false,
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    description: 'Auriculares inalámbricos',
    status: 'Disponible',
    isFavorite: true,
  },
];

const MyFavorites = ({ favorites = exampleFavorites }) => {
  const [favoriteItems, setFavoriteItems] = useState(favorites);

  const toggleFavorite = (id) => {
    setFavoriteItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Favoritos</Text>

      <FlatList
        data={favoriteItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.favoriteItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.status}>Estado: {item.status}</Text>
            </View>
            <Icon
              name={item.isFavorite ? 'heart' : 'heart-o'}
              size={24}
              color={item.isFavorite ? '#FF6347' : '#888'} 
              style={styles.heartIcon}
              onPress={() => toggleFavorite(item.id)} 
            />
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
