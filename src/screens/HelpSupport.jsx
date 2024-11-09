import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/HelpSupportStyles';

const HelpSupport = () => { 
  const [requestType, setRequestType] = useState('queja');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (description.length > 300) {
      Alert.alert("Error", "La descripción no puede exceder 300 caracteres.");
      return;
    }
    Alert.alert("Éxito", "Solicitud enviada con éxito.");
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayuda y Soporte</Text>

      <Text style={styles.label}>Tipo de Solicitud:</Text>
      <Picker
        selectedValue={requestType}
        style={styles.picker}
        onValueChange={(itemValue) => setRequestType(itemValue)}
      >
        <Picker.Item label="Queja" value="queja" />
        <Picker.Item label="Petición" value="peticion" />
        <Picker.Item label="Recurso" value="recurso" />
      </Picker>

      <Text style={styles.label}>Descripción de la Solicitud:</Text>
      <TextInput
        style={styles.textInput}
        value={description}
        onChangeText={setDescription}
        maxLength={300}
        multiline
        numberOfLines={4}
        placeholder="Escriba aquí su solicitud..."
        placeholderTextColor="#999" 
      />

      <Button 
        title="Enviar"
        onPress={handleSubmit}
        color="#007BFF" 
      />
    </View>
  );
};

export default HelpSupport;
