import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/PaymentBranchStyles';

const PaymentBranch = ({ items, total, closeModal }) => {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cartItems, setCartItems] = useState(items);

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
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
    Alert.alert('Pago Exitoso', `Total pagado: $${total}`);
    closeModal();
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.thumbnail} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.shortDescription}</Text>
        <Text style={styles.itemPrice}>${item.price * item.quantity}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Button title="-" onPress={() => updateQuantity(item.id, item.quantity - 1)} />
        <Text>{item.quantity}</Text>
        <Button title="+" onPress={() => updateQuantity(item.id, item.quantity + 1)} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sucursal de Pago</Text>

      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />

      <TextInput
        placeholder="Dirección de entrega"
        value={address}
        onChangeText={setAddress}
        maxLength={30}
        style={styles.input}
      />

      <Text style={styles.paymentMethodLabel}>Forma de pago:</Text>
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

      <Text style={styles.total}>Valor Total: ${total}</Text>

      <Button title="Proceder al Pago" onPress={handlePayment} />
    </View>
  );
};

export default PaymentBranch;
