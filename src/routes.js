import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import RegisterOne from "./screen/RegisterOne";
import Login from "./screen/Login";
import Home from "./screen/Home";
import Registers from "./screen/Registers";
import GraficosRelatorios from "./screen/pages/GraficosRelatorios";
import PerfilConfig from "./screen/pages/PerfilConfig";
import SignUp from "./screen/SignUp";

import QuestAge from "./screen/quests/QuestAge";
import QuestName from "./screen/quests/QuestName";
import QuestTherapy from "./screen/quests/QuestTherapy";
import QuestTypeInsulin from "./screen/quests/QuestTypeInsulin";
import Quest5 from "./screen/quests/Quest5";
import QuestInsulinCorrection from "./screen/quests/QuestInsulinCorrection";
import QuestCarb from "./screen/quests/QuestCarb";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="App" component={TabNavigation} />
        <Stack.Screen name="RegisterOne" component={RegisterOne} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Quest5" component={Quest5} />
        <Stack.Screen name="QuestCarb" component={QuestCarb} />
        <Stack.Screen name="QuestInsulinCorrection" component={QuestInsulinCorrection} />
        <Stack.Screen name="QuestName" component={QuestName} />
        <Stack.Screen name="QuestAge" component={QuestAge} />
        <Stack.Screen name="QuestTherapy" component={QuestTherapy} />
        <Stack.Screen name="QuestTypeInsulin" component={QuestTypeInsulin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#ededed',
        tabBarActiveBackgroundColor: '#7B3D78',
        tabBarStyle: { backgroundColor: '#6E1A5F' },
      }}>
      <Tab.Screen name="Registers" component={Registers} options={{
        title: "Registros",
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="calendar-outline"
            size={26}
            color={focused ? "#FFF" : "#eee"} />)
      }} />
      <Tab.Screen name="Relatorios" component={GraficosRelatorios} options={{
        title: "Gráficos e Relatorios",
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="bar-chart-outline"
            size={26}
            color={focused ? "#FFF" : "#eee"} />)
      }}
      />
      <Tab.Screen name="Perfil" component={PerfilConfig} options={{
        title: "Perfil e terapia",
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="person-circle-outline"
            size={26}
            color={focused ? "#FFF" : "#eee"} />)
      }}
      />
    </Tab.Navigator>
  );
}

export default Routes;
