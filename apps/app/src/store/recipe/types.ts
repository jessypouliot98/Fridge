import {Recipe} from "@fridge/fridge";

// TODO make this import not fail
console.log('If recipe is logged, we successfully imported a monorepo dependency !')
console.log({Recipe})

export type RecipeState = {
  list: Recipe[],
  isLoading: boolean,
}

export enum RecipeAction {
  SET_RECIPE_LOADING = 'SET_RECIPE_LOADING',
  SET_RECIPE_LIST = 'SET_RECIPE_LIST',
}
