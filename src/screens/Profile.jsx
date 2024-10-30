import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/ProfileStyles';

// Datos del usuario de ejemplo
const exampleUser = {
    firstName: 'Juan',
    lastName: 'Pérez',
    birthDate: '1990-05-15', // Fecha en formato YYYY-MM-DD
    photo: 'https://example.com/profile.jpg',
};

const Profile = ({ user = exampleUser }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      {/* Imagen de perfil */}
      <Image source={{ uri: user.photo }} style={styles.photo} />

      {/* Información del usuario */}
      <Text style={styles.label}>Nombre: {user.firstName}</Text>
      <Text style={styles.label}>Apellido: {user.lastName}</Text>
      <Text style={styles.label}>
        Fecha de Nacimiento: {formatDate(user.birthDate)}
      </Text>
    </View>
  );
};

// Función para formatear la fecha
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${date.getFullYear()}`;
};

export default Profile;
