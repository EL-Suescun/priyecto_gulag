import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, Modal, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { doc, updateDoc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from '../database/firebase';
import styles from '../styles/ItemCardStyles';
import ItemDetails from './ItemDetails';

const ItemCard = ({ item, onFavoriteToggle }) => {
  const [isFavorite, setIsFavorite] = useState(item.favorite);
  const [modalVisible, setModalVisible] = useState(false);


  const handleFavoriteToggle = async () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);
    onFavoriteToggle(item.id);  
    try {
      const itemRef = doc(db, 'productos', item.id);  
      await updateDoc(itemRef, { favorite: newFavoriteStatus });

      if (newFavoriteStatus) {
        const favoriteRef = doc(db, 'favoritos', item.id); 
        const favoriteItem = { ...item, favorite: true };  
        await setDoc(favoriteRef, favoriteItem);  
      } else {
        const favoriteRef = doc(db, 'favoritos', item.id);
        await deleteDoc(favoriteRef);  
      }
    } catch (error) {
      console.error("Error al actualizar el estado de favorito:", error);
      setIsFavorite(isFavorite);  
    }
  };

  const discountedPrice = item.offer > 0 ? item.price * (1 - item.offer / 100) : null;
  const isOutOfStock = item.available === 0;

  const handleAddToCart = async () => {
    try {
      const cartRef = doc(db, 'carrito', item.id);
      const cartDoc = await getDoc(cartRef);

      if (cartDoc.exists()) {
        const currentQuantity = cartDoc.data().cantidad || 0;
        await updateDoc(cartRef, { cantidad: currentQuantity + 1 });
      } else {
        const cartItem = {
          id: item.id,
          image: item.image,
          longDescription: item.longDescription,
          name: item.name,
          price: item.price,
          shortDescription: item.shortDescription,
          cantidad: 1,  
        };
        await setDoc(cartRef, cartItem);
      }
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
    }
  };

  return (
    <View style={styles.itemContainer}>
      <Pressable onPress={() => setModalVisible(true)}>
        <Image source={{ uri: item.image }} style={styles.thumbnail} />
      </Pressable>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.shortDescription}</Text>

        {discountedPrice ? (
          <>
            <Text style={styles.itemPriceOriginal}>${item.price.toFixed(2)}</Text>
            <Text style={styles.itemPriceDiscounted}>${discountedPrice.toFixed(2)}</Text>
          </>
        ) : (
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        )}
      </View>

      <Pressable onPress={handleFavoriteToggle} style={styles.favoriteIcon}>
        <Icon name={isFavorite ? 'favorite' : 'favorite-border'} size={30} color={isFavorite ? 'red' : 'gray'} />
      </Pressable>

      {isOutOfStock && <Text style={styles.outOfStockText}>Agotado</Text>}

      <Pressable onPress={handleAddToCart} style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Agregar al carrito</Text>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ItemDetails item={item} onFavoriteToggle={handleFavoriteToggle} />
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ItemCard;
