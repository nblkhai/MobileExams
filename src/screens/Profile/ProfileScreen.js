import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import Colors from "../../constants/Colors";
import Button from "../../components/Button/Button";
import AsyncStorage from "@react-native-community/async-storage";
import {useDispatch } from "react-redux";


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: Colors.backgroundColor,
    paddingHorizontal: 30,
  },
});
export default ({ navigation }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
   
    AsyncStorage.removeItem("userData")
      .then((result) => {
        dispatch({
          type: "USER_LOGOUT",
        });
        console.log("LOGOUT!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={{ ...styles.container }}>
      <Button onPress={logoutHandler} type="secondary" size="md">
        LOGOUT
      </Button>
    </View>
  );
  }