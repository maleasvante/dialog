import { View, Text } from "react-native";
import Button from "../../components/Button";

export default function PerfilConfig({ navigation }) {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Perfil e configurações</Text>
      <Button title="Dados do usuário" onPress={() => navigation.navigate("QuestName")}/>
    </View>
  )
}