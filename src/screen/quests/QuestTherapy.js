import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { updateUser } from '../../services/db';

const QuestTherapy = ({ navigation }) => {

  const handleSubmit = async (tipoTerapiaInsulina) => {
    await updateUser({ insulinTherapy: tipoTerapiaInsulina });
    navigation.navigate('QuestTypeInsulin');
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Qual é a sua terapia de insulina?</Text>
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit('caneta_seringa')}>
          <Text style={styles.buttonText}>Caneta / Seringa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleSubmit('sem_insulina')}>
          <Text style={styles.buttonText}>Sem insulina</Text>
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
  },
  card: {
    backgroundColor: '#B9B0D9',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    gap: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    width: '80%',
    textAlign: 'center' 
  },
  button: {
    backgroundColor: '#7D0062',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default QuestTherapy;