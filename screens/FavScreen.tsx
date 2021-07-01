import React from "react";
import { useSelector } from "react-redux";
import { FlatList } from "react-native";
import RecipeItem from "../components/RecipeItem";
import { RecipeType } from "../type/type";

import { SelectRecipes } from "../redux/RecipeSlice";
const FavItems: React.FC<RecipeType> = (props) => {
  const Recipes = useSelector(SelectRecipes);
  const FavItems = Recipes.filter((eachData) => eachData.favourited === true);
  const RenderItem = (itemData: any) => {
    return (
      <RecipeItem
        title={itemData.item.title}
        favourited={itemData.item.favourited}
        imageUrl={itemData.item.imageUrl}
        onSelect={() =>
          props.navigation.navigate({
            params: {
              id: itemData.item.id,
              title: itemData.item.title,
              favourited: itemData.item.favourited,
            },
            routeName: "FavItemDetails",
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
      data={FavItems}
      numColumns={1}
    />
  );
};

export default FavItems;
