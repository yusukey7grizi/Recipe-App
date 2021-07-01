import React from "react";
import { useSelector } from "react-redux";
import { RecipeType } from "../type/type";
import RecipeItem from "../components/RecipeItem";
import { FlatList, StyleSheet } from "react-native";
import { SelectRecipes } from "../redux/RecipeSlice";

const HomeScreen: React.FC<RecipeType> = (props) => {
  const Recipes = useSelector(SelectRecipes);

  const RenderItem = (itemData: any) => {
    return (
      <RecipeItem
        favourited={itemData.item.favourited}
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        onSelect={() =>
          props.navigation.navigate({
            params: {
              id: itemData.item.id,
              title: itemData.item.title,
            },
            routeName: "HomeItemDetails",
          })
        }
      />
    );
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => `${item.id}`}
      renderItem={RenderItem}
      data={Recipes}
      numColumns={1}
    />
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
