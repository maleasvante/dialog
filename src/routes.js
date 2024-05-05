import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register_one from "./screen/register_one";
import Login from "./screen/login";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Register_one" component={Register_one} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
