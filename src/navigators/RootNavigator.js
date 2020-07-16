import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthStack from "./AuthStack";
import { Provider, useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import TestScreen from "../screens/TestScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import PostDetailScreen from "../screens/PostDetail/PostDetailScreen";
import HomeStack from "./HomeStack";
import MainTab from "./MainTab";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Stack = createStackNavigator();

export default () => {
  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);

  // Pengganti compDidMount, compDidUpdate, compWillUnmount
  useEffect(() => {
    
    AsyncStorage.getItem("userData")
      .then((storageItem) => {
        if (!storageItem) throw "Item is empty";
        dispatch({
          type: "USER_LOGIN",
          // payload: JSON.parse(storageItem),
          payload:{username: storageItem}
        });
      })
      .catch((err) => {
        console.log(err);
      });
    // AsyncStorage.removeItem("userData");
  }, []);

  return (
    <NavigationContainer>
    
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userSelector.username ? (
          <Stack.Screen
            options={{ animationEnabled: false }}
            name="MainTab"
            component={MainTab}
          />
        ) : (
           <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

