import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { auth } from "../services/firebaseConfig";

const Login = ({ route, navigation }) => {
  const { email } = route.params;
  const [username, setUsername] = useState(email);
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (password?.length < 6) {
      return Alert.alert("Senha precisa ter no minimo 6 digitos");
    }
    await signInWithEmailAndPassword(auth, email, password);
    navigation.navigate("QuestName");
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.nameapp}>Dialog</Text>
      <TextInput
        style={styles.input}
        placeholder={email}
        value={username}
        onChangeText={(text) => setUsername(text)}
        disabled
      />
      <Text style={styles.instruction}> Digite sua senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
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
  nameapp: {
    fontSize: 22,
    marginBottom: 80,
    marginTop: 5,
    color: "#7D0062",
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
  instruction: {
    fontSize: 18,
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#7D0062",
    padding: 10,
    borderRadius: 5,
    width: "100%",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Login;
