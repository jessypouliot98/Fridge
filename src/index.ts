import Ingredient from "./models/Ingredient";
import { Unit } from "./enums/Unit";
import PortionnedIngredient from "./models/PortionnedIngredient";
import Portion from "./valueObjects/Portion";
import Recipe from "./models/Recipe";

const ingredients = {
	salt: new Ingredient({ name: 'Salt', description: '' }),
	pepper: new Ingredient({ name: 'Pepper', description: '' }),
	potato: new Ingredient({ name: 'Potato', description: '' }),
	redWine: new Ingredient({ name: 'Red wine', description: '' }),
};

const aCupOfSalt = new PortionnedIngredient(ingredients.salt, new Portion(1, Unit.cup))
const twoPinchesOfPepper = new PortionnedIngredient(ingredients.pepper, new Portion(2, Unit.pinch))
const aPoundOfPotato = new PortionnedIngredient(ingredients.potato, new Portion(1, Unit.lb));
const halfALitreOfRedWine = new PortionnedIngredient(ingredients.redWine, new Portion(500, Unit.ml));

const boringRecipe = new Recipe({
	name: 'The boring recipe',
	ingredients: [
		aCupOfSalt,
		twoPinchesOfPepper,
		aPoundOfPotato,
		halfALitreOfRedWine,
	],
	servings: 5,
});

console.log(boringRecipe.toText());
console.log(boringRecipe.scale(0.5).convert().toText());
console.log(boringRecipe.scale(0.33).convert().toText());
