import React, { useState } from 'react';
import { View, Text, Image, Pressable, Modal, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { doc, updateDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../database/firebase';
import styles from '../styles/ItemListStyles';
import ItemDetails from './ItemDetails';

const ItemCard = ({ item, onFavoriteToggle, onRemoveItem, showRemoveButton }) => {
  const [isFavorite, setIsFavorite] = useState(item.favorite);
  const [modalVisible, setModalVisible] = useState(false);

  const handleFavoriteToggle = async () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);
    onFavoriteToggle(item.id);  // Llamar a la función que se pasa como prop

    try {
      const itemRef = doc(db, 'productos', item.id);  // Referencia con el id de Firestore
      await updateDoc(itemRef, { favorite: newFavoriteStatus });

      // Si el producto se marca como favorito, agrégalo a la colección 'favoritos'
      if (newFavoriteStatus) {
        const favoriteRef = doc(db, 'favoritos', item.id);  // Usa el id del producto
        await setDoc(favoriteRef, item);  // Agregar el producto completo a la colección favoritos
      } else {
        // Si se desmarca como favorito, elimínalo de la colección 'favoritos'
        const favoriteRef = doc(db, 'favoritos', item.id);
        await deleteDoc(favoriteRef);  // Eliminar el producto de la colección favoritos
      }
    } catch (error) {
      console.error("Error al actualizar el estado de favorito:", error);
      setIsFavorite(isFavorite);  // Si ocurre un error, revertir el estado
    }
  };

  const discountedPrice = item.offer > 0 ? item.price * (1 - item.offer / 100) : null;
  const isOutOfStock = item.available === 0;

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

      {showRemoveButton && (
        <Pressable onPress={() => onRemoveItem(item.id)} style={styles.removeButton}>
          <Text style={styles.removeButtonText}>Eliminar</Text>
        </Pressable>
      )}

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
