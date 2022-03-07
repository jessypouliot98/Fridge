import {createAction} from "@reduxjs/toolkit";
import {RecipeAction, RecipeState} from "./types";

export const setRecipeLoading = createAction<RecipeState['isLoading']>(RecipeAction.SET_RECIPE_LOADING);
export const setRecipeList = createAction<RecipeState['list']>(RecipeAction.SET_RECIPE_LIST);
