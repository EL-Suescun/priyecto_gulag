import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importar el ícono
import styles from '../styles/ItemListStyles';

const ItemCard = ({ item, onFavoriteToggle }) => {
  // El estado local solo es necesario para la visualización del favorito
  const [isFavorite, setIsFavorite] = useState(item.favorite);

  // Función para manejar la selección y deselección del favorito
  const handleFavoriteToggle = () => {
    // Actualizar el estado local y propagar el cambio hacia el componente superior
    setIsFavorite(!isFavorite);
    onFavoriteToggle(item.id); // Llamar a la función del componente padre
  };

  // Calcular precio con descuento
  const discountedPrice = item.offer > 0 ? item.price * (1 - item.offer / 100) : null;

  // Determinar si el producto está agotado
  const isOutOfStock = item.available === 0;

  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.thumbnail} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>
          {item.name}
        </Text>
        <Text style={styles.itemDescription}>
          {item.shortDescription}
        </Text>
        
        {/* Mostrar precio con descuento y precio original */}
        {discountedPrice ? (
          <>
            <Text style={styles.itemPriceOriginal}>
              ${item.price.toFixed(2)}
            </Text>
            <Text style={styles.itemPriceDiscounted}>
              ${discountedPrice.toFixed(2)}
            </Text>
          </>
        ) : (
          <Text style={styles.itemPrice}>
            ${item.price.toFixed(2)}
          </Text>
        )}
      </View>

      {/* Corazón en la esquina superior derecha */}
      <Pressable onPress={handleFavoriteToggle} style={styles.favoriteIcon}>
        <Icon
          name={isFavorite ? "favorite" : "favorite-border"} // Icono de corazón lleno o borde
          size={30}
          color={isFavorite ? 'red' : 'gray'} // Cambiar color si es favorito
        />
      </Pressable>

      {/* Si el producto está agotado, mostrar un texto adicional */}
      {isOutOfStock && (
        <Text style={styles.outOfStockText}>Agotado</Text>
      )}
    </View>
  );
};

export default ItemCard;
