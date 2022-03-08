import express from 'express';
import * as recipeController from "../../../controllers/recipe/recipe";

const router = express.Router();

router.get('/', recipeController.getRecipeList);
router.get('/:uuid', recipeController.getRecipe);

export default router;
