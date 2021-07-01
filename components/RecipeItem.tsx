import React from "react";
import { Avatar, Card } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const RecipeItem = (props: any) => {
  const Color = props.favourited === true ? "red" : "gray";

  return (
    <TouchableOpacity style={styles.wrapper}>
      <Card onPress={props.onSelect}>
        <Card.Title
          title={props.title}
          left={(props: any) => (
            <Avatar.Icon
              style={styles.image}
              {...props}
              icon="heart"
              color={Color}
            />
          )}
        />
        <Card.Cover source={{ uri: props.imageUrl }} />
      </Card>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 4,
    backgroundColor: "white",

    margin: "auto",
  },
  image: {
    backgroundColor: "white",
  },
});

export default RecipeItem;
