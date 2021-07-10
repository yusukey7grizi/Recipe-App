import React from "react";
import { Avatar, Card } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { ItemProp } from "../type/type";
const RecipeItem: React.FC<ItemProp> = (props) => {
  const Color = props.favourited === true ? "red" : "gray";

  return (
    <Card style={styles.wrapper} onPress={props.onSelect}>
      <Card.Title
        title={props.title}
        left={(props: any) => (
          <Avatar.Icon
            style={styles.icon}
            {...props}
            icon="heart"
            color={Color}
          />
        )}
      />
      <Card.Cover style={styles.image} source={{ uri: props.imageUrl }} />
    </Card>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 4,
    backgroundColor: "white",
    margin: "auto",
  },
  icon: {
    backgroundColor: "white",
  },
  image: {
    height: 350,
  },
});

export default RecipeItem;
