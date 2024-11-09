import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { doc, setDoc, deleteDoc, getDocs, collection } from 'firebase/firestore';
import styles from '../styles/MyFavoritesStyles';
import ItemCard from './ItemCard';
import { db } from '../database/firebase';

const MyFavorites = () => {
  const [items, setItems] = useState([]);

  // Cargar los productos favoritos de Firestore
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'productos')); // Cambié 'favoritos' a 'productos'
        const fetchedItems = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Filtrar solo los productos con 'favorite' en true
        const favoriteItems = fetchedItems.filter(item => item.favorite === true);
        setItems(favoriteItems);  // Establecer solo los favoritos en el estado
      } catch (error) {
        console.error("Error al cargar los productos favoritos:", error);
      }
    };

    fetchFavorites();
  }, []);

  const handleFavoriteToggle = async (id) => {
    // Cambiar el estado de favorito en la lista
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, favorite: !item.favorite } : item
    );
    setItems(updatedItems);

    const item = updatedItems.find(item => item.id === id);
    try {
      const itemRef = doc(db, 'productos', id); // Cambié 'favoritos' a 'productos'
      if (item.favorite) {
        // Si el producto es favorito, eliminarlo de la colección 'productos'
        await deleteDoc(itemRef);
      } else {
        // Si el producto no es favorito, agregarlo a la colección 'productos'
        await setDoc(itemRef, item);
      }
    } catch (error) {
      console.error("Error al actualizar el estado de favorito:", error);
    }
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
      <Text style={styles.title}>Mis Productos Favoritos</Text>
      <FlatList
        data={items}  // Usar solo los productos favoritos
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MyFavorites;
