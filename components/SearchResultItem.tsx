import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Card } from "react-native-paper";
import { ItemProp } from "../type/type";
const SearchResultItem: React.FC<ItemProp> = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelect}>
      <Card.Title
        title={props.title}
        left={() => (
          <Card.Cover style={styles.image} source={{ uri: props.imageUrl }} />
        )}
        right={() =>
          props.favourited ? <Text style={styles.text}>Favourited</Text> : null
        }
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
    fontSize: 4,
  },
  text: {
    marginRight: 10,
  },
});
export default SearchResultItem;
