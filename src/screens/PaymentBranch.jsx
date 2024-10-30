import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import  styles from '../styles/PaymentBranchStyles'

const PaymentBranch = () => {
  const [items, setItems] = useState([
    { id: '1', name: 'Producto 1', description: 'Breve descripción del producto 1', price: 25000, quantity: 1, image: 'https://via.placeholder.com/50' },
    { id: '2', name: 'Producto 2', description: 'Breve descripción del producto 2', price: 15000, quantity: 1, image: 'https://via.placeholder.com/50' }
  ]);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const updateQuantity = (id, quantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: parseInt(quantity) } : item
      )
    );
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePayment = () => {
    if (!address) {
      Alert.alert('Error', 'Por favor, ingresa una dirección de entrega.');
      return;
    }
    if (!paymentMethod) {
      Alert.alert('Error', 'Por favor, selecciona una forma de pago.');
      return;
    }
    // Aquí iría la llamada a la API de simulación de pago
    Alert.alert('Pago Exitoso', `Total pagado: $${calculateTotal()}`);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.thumbnail} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text>{item.description}</Text>
        <TextInput
          style={styles.numericInput}
          keyboardType="numeric"
          maxLength={2}
          value={item.quantity.toString()}
          onChangeText={(quantity) => updateQuantity(item.id, quantity)}
          placeholder="Cantidad"
        />
        <Text style={styles.itemPrice}>${item.price * item.quantity}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sucursal de Pago</Text>

      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <TextInput
        placeholder="Dirección de entrega"
        value={address}
        onChangeText={setAddress}
        maxLength={30}
        style={styles.input}
      />

      <Text>Forma de pago:</Text>
      <Picker
        selectedValue={paymentMethod}
        onValueChange={(itemValue) => setPaymentMethod(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Seleccionar forma de pago" value="" />
        <Picker.Item label="PSE" value="PSE" />
        <Picker.Item label="Tarjeta de crédito" value="Tarjeta de crédito" />
        <Picker.Item label="Efecty" value="Efecty" />
      </Picker>

      <Text style={styles.total}>Valor Total: ${calculateTotal()}</Text>

      <Button title="Proceder al Pago" onPress={handlePayment} />
    </View>
  );
};

export default PaymentBranch;
 