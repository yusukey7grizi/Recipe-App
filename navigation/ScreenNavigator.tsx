import React from "react";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavScreen from "../screens/FavScreen";
import HomeScreen from "../screens/HomeScreen";
import { Platform } from "react-native";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import CreateRecipesScreen from "../screens/CreateRecipesScreen";
import ItemDetails from "../screens/ItemDetails";
import EditScreen from "../screens/EditScreen";
import SearchScreen from "../screens/SearchScreen";

const HomeScreenNavigator = createStackNavigator({
  Home: HomeScreen,
  HomeItemDetails: ItemDetails,
  Edit: EditScreen,
});

const CreateScreenNavigator = createStackNavigator({
  Create: CreateRecipesScreen,
});
const SearchNavigator = createStackNavigator({
  Search: { screen: SearchScreen, navigationOptions: { headerShown: false } },
  SearchItemDetails: ItemDetails,
  Edit: EditScreen,
});

const FavScreenNavigator = createStackNavigator({
  Favourites: FavScreen,
  FavItemDetails: ItemDetails,
  Edit: EditScreen,
});

const TabScreenConfig = {
  Home: {
    screen: HomeScreenNavigator,
    navigationOptions: {
      tabBarIcon: (props: any) => {
        return <Entypo name="home" size={24} color={props.tintColor} />;
      },
    },
  },
  Create: {
    screen: CreateScreenNavigator,
    navigationOptions: {
      tabBarIcon: (props: any) => {
        return <FontAwesome name="plus" size={24} color={props.tintColor} />;
      },
    },
  },
  Search: {
    screen: SearchNavigator,
    navigationOptions: {
      tabBarIcon: (props: any) => {
        return <FontAwesome name="search" size={24} color={props.tintColor} />;
      },
    },
  },

  Favourites: {
    screen: FavScreenNavigator,
    navigationOptions: {
      tabBarIcon: (props: any) => {
        return <AntDesign name="heart" size={24} color={props.tintColor} />;
      },
    },
  },
};

const TabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(TabScreenConfig, {
        activeColor: "#00BFFF",
        inactiveColor: "#E0FFFF",
        barStyle: { backgroundColor: "white" },
      })
    : createBottomTabNavigator(TabScreenConfig, {
        tabBarOptions: {
          activeTintColor: "#00BFFF",
          inactiveTintColor: "#E0FFFF",
        },
      });
export default createAppContainer(TabNavigator);
