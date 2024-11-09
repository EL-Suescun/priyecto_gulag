import React, { useState } from 'react';
import { View, Text, Image, Button, Modal, TextInput, Alert, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/ProfileStyles'; 

const exampleUser = {
  firstName: 'Juan',
  lastName: 'Pérez',
  birthDate: '1990-05-15', 
  photo: 'https://example.com/profile.jpg',
};

const Profile = ({ user = exampleUser }) => {
  const [selectedImage, setSelectedImage] = useState(user.photo);
  const [modalVisible, setModalVisible] = useState(false);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [birthDate, setBirthDate] = useState(user.birthDate);

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

  const saveChanges = () => {
    Alert.alert('Datos guardados', 'Tus datos han sido actualizados correctamente.');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>

      <View style={styles.card}>
        <Image source={{ uri: selectedImage }} style={styles.photo} />
        
        <Button title="Cambiar Imagen de Perfil" onPress={pickImage} color="#008CBA" />

        <Text style={styles.label}>Nombre: {firstName}</Text>
        <Text style={styles.label}>Apellido: {lastName}</Text>
        <Text style={styles.label}>
          Fecha de Nacimiento: {formatDate(birthDate)}
        </Text>

        <Button title="Actualizar Datos" onPress={() => setModalVisible(true)} color="#28a745" />
      </View>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Actualizar Perfil</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre"
            value={firstName}
            onChangeText={setFirstName}
          />
          <TextInput
            style={styles.input}
            placeholder="Apellido"
            value={lastName}
            onChangeText={setLastName}
          />
          <TextInput
            style={styles.input}
            placeholder="Fecha de Nacimiento (DD/MM/AAAA)"
            value={birthDate}
            onChangeText={setBirthDate}
          />

          <View style={styles.buttonContainer}>
            <Button title="Guardar Cambios" onPress={saveChanges} color="#28a745" />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} color="#d9534f" />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}/${date.getFullYear()}`;
};

export default Profile;
