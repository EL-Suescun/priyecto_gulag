import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";
import styles from "../styles/LoginStyles";
import { useNavigation } from "@react-navigation/native";
import app from "../database/firebaseAuth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app); 

const Login = (props) => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const log = async () => {
    try {

      const q = query(collection(db, "users"), where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {

        const userDoc = querySnapshot.docs[0].data();
        const email = userDoc.email;


        await signInWithEmailAndPassword(auth, email, password);
        Alert.alert("Iniciando sesión", "Accediendo...");
        props.navigation.navigate("Home");
      } else {
        Alert.alert(
          "Error de inicio de sesión",
          "Nombre de usuario incorrecto. Por favor, intente nuevamente.",
          [{ text: "OK" }]
        );
      }
    } catch (error) {
      Alert.alert(
        "Error de inicio de sesión",
        "Contraseña incorrecta. Por favor, intente nuevamente.",
        [{ text: "OK" }]
      );
      console.log(error);
    }
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
          onChangeText={(text) => setUsername(text)}
          placeholderTextColor="#777"
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry
          maxLength={8}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor="#777"
        />

        <Pressable style={styles.button} onPress={log}>
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
