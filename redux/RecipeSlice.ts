import { createSlice } from "@reduxjs/toolkit";

import { AppThunk, RootState } from "./store";
interface ReduxType {
  idCounter: number;
  Recipe: {
    id: number;
    imageUrl: string;
    title: string;
    ingredients: string;
    recipe: string;
    favourited: boolean;
  }[];
}
const initialState: ReduxType = {
  idCounter: 0,
  Recipe: [],
};

const RecipeSlice = createSlice({
  name: "Recipe",
  initialState,
  reducers: {
    AddRecipe: (state, action) => {
      state.idCounter++;
      state.Recipe.push({
        id: state.idCounter,
        title: action.payload.title,
        recipe: action.payload.recipe,
        ingredients: action.payload.ingredients,
        imageUrl: action.payload.imageUrl,
        favourited: false,
      });
    },
    RemoveRecipe: (state, action) => {
      state.Recipe = state.Recipe.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    },
    SwitchFavStatus: (state, action) => {
      const SelectedRecipe = state.Recipe.find(
        (recipe) => recipe.id === action.payload.id
      );
      if (SelectedRecipe) {
        SelectedRecipe.favourited = !SelectedRecipe.favourited;
      }
    },
    EditRecipe: (state, action) => {
      const SelectedRecipe = state.Recipe.find(
        (recipe) => recipe.id === action.payload.id
      );
      if (SelectedRecipe) {
        SelectedRecipe.imageUrl = action.payload.imageUrl;
        SelectedRecipe.title = action.payload.title;
        SelectedRecipe.recipe = action.payload.recipe;
        SelectedRecipe.ingredients = action.payload.ingredients;
      }
    },
  },
});
// useSelector
export const SelectRecipes = (State: RootState) => State.Recipes.Recipe;
// dispatch
export const { AddRecipe, RemoveRecipe, SwitchFavStatus, EditRecipe } =
  RecipeSlice.actions;
// reducer
export default RecipeSlice.reducer;
