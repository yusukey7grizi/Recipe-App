import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { useSelector } from "react-redux";
import { SelectRecipes } from "../redux/RecipeSlice";
import { RecipeType } from "../type/type";
import SearchResultItem from "../components/SearchResultItem";

const SearchScreen: React.FC<RecipeType> = (props) => {
  const Recipes = useSelector(SelectRecipes);
  const [Input, setInput] = useState("");
  const FilteredRecipes = Recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(Input.toLowerCase())
  );

  const RenderItem = (itemData: any) => {
    return (
      <SearchResultItem
        favourited={itemData.item.favourited}
        title={itemData.item.title}
        imageUrl={itemData.item.imageUrl}
        onSelect={() =>
          props.navigation.navigate({
            params: {
              id: itemData.item.id,
              title: itemData.item.title,
            },
            routeName: "SearchItemDetails",
          })
        }
      />
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.root}>
        <Searchbar
          placeholder="Search"
          value={Input}
          onChangeText={(text) => {
            setInput(text);
          }}
        />
      </View>
      {Input ? (
        <FlatList
          style={styles.flatlist}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={RenderItem}
          data={FilteredRecipes}
          numColumns={1}
          contentContainerStyle={{
            flexGrow: 1,
          }}
        />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
  },
  root: {
    padding: 20,
  },
  flatlist: {
    height: "88%",
  },
});

export default SearchScreen;
