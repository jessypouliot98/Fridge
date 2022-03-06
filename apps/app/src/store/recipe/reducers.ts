import { createAction, createReducer } from '@reduxjs/toolkit';

import { RecipeAction, RecipeState } from './types';
import {Recipe, PortionnedIngredient, Unit, Portion, Ingredient} from "@fridge/fridge";

const foobarRecipe = new Recipe({
  name: 'Foobar',
  servings: 2,
  ingredients: [
    new PortionnedIngredient(
      new Ingredient({
        name: 'Potato',
        description: 'Potato',
      }),
      new Portion(2, Unit.unit),
    ),
  ],
});

const barbazRecipe = new Recipe({
  name: 'Barbaz',
  servings: 2,
  ingredients: [
    new PortionnedIngredient(
      new Ingredient({
        name: 'Linguini',
        description: 'Pasta',
      }),
      new Portion(500, Unit.g),
    ),
    new PortionnedIngredient(
      new Ingredient({
        name: 'Potato',
        description: 'Potato',
      }),
      new Portion(2, Unit.unit),
    ),
  ],
});

export const initialState: RecipeState = {
  isLoading: false,
  list: [
    foobarRecipe, barbazRecipe, foobarRecipe, barbazRecipe, foobarRecipe, barbazRecipe,
    foobarRecipe, barbazRecipe, foobarRecipe, barbazRecipe, foobarRecipe, barbazRecipe,
  ],
};

export const setRecipeLoading = createAction<RecipeState['isLoading']>(RecipeAction.SET_RECIPE_LOADING);
export const setRecipeList = createAction<RecipeState['list']>(RecipeAction.SET_RECIPE_LIST);

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setRecipeLoading, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setRecipeList, (state, action) => {
      state.list = action.payload;
    })
    .addDefaultCase(() => {});
});

export default reducer;
