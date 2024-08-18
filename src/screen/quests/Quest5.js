import React, { useState } from 'react';
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage'; // controller-play
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { updateUser } from '../../services/db';

const Quest5 = ({ navigation }) => {
	const [faixaAlvo, setFaixaAlvo] = useState('');

	const handleSelectFaixaAlvo = (faixa) => {
		setFaixaAlvo(faixa);
	};


	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				Quais são suas faixas-alvo?
			</Text>
			<View style={styles.form}>
				<TouchableOpacity style={styles.button} onPress={() => setFaixaAlvo('180')}>
					<View style={{ alignItems: 'center', justifyContent: 'center', gap: 4, width: '100%' }}>
						<View style={styles.row}>
							<Entypo name='triangle-up' size={32} color="#B9B0D9" />
							<Text style={styles.buttonText}>Hyper</Text>
						</View>
						<View style={styles.contentValue}>
							<Text>180 mg/dL</Text>
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => setFaixaAlvo('90-160')}>
					<View style={{ alignItems: 'center', justifyContent: 'center', gap: 4, width: '100%' }}>
						<View style={styles.row}>
							<Entypo name='controller-record' size={26} color="#B9B0D9" />
							<Text style={styles.buttonText}>Faixa-alvo</Text>
						</View>
						<View style={styles.contentValue}>
							<Text>90 - 160 mg/dL</Text>
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button} onPress={() => setFaixaAlvo('90-160')}>
					<View style={{ alignItems: 'center', justifyContent: 'center', gap: 4, width: '100%' }}>
						<View style={styles.row}>
							<Entypo name='triangle-down' size={32} color="#B9B0D9" />
							<Text style={styles.buttonText}>Hyper</Text>
						</View>
						<View style={styles.contentValue}>
							<Text>70 mg/dL</Text>
						</View>
					</View>
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
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	contentValue: {
		width: '100%',
		backgroundColor: '#B9B0D9',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
		borderRadius: 4,

	}
});

export default Quest5;