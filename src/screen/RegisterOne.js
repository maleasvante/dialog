import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  Image,
  Alert,
} from "react-native";
import { StyleSheet } from "react-native";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { getUserData } from "../services/db";

const Register_one = ({ navigation }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const analyseUserData = async () => {

      const user = await getUserData();
      console.log(user);
      if (user) {
        navigation.navigate('App');
      }
    }

    analyseUserData();
  },[])

  const handleEmailSubmit = async () => {
    let exist = null;
    try {
      exist = (await getDoc(doc(db, "usuarios", email)))?.data();
      if (exist) {
        navigation.navigate("Login", {
          email: email,
        });
      } else {
        navigation.navigate("SignUp", {
          email: email,
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.nameapp}>Dialog</Text>
      <Text style={styles.welcome}>Bem-vindo!</Text>
      <Text style={styles.instructions}>
        Digite seu endereço de e-mail para iniciar:
      </Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        textAlign={"center"}
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={handleEmailSubmit}>
        <Text style={styles.buttonText}>Avançar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  nameapp: {
    fontSize: 22,
    marginBottom: 80,
    marginTop: 5,
    color: "#7D0062",
  },
  welcome: {
    fontSize: 20,
    marginBottom: 50,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#CCE7FF",
    paddingBottom: 150,
  },
  instructions: {
    fontSize: 18,
    marginBottom: 20,
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

export default Register_one;
