import { createReducer } from '@reduxjs/toolkit';

import { RecipeState } from './types';
import {setRecipeList, setRecipeLoading} from "./actions";

export const initialState: RecipeState = {
  isLoading: false,
  list: [],
};

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
