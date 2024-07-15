import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register_one from "./screen/register_one";
import Login from "./screen/login";
import Home from "./screen/home";
import Registers from "./screen/registers";
import Sign_up from "./screen/sign_up";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import quest_one from "./screen/quest_one";
import quest_two from "./screen/quest_two";
import quest_three from "./screen/quest_three";

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
        <Stack.Screen name="Register_one" component={Register_one} />
         <Stack.Screen name="Quest_2" component={quest_two} />
        <Stack.Screen name="Quest_3" component={quest_three} />
        <Stack.Screen name="Quest_1" component={quest_one} />
        <Stack.Screen name="sign_up" component={Sign_up} />
        <Stack.Screen name="login" component={Login} />
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
