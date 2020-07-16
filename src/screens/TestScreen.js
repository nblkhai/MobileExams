import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import H1 from "../components/Text/H1";
const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: height * (314 / 812),
  },
  bgImage: {
    flex: 1,
  },
});

export default ({ navigation }) => {
  return (
    <View>
      <H1>TEST SCREEN</H1>
    </View>
  );
};
