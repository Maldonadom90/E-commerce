import { Details, Home, Products } from "../screens";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
