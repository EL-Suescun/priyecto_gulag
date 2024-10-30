import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from '../styles/MyPurchasesStyles';

// Ejemplo de datos de compras
const examplePurchases = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150', // URL de imagen de muestra
    description: 'Producto 1 - Descripción del producto de muestra',
    status: 'En camino',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    description: 'Producto 2 - Descripción del producto de muestra',
    status: 'Entregado',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    description: 'Producto 3 - Descripción del producto de muestra',
    status: 'Cancelado',
  },
];

const MyPurchases = ({ purchases = examplePurchases }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Compras</Text>

      {/* Listado de compras */}
      <FlatList
        data={purchases}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.purchaseItem}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.status}>Estado: {item.status}</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No tienes compras realizadas.</Text>
        }
      />
    </View>
  );
};

export default MyPurchases;
