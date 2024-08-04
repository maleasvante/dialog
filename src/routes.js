import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegisterOne from "./screen/RegisterOne";
import Login from "./screen/Login";
import Home from "./screen/Home";
import Registers from "./screen/Registers";
import SignUp from "./screen/SignUp";

import QuestAge from "./screen/quests/QuestAge";
import QuestName from "./screen/quests/QuestName";
import QuestTherapy from "./screen/quests/QuestTherapy";
import QuestTypeInsulin from "./screen/quests/QuestTypeInsulin";

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
        <Stack.Screen name="QuestName" component={QuestName} />
        <Stack.Screen name="RegisterOne" component={RegisterOne} />
        <Stack.Screen name="QuestAge" component={QuestAge} />
        <Stack.Screen name="QuestTherapy" component={QuestTherapy} />
        <Stack.Screen name="QuestTypeInsulin" component={QuestTypeInsulin} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="App" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Registers" component={Registers} />
    </Tab.Navigator>
  );
}

export default Routes;
