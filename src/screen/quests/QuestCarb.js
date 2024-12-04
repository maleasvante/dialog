import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { updateUser } from '../../services/db';

const QuestCarb = ({ navigation }) => {
  const [carb, setCarb] = useState('');

  const handleCarbChange = (text) => {
    setCarb(text);
  };

  const handleSubmit = async () => {
    const resposta = await updateUser({ carb: carb});
    navigation.navigate('QuestInsulinCorrection'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>
        Qual sua relação carboidratos / insulina?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={handleCarbChange}
          value={carb}
          keyboardType='number-pad'
          placeholder="15g"
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

export default QuestCarb;