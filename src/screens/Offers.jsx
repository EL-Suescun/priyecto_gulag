import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from '../styles/OffersStyles';

const Offers = ({ offers }) => {
    const offers = [
        {
          id: 1,
          image: 'https://example.com/product1.jpg',
          description: 'Camiseta de verano',
          value: 20000,
          discount: 20,
        },
        {
          id: 2,
          image: 'https://example.com/product2.jpg',
          description: 'Zapatillas deportivas',
          value: 80000,
          discount: 35,
        },
        {
          id: 3,
          image: 'https://example.com/product3.jpg',
          description: 'Gafas de sol',
          value: 50000,
          discount: 5,
        },
      ];
      
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ofertas</Text>

      {/* Listado de ofertas */}
      <FlatList
        data={offers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.offerItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>Valor: ${item.value}</Text>
              <Text style={styles.discount}>Descuento: {item.discount}%</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No hay ofertas disponibles.</Text>
        }
      />
    </View>
  );
};

export default Offers;
