import React from "react";
import { Card, Paragraph, IconButton, Title } from "react-native-paper";
import { StyleSheet, ScrollView } from "react-native";
import { RecipeType } from "../type/type";
import { useDispatch, useSelector } from "react-redux";

import { RemoveRecipe, SelectRecipes } from "../redux/RecipeSlice";
import { SwitchFavStatus } from "../redux/RecipeSlice";
const ItemDetails = (props: RecipeType) => {
  const id = props.navigation.getParam("id");
  const Recipes = useSelector(SelectRecipes);
  const Recipe = Recipes.find((recipe) => recipe.id === id);
  const Color = Recipe?.favourited === true ? "red" : "gray";
  const dispatch = useDispatch();
  const DeleteHandler = () => {
    dispatch(RemoveRecipe({ id: Recipe?.id }));
    props.navigation.goBack();
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
      <Card>
        <Card.Cover style={styles.image} source={{ uri: Recipe?.imageUrl }} />
        <Card.Title
          titleStyle={styles.title}
          title={Recipe?.title}
          right={() => (
            <Card.Actions>
              <IconButton
                icon="heart"
                size={25}
                color={Color}
                onPress={() => {
                  dispatch(SwitchFavStatus(Recipe));
                }}
              />
              <IconButton
                icon="delete"
                color="gray"
                size={25}
                onPress={DeleteHandler}
              />
              <IconButton
                color="gray"
                icon="pencil"
                size={25}
                onPress={() => {
                  props.navigation.navigate({
                    params: { Recipe: Recipe },
                    routeName: "Edit",
                  });
                }}
              />
            </Card.Actions>
          )}
        />
        <Card.Content>
          <Title>Ingredients:</Title>
          <Paragraph style={styles.content}>{Recipe?.ingredients}</Paragraph>
        </Card.Content>
        <Card.Content>
          <Title>Recipe:</Title>
          <Paragraph style={styles.content}>{Recipe?.recipe}</Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};
ItemDetails.navigationOptions = (props: RecipeType) => {
  const id = props.navigation.getParam("id");
  const title = props.navigation.getParam("title");
  return {
    headerTitle: title,
  };
};

const styles = StyleSheet.create({
  wrapper: {
    height: "200%",
  },
  icon: {
    backgroundColor: "white",
    height: 20,
  },
  text: {
    fontSize: 20,
  },
  image: {
    height: 450,
  },
  title: {
    fontSize: 20,
  },
  content: {
    width: "80%",
    margin: "auto",
  },
});
export default ItemDetails;
