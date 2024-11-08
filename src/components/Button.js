import { Pressable, StyleSheet, Text } from "react-native";

export default function Button({ onPress, title }) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#7D0062",
        padding: 10,
        width: "100%",
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7D0062',
    },
    text: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    }
});