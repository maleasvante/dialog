import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const QuestTypeInsulin = ({ navigation }) => {
  const [selectedInsulin, setSelectedInsulin] = useState(null);

  const handleInsulinPress = (insulin) => {
    setSelectedInsulin(insulin);
    navigation.navigate('App');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Qual insulina você utiliza?</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInsulinPress('Rápida')}
        >
          <Text style={styles.buttonText}>Rápida</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInsulinPress('Ultrarrápida')}
        >
          <Text style={styles.buttonText}>Ultrarrápida</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInsulinPress('NPH')}
        >
          <Text style={styles.buttonText}>NPH</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleInsulinPress('Glargina')}
        >
          <Text style={styles.buttonText}>Glargina</Text>
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
  card: {
    backgroundColor: '#B9B0D9',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
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

export default QuestTypeInsulin;