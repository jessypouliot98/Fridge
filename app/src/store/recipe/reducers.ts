import { createAction, createReducer } from '@reduxjs/toolkit';

import { RecipeAction, RecipeState } from './types';

export const initialState: RecipeState = {
  isLoading: false,
  list: [],
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
