import axios from "../../utils/axios";
import { JSONResponse } from "../types";
import { getHeadersWithAuthorization } from "../../utils/api";
import {mapApiRecipesToRecipeModel} from "./utils";

const routes = {
  get: {
    recipes: () => '/recipe',
  }
}

type getRecipesParams = {};
export const getRecipes = async (params?: getRecipesParams) => {
  const response = await axios.get<JSONResponse<{ recipes: any }>>(routes.get.recipes(), {
    headers: getHeadersWithAuthorization(),
  });

  return mapApiRecipesToRecipeModel(response.data.data.recipes);
}
