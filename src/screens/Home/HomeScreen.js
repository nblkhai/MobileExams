// import React, { useEffect, useState } from "react";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Dimensions,
//   FlatList,
//   SafeAreaView,
//   TextInput,
//   TouchableOpacity,
// } from "react-native";
// import H1 from "../../components/Text/H1";
// import TextUI from "../../components/Text/TextUI";
// import Tagline from "../../components/Text/Tagline";
// import Colors from "../../constants/Colors";
// import PostCard from "./PostCard";
// import Axios from "axios";
// import { API_URL } from "../../constants/API";
// import { Icon, Header } from "native-base";

// const { width } = Dimensions.get("screen");

// const styles = StyleSheet.create({
//   header:{
//     height:40,
//     paddingHorizontal:18,
//     // allignItems:"flex-end",
//     flexDirection:"row"
//   },
//   comment:{
//     marginTop:10,
//     paddingHorizontal:30
//   }
// });

// export default ({ navigation }) => {
//   const [postList, setPostList] = useState([]);
//   const userSelector = useSelector((state) => state.user);

//   useEffect(() => {
//     Axios.get(`${API_URL}/restaurants`, {
//       // params: {
//       //   include: "User",
//       // },
//     })
//       .then((res) => {
//         console.log(res.data);
//         setPostList(res.data.result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const renderPosts = ({ item }) => {
//     return <PostCard navigation={navigation} data={item}  />;
//   };

//   return (
//     <View
//       style={{
//         flex: 1,
//       }}
//     >
//       <SafeAreaView />
//   <Header title={`Hai,` + userSelector.username}
//   style={{...styles.header}}>

//   </Header>
//       <FlatList
//         ListHeaderComponent={() => {
//           return <H1 bold>Restaurants</H1>;
//         }}
//         ListHeaderComponentStyle={{ marginHorizontal: 15 }}
//         contentContainerStyle={{ marginTop: 46 }}
//         data={postList}
//         renderItem={renderPosts}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };
import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  FlatList,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Auth/LoginScreen";
import Axios from "axios";
import { API_URL } from "../../constants/API";
import PostCard from "../Home/PostCard";

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginTop: 25,
    alignItems: "flex-end",
  },
});

export default ({ navigation }) => {
  const userSelector = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [restaurantsList, setRestaurantsList] = useState([]);

  useEffect(() => {
    getUsername();
    getRestaurant();
  }, []);

  const getUsername = () => {
    AsyncStorage.getItem("userData")
      .then((username) => {
        dispatch({
          type: "USER_LOGIN",
          payload: JSON.parse(username),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getRestaurant = () => {
    Axios.get(`${API_URL}/restaurants`)
      .then((res) => {
        setRestaurantsList(res.data.result);
        console.log(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderRestaurants = ({ item }) => {
    return <PostCard navigation={navigation} data={item} />;
  };

  return (
    <View>
      <View style={styles.container}>
        <Text>{userSelector.username}</Text>

        <FlatList
          contentContainerStyle={{ marginTop: 46 }}
          data={restaurantsList}
          renderItem={renderRestaurants}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
};
