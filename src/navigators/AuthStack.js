import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Auth/LoginScreen";


const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} ini>
      {/* <Stack.Screen component={WelcomeScreen} name="Welcome" /> */}
      <Stack.Screen component={LoginScreen} name="Login" />
  
    </Stack.Navigator>
  );
};
