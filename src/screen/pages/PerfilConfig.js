import { View, Text, Button } from "react-native";

export default function PerfilConfig({ navigation }) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Perfil e configurações</Text>
      <Button title="Dados do usuário" onPress={() => navigation.navigate("QuestName")}/>
    </View>
  )
}