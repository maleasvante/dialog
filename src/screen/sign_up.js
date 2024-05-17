import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Sign_up = ({navigation}) => {
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
     <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.goBack}>{'< Voltar'}</Text>
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
      <Text>Use no mínimo 8 caracteres</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Crie sua conta</Text>
      </TouchableOpacity>
    </View>
  ),
},

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CCE7FF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  goBack: {
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
    marginBottom: 15,
    width: "100%",
    backgroundColor: "#B9B0D9",
    textAlign: "center",
    fontSize: 18,
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

export default Sign_up;
