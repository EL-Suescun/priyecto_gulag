import ItemDetails from './ItemDetails';
import React, { useState } from 'react';
import { View, Text, Image, Pressable, Modal, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import styles from '../styles/ItemListStyles';

const ItemCard = ({ item, onFavoriteToggle, onRemoveItem, showRemoveButton }) => {
  const [isFavorite, setIsFavorite] = useState(item.favorite);
  const [modalVisible, setModalVisible] = useState(false);

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
    onFavoriteToggle(item.id); 
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

      {/* Modal para mostrar los detalles del producto */}
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
