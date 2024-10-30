import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/AddProductStyles';
import { useNavigation } from '@react-navigation/native';

const AddProducts = ({ route }) => {
  const navigation = useNavigation();
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const { addProduct } = route.params; 

  //Documentacion desde expo de como usar el picker
  const pickImage = async () => {
    let result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (result.granted === false) {
      alert('Se requieren permisos para acceder a la galeria');
      return;
    }

    let imageResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!imageResult.canceled) {
      setSelectedImage(imageResult.assets[0].uri);
    }
  };

  const handleAddProduct = () => {
    const newProduct = { productName, productDescription, productPrice, selectedImage };
    addProduct(newProduct);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar Producto</Text>
      
      <TextInput
        placeholder="Nombre del producto"
        value={productName}
        onChangeText={setProductName}
        style={styles.input}
      />
      
      <TextInput
        placeholder="Descripcion del producto"
        value={productDescription}
        onChangeText={setProductDescription}
        style={styles.input}
      />
      
      <TextInput
        placeholder="Precio del producto"
        value={productPrice}
        onChangeText={setProductPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      
      <Text style={styles.tittleimage}>Agregar imagen del producto</Text>
      <Pressable onPress={pickImage}>
        {selectedImage ? (
          <Image source={{ uri: selectedImage }} style={styles.image} />
        ) : (

          <Text style={styles.imagePlaceholder}>Pick</Text>
        )}
      </Pressable>

      <Pressable style={styles.button} title="Agregar" onPress={handleAddProduct}>
        <Text style={styles.buttonText}>Agregar</Text>
      </Pressable>
    </View>
  );
};

export default AddProducts;
