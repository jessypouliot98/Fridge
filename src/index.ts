import Ingredient from "./models/Ingredient";
import PortionedIngredient from "./models/PortionedIngredient";
import Quantity, { Unit } from "./models/Quantity";
import Recipe from "./models/Recipe";
import RecipeStep from "./models/RecipeStep";

const ingredients = {
	salt: new Ingredient('Salt'),
	sugar: new Ingredient('Sugar'),
	oregano: new Ingredient('Oregano'),
	basil: new Ingredient('Basil'),
	oliveOil: new Ingredient('Olive oil'),
	crushedTomatoes: new Ingredient('Crushed tomatoes'),
}

const tomato = new PortionedIngredient(ingredients.crushedTomatoes, new Quantity(500, Unit.g));

const recipe = new Recipe(
	'Pizza sauce',
	2,
	[
		new PortionedIngredient(ingredients.sugar, new Quantity(1, Unit.pinch)),
		new PortionedIngredient(ingredients.salt, new Quantity(1, Unit.tbsp)),
		new PortionedIngredient(ingredients.basil, new Quantity(1, Unit.tbsp)),
		new PortionedIngredient(ingredients.oregano, new Quantity(2, Unit.tbsp)),
		new PortionedIngredient(ingredients.oliveOil, new Quantity(25, Unit.ml)),
		tomato,
	],
	[
		new RecipeStep(`Empty @${tomato.uid} in a small bowl`, [
			tomato,
		]),
	],
	{
		rating: 85,
		description: "To make this homemade pizza sauce from scratch you crack open two cans, add some seasonings, stir and you're set to go. You can easily make it ahead of time and store in the refrigerator until you're ready to make your pizza!",
	},
);

console.log(recipe.toString());
console.log(recipe.serveFor(100).toString());
