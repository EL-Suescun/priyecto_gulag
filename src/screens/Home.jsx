import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/HomeStyles';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Publicacion de productos</Text>
      <Navbar/>
    </View>

  );
};

export default Home;
