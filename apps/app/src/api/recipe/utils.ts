import {PortionnedIngredient, Ingredient, Recipe, Unit, Portion} from "@fridge/fridge";

export const mapApiRecipesToRecipeModel = (recipes: any[]) => {
  return recipes.map((recipe) => new Recipe({
    name: recipe.name,
    description: recipe.description,
    servings: recipe.servings,
    ingredients: (recipe.portionnedIngredients || []).map((portionedIngredient: any) => {
      const { ingredient, portion } = portionedIngredient || {};
      return new PortionnedIngredient(
        new Ingredient({
          name: ingredient.name,
          description: ingredient.description,
        }),
        new Portion(portion.value, Unit.unit),
      );
    })
  }));
}
