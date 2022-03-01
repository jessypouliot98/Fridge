import { RootState } from './..';

export const selectRecipeList = () => (state: RootState) => {
  return state.recipeState.list;
};
