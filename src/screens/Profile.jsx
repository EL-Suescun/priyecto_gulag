import React, { useState } from 'react';
import { View, Text, Image, Alert, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de tener esta librería instalada
import styles from '../styles/ProfileStyles'; // Asegúrate de tener tus estilos definidos
import VisualProfile from './VisualProfile'; // Importa VisualProfile
import MyPurchases from './MyPurchases'; // Importa MyPurchases
import MyFavorites from './MyFavorites'; // Importa MyFavorites

const exampleUser = {
  firstName: 'Juan',
  lastName: 'Pérez',
  birthDate: '1990-05-15',
  photo: 'https://example.com/profile.jpg',
};

const Profile = ({ user = exampleUser }) => {
  const [selectedImage, setSelectedImage] = useState(user.photo);
  const [showVisualProfile, setShowVisualProfile] = useState(false); // Estado para mostrar VisualProfile
  const [currentScreen, setCurrentScreen] = useState('profile'); // Estado para gestionar qué pantalla mostrar

  // Función para seleccionar una nueva imagen
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      Alert.alert('¡Necesitas dar permiso para acceder a la galería!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  // Función para manejar el clic en el botón de "Perfil"
  const handleProfileClick = () => {
    setShowVisualProfile(!showVisualProfile); // Cambia el estado para mostrar u ocultar VisualProfile
    setCurrentScreen('profile'); // Cambia la pantalla actual a 'profile'
  };

  // Función para manejar el clic en el botón de "Mis compras"
  const handleMyPurchasesClick = () => {
    setCurrentScreen('myPurchases'); // Cambia la pantalla actual a 'myPurchases'
  };

  // Función para manejar el clic en el botón de "Favoritos"
  const handleMyFavoritesClick = () => {
    setCurrentScreen('myFavorites'); // Cambia la pantalla actual a 'myFavorites'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.card}>
        <Pressable onPress={pickImage}>
          <Image source={{ uri: selectedImage }} style={styles.photo} />
        </Pressable>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.iconButton} onPress={handleProfileClick}>
          <Ionicons name="person-outline" size={24} color="#008CBA" />
          <Text style={styles.iconLabel}>Perfil</Text>
        </Pressable>

        <Pressable style={styles.iconButton} onPress={handleMyPurchasesClick}>
          <Ionicons name="cart-outline" size={24} color="#008CBA" />
          <Text style={styles.iconLabel}>Mis compras</Text>
        </Pressable>

        <Pressable style={styles.iconButton} onPress={handleMyFavoritesClick}>
          <Ionicons name="heart-outline" size={24} color="#008CBA" />
          <Text style={styles.iconLabel}>Favoritos</Text>
        </Pressable>
      </View>

      <View style={styles.cardScreen}>
        {/* Mostrar la pantalla correspondiente según el estado 'currentScreen' */}
        {currentScreen === 'profile' && (
          <>
            {/* Muestra VisualProfile debajo de los botones si el estado 'showVisualProfile' es verdadero */}
            {showVisualProfile && <VisualProfile user={user} />}
          </>
        )}

        {currentScreen === 'myPurchases' && <MyPurchases user={user} />}
        {currentScreen === 'myFavorites' && <MyFavorites user={user} />}
      </View>
    </View>
  );
};

export default Profile;
