import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import styles from '../styles/ItemShoppingCardStyles';

const ItemShoppingCard = ({ item, onFavoriteToggle, onRemoveItem, onIncrease, onDecrease }) => {

  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.thumbnail} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.shortDescription}</Text>

        {item.discountedPrice ? (
          <Text style={styles.itemPrice}>
            <Text style={styles.itemPriceOriginal}>
              ${item.price.toFixed(2)}
            </Text>
            ${item.discountedPrice.toFixed(2)}
          </Text>
        ) : (
          <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        )}

        <View style={styles.quantityContainer}>
          <Text style={styles.itemQuantity}>Cantidad: {item.cantidad}</Text>
          <View style={styles.quantityButtons}>
            <Pressable onPress={() => onDecrease(item.id)}>
              <Icon name="minus" size={20} color="#ff6347" />
            </Pressable>
            <Pressable onPress={() => onIncrease(item.id)}>
              <Icon name="plus" size={20} color="#ff6347" />
            </Pressable>
          </View>
        </View>

        <Pressable onPress={() => onRemoveItem(item.id)}>
          <Text style={styles.removeItem}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ItemShoppingCard;
