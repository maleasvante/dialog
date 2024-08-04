import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker,{ DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const QuestAge = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    if (Platform.OS !== 'ios') {
      DateTimePickerAndroid.open({
        value: date,
        onChange,
        is24Hour: true,
      });
    } 
  };

  const handleSubmit = async () => {
    //const dadosJson = JSON.parse(await AsyncStorage.getItem('dados'));
    //qdadosJson.date = date;
    //await AsyncStorage.setItem('dados', JSON.stringify(dadosJson));
    navigation.navigate('QuestTherapy'); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Nos informe sua data de nascimento</Text>
        {Platform.OS === 'android' && (
          <TouchableOpacity style={styles.dateStyle} onPress={showDatepicker}>
            <Text style={{}}>{date.toLocaleDateString('pt-BR')}</Text>
          </TouchableOpacity>
        )}
        {Platform.OS == 'ios' && (
          <DateTimePicker
            value={date}
            is24Hour={true}
            onChange={onChange}
          />
        )}
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
      dateStyle: {
        height: 40,
        borderColor: "#E9E9E9",
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        width: "100%",
        backgroundColor: "#B9B0D9",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: 18,
      }
    });
export default QuestAge;