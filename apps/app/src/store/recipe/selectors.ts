import { RootSelector } from "../../utils/redux";
import { Recipe } from "@fridge/fridge";

export const selectRecipeLoading: RootSelector = () => (state) => {
  return state.recipeState.isLoading;
}

export const selectRecipeList: RootSelector<Recipe[]> = () => (state) => {
  return state.recipeState.list;
};
