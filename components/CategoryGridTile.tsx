import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
type Category = {};
const CategoryGridTile = (props) => {
  return (
    <TouchableOpacity>
      <View>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({});
export default CategoryGridTile;
