import {useEffect} from "react";
import {getRecipes} from "../api/recipe/recipe";
import {useRootDispatch, useRootSelector} from "./redux";
import {selectRecipeList, selectRecipeLoading} from "../store/recipe/selectors";
import {setRecipeList, setRecipeLoading} from "../store/recipe/actions";

export const useRecipes = () => {
  const dispatch = useRootDispatch();
  const isLoading = useRootSelector(selectRecipeLoading());
  const recipes = useRootSelector(selectRecipeList());

  const query = () => {
    dispatch(setRecipeLoading(true));
    getRecipes().then((newRecipes) => {
      dispatch(setRecipeList(newRecipes));
      dispatch(setRecipeLoading(false));
    });
  }

  useEffect(() => {
    if (!isLoading && recipes.length === 0) {
      query();
    }
  }, [isLoading, recipes]);

  return {
    refresh: query,
    isLoading,
    recipes,
  }
}
