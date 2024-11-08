import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import styles from "../styles/LoginStyles";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigateToHome = () => {
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
          placeholderTextColor="#777"
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry
          maxLength={8}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#777"
        />

        <Pressable style={styles.button} onPress={navigateToHome}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </Pressable>
        
        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text style={styles.createAccount}>Crear una cuenta</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
