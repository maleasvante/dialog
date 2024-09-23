import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { auth, db } from "../services/firebaseConfig";
import { setDoc, doc, Timestamp } from "firebase/firestore";

const SingUp = ({ route, navigation }) => {
  const [password, setPassword] = useState("");
  const { email } = route.params;

  async function cadastrouser() {
    if (password.length < 6) {
      Alert.alert("A senha precisa de no mínimo 6 caracteres");
      return;
    }

    retorno = createUserWithEmailAndPassword(auth, email, password);
    console.log(retorno);
    const response = await setDoc(doc(db, "usuarios", email), {
      created_at: Timestamp.now(),
    });
    console.log(response);
    navigation.navigate('questName');
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.back}>{"< Voltar"}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>Crie sua senha</Text>
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        minLength={8}
        style={styles.input}
      />
      <Text style={styles.instructions}>Use no mínimo 6 caracteres</Text>
      <TouchableOpacity style={styles.button} onPress={cadastrouser}>
        <Text style={styles.buttonText}>Crie sua conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCE7FF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  touchableOpacity: {
    position: "absolute",
    top: "5%",
    left: "5%",
  },
  back: {
    fontSize: 18,
    textAlign: "left",
  },
  text: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#B9B0D9",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 2,
    width: "100%",
    backgroundColor: "#B9B0D9",
    textAlign: "center",
    fontSize: 18,
  },
  instructions: {
    fontSize: 12,
    marginBottom: 7,
  },
  button: {
    backgroundColor: "#7D0062",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    fontWeight: "bold",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});

export default SingUp;
