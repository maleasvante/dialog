import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { updateUser } from '../../services/db';

const QuestInsulinCorrection = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleSubmit = async () => {
    await updateUser({name: name})
    navigation.navigate('App'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>
        Qual seu fator de correção de insulina?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={handleNameChange}
          value={name}
          placeholder="Digite a quantidade de Carboidratos"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCE7FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    backgroundColor: '#B9B0D9',
    padding: 30,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    gap: 20
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '90%',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: "#E9E9E9",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: "#B9B0D9",
    textAlign: "center",
    fontSize: 18,
  },
  button: {
    backgroundColor: '#7D0062',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default QuestInsulinCorrection;