import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Platform, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/RegisterStyles"; 
import CountrySelect from '../components/CountrySelect'; 
import Icon from 'react-native-vector-icons/Ionicons';

const Register = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('Colombia');
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/;
    return regex.test(password);
  };

  const validateEmail = (email) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return regex.test(email);
  };

  const validateAge = (birthDate) => {
    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age >= 18 && age <= 50;
  };

  const handleRegister = () => {
    if (username.length > 10) {
      Alert.alert('Error', 'El nombre de usuario no debe exceder los 10 caracteres.');
      return;
    }
    if (!validatePassword(password)) {
      Alert.alert('Error', 'La contraseña debe tener 8 caracteres, incluyendo una mayúscula, un número y un caracter especial.');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Por favor, ingrese un correo válido.');
      return;
    }
    if (!validateAge(birthDate)) {
      Alert.alert('Error', 'No está en el rango de edad para crear la cuenta.');
      return;
    }
    if (address.length > 30) {
      Alert.alert('Error', 'La dirección no debe exceder los 30 caracteres.');
      return;
    }

    Alert.alert('Registro Exitoso', 'Ahora puedes iniciar sesión.');
    navigation.navigate('Login');
  };

  const onDateChange = (event, selectedDate) => {
    if (event.type === 'set') { 
      setShowDatePicker(false);
      setBirthDate(selectedDate.toISOString().split('T')[0]); 
    } else {
      setShowDatePicker(false); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuarios</Text>

      <TextInput
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
        maxLength={10}
        style={styles.input}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          maxLength={8}
          style={styles.passwordInput}
        />
        <Pressable onPress={() => setShowPassword(!showPassword)}>
          <Icon name={showPassword ? "eye-off" : "eye"} size={24} color="#000" />
        </Pressable>
      </View>

      <TextInput
        placeholder="Correo"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />

      <Text style={styles.dateLabel}>Selecciona tu fecha de nacimiento:</Text>
      <Pressable style={styles.dateButton} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateButtonText}>{birthDate ? birthDate : "Fecha no seleccionada"}</Text>
      </Pressable>

      {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={onDateChange}
          maximumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 18))}
          minimumDate={new Date(new Date().setFullYear(new Date().getFullYear() - 50))}
        />
      )}

      <TextInput
        placeholder="Dirección"
        value={address}
        onChangeText={setAddress}
        maxLength={30}
        style={styles.input}
      />

      <CountrySelect 
        country={country} 
        setCountry={setCountry} 
        department={department} 
        setDepartment={setDepartment} 
        city={city} 
        setCity={setCity} 
      />

      <Pressable style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Registrar</Text>
      </Pressable>
    </View>
  );
};

export default Register;
