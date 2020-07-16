
import React, { useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput
} from "react-native";
import WelcomeBG from "../../../assets/images/welcome_bg.png";
import H1 from "../../components/Text/H1";
import TextUI from "../../components/Text/TextUI";
import Button from "../../components/Button/Button";
import DarkOverlay from "../../components/General/DarkOverlay";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import { Icon } from "native-base";

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: height * (200 / 812),
  },
  bgImage: {
    flex: 1,
  },
});

export default (props) => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const userSelector = useSelector((state) => state.user);
  const loginBtnHandler = () => {
  console.log("masuk",username)
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({
     
      username,
    
    })
  )
    .then(() => {
      dispatch({
        type: "USER_LOGIN",
        payload: {username },
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }
  return (
  
      <View style={styles.container}>
        <H1 style={{ fontSize: 44, lineHeight: 60, color:"red", alignItems:"center"}} bold>
         TOMATO APP
        </H1>
        <Icon type="MaterialCommunityIcons" name="food" style={{color:"red",alignItems:"center", fontSize:100}}  />

        <View
                style={{
                  backgroundColor: "white",
                  opacity: 0.2,
                  borderRadius: 22,
                  ...StyleSheet.absoluteFillObject,
                }}
              />
               {/* <Icon type="MaterialIcons" name="person" style={{color:"red"}}  /> */}
              <TextInput
                autoCapitalize="none"
                placeholderTextColor="lightgrey"
                style={{
                 
                  fontSize: 17,
                  color: "red",
                  lineHeight: 19,
                }}
                placeholder="Username"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            
        <Button
          // onPress={() => navigation.navigate("Login")}
          onPress={loginBtnHandler}
          size="lg"
          type="secondary"
          containerStyle={{ marginTop: 44, marginBottom: 10 }}
        >
          Log In
        </Button>
      </View>

  );
};


