import React, { useState } from 'react';
import { View, Text, Image, Alert, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons'; 
import styles from '../styles/ProfileStyles'; 
import VisualProfile from './VisualProfile'; 
import MyPurchases from './MyPurchases'; 
import MyFavorites from './MyFavorites'; 

const exampleUser = {
  firstName: 'Juan',
  lastName: 'Pérez',
  birthDate: '1990-05-15',
  photo: 'https://example.com/profile.jpg',
};

const Profile = ({ user = exampleUser }) => {
  const [selectedImage, setSelectedImage] = useState(user.photo);
  const [showVisualProfile, setShowVisualProfile] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('profile'); 

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

  const handleProfileClick = () => {
    setShowVisualProfile(!showVisualProfile);
    setCurrentScreen('profile'); 
  };

  const handleMyPurchasesClick = () => {
    setCurrentScreen('myPurchases'); 
  };

  const handleMyFavoritesClick = () => {
    setCurrentScreen('myFavorites'); 
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
        {currentScreen === 'profile' && (
          <>
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
