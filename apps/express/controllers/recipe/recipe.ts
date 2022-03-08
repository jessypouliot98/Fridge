import type { Controller } from "../types";
import { respondWithJSON } from "../../utils/response";
import { getFakeRecipe } from "../../routes/api/recipe/utils";

export const getRecipe: Controller = (req, res) => {
  const recipe = getFakeRecipe({ uuid: req.params.uuid });

  return respondWithJSON(
    res,
    { recipe },
  );
}

export const getRecipeList: Controller = (req, res) => {
  const recipes = [1, 2, 3].map(() => getFakeRecipe());

  return respondWithJSON(
    res,
    { recipes },
  );
}
