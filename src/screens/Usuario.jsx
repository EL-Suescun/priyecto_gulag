import React, { useState } from 'react';
import { View, Text, Image, FlatList, Pressable, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/UsuarioStyles';
import Navbar from '../components/Navbar';
import { useNavigation } from '@react-navigation/native';

const Usuario = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [products, setProducts] = useState([]);

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

  //Handles de  add , update , delete
  const handleAddProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

 const handleUpdate = (product) => {
  //pendiente arreglar modificaion
    navigation.navigate('AddProducts', { product, isUpdate: true, addProduct: handleAddProduct });
  };

  const handleDelete = (productToDelete) => {
    Alert.alert(
      'Confirmr eliminar producto',
      '¿Estás seguro?',
      [
        {
          text: 'Cancelar',
        },
        {
          text: 'OK',
          onPress: () => {
            setProducts((prevProducts) => 
              prevProducts.filter(product => product.productName !== productToDelete.productName)
            );
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Pressable onPress={pickImage}>
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.userImage} />
          ) : (
            <Icon name="user-circle" size={100} color="green" style={styles.icon} />
          )}
        </Pressable>

        <View style={styles.textContainer}>
          <Text style={styles.nickname}>Apodo del Usuario</Text>
          <Text style={styles.email}>usuario@correo.com</Text>
        </View>

        <View style={styles.mensajes}>
          <Pressable>
            <Icon name="envelope" size={25} />
          </Pressable>
        </View>
      </View>

      <Navbar />

      <View>
        <Pressable onPress={() => navigation.navigate('AddProducts', { addProduct: handleAddProduct })}>
          <Text style={styles.botonew}>NEW</Text>
        </Pressable>
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            {item.selectedImage ? (
              <Image source={{ uri: item.selectedImage }} style={styles.productImage} />
            ) : (
              <Text style={styles.imagePlaceholder}>Sin imagen</Text>
            )}
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.productName}</Text>
              <Text style={styles.productDescription}>{item.productDescription}</Text>
              <Text style={styles.productPrice}>${item.productPrice}</Text>
              

              <View style={styles.botones}> 
              <Pressable style={styles.buttondelete} onPress={() => handleDelete(item)}>
                <Text>Eliminar</Text>
              </Pressable>
              <Pressable style={styles.buttonupdate}  onPress={() => handleUpdate(item)}>
                <Text>Modificar</Text>
              </Pressable>
              </View> 

            </View>
          </View>
        )}
        keyExtractor={(item) => item.productName}
      />
    </View>
  );
};

export default Usuario;
