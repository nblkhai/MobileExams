import React from "react";
import { StyleSheet, View, Dimensions, TouchableOpacity } from "react-native";
import TextUI from "../../components/Text/TextUI";
import Tagline from "../../components/Text/Tagline";
import Colors from "../../constants/Colors";
import ImageScale from "react-native-scalable-image";
import { Icon } from "native-base";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  likeBtn: {
    fontSize: 22,
    color: "white",
  },
});

export default ({ navigation, data }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        width: width - 220,
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowRadius: 8,
        marginVertical: 10,
      }}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("HomePostDetail", { postDetailData: data })
        }
      >
        <ImageScale
          source={{
            uri: data.image,
          }}
          style={{
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
          }}
          width={width - 220}
        />
        <View style={{ paddingHorizontal: 13 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 11,
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 11,
                }}
              >
                <Icon
                  style={{ ...styles.likeBtn, color: "yellow" }}
                  type="Entypo"
                  name="star"
                />
                <Tagline style={{ color: Colors.backgroundColor }}>
                  {data.rating}
                </Tagline>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 11,
                }}
              >
                <TextUI
                  style={{
                    marginBottom: 4,
                    color: Colors.backgroundColor,
                    fontWeight: "bold",
                  }}
                  bold
                >
                  {data.restaurantName}
                </TextUI>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};