import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from '../styles/OffersStyles';
import Icon from 'react-native-vector-icons/FontAwesome'; // Asegúrate de tener esta librería instalada

const Offers = ({ offersData }) => {
  const exampleOffers = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      description: 'Camiseta de verano',
      value: 20000,
      discount: 20,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      description: 'Zapatillas deportivas',
      value: 80000,
      discount: 35,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
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
        data={offersData || exampleOffers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.offerItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>Valor: ${item.value}</Text>
              <View style={styles.discountContainer}>
                <Text style={styles.discount}>Descuento: {item.discount}%</Text>
                <Icon name="tag" size={18} color="#FF6347" style={styles.discountIcon} />
              </View>
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
