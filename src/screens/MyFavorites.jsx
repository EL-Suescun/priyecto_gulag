import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { doc, setDoc, deleteDoc, getDocs, collection } from 'firebase/firestore';
import styles from '../styles/MyFavoritesStyles';
import ItemCard from './ItemCard';
import { db } from '../database/firebase';

const MyFavorites = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'productos'));
        const fetchedItems = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        const favoriteItems = fetchedItems.filter(item => item.favorite === true);
        setItems(favoriteItems); 
      } catch (error) {
        console.error("Error al cargar los productos favoritos:", error);
      }
    };

    fetchFavorites();
  }, []);

  const handleFavoriteToggle = async (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, favorite: !item.favorite } : item
    );
    setItems(updatedItems);

    const item = updatedItems.find(item => item.id === id);
    try {
      const itemRef = doc(db, 'productos', id); 
      if (item.favorite) {
        await deleteDoc(itemRef);
      } else {
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
        data={items} 
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MyFavorites;
