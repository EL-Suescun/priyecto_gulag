import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import styles from "../styles/LoginStyles";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Función para validar el formulario
  const validateAndLogin = () => {
    // Validación del usuario
    if (username.length > 10) {
      Alert.alert("Error", "El nombre de usuario no debe exceder 10 caracteres.");
      return;
    }

    // Validación de la contraseña
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])(?=.*\d).{1,8}$/;
    if (!passwordRegex.test(password)) {
      Alert.alert(
        "Error",
        "La contraseña debe tener un máximo de 8 caracteres, incluir una letra mayúscula, un carácter especial, y contener letras y números."
      );
      return;
    }

    // Si pasa las validaciones, navega a la pantalla de inicio
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Text style={styles.title}>GULAG</Text>
        <Text style={styles.subtittle}>compra segura</Text>
      </View>
      
      <View style={styles.roundedView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          maxLength={10}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry
          maxLength={8}
          value={password}
          onChangeText={setPassword}
        />

        <Pressable style={styles.button} onPress={validateAndLogin}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </Pressable>
        <View>
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text style={styles.createAccount}>Crear una cuenta</Text>
          </Pressable>
        </View>  
      </View>
    </View>
  );
};

export default Login;
