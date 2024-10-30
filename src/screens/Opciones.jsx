import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from '../styles/OpcionesStyles';

const Opciones = () => {
  return (
    <View style={styles.container}>
      <View style={styles.optionsContainer}>
        <View style={styles.square}>
          <FontAwesome5 name="user" size={40} color="gray" />
          <Text style={styles.squareText}>Atención</Text>
        </View>
        <View style={styles.square}>
          <FontAwesome5 name="heartbeat" size={40} color="gray" />
          <Text style={styles.squareText}>Bienestar</Text>
        </View>
        <View style={styles.square}>
          <FontAwesome5 name="wallet" size={40} color="gray" />
          <Text style={styles.squareText}>Financiero</Text>
        </View>
        <View style={styles.square}>
          <FontAwesome5 name="globe" size={40} color="gray" />
          <Text style={styles.squareText}>Internacionalización</Text>
        </View>
        <View style={styles.square}>
          <FontAwesome5 name="briefcase" size={40} color="gray" />
          <Text style={styles.squareText}>Ofertas laborales</Text>
        </View>
      </View>
    </View>
  );
};


export default Opciones;
