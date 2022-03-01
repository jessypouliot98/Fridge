import Ingredient from "./src/models/Ingredient";
import { Unit } from "./src/enums/Unit";
import PortionnedIngredient from "./src/models/PortionnedIngredient";
import Recipe from "./src/models/Recipe";
import './src/utils/i18n';
import Portion from "./src/Portion/Portion";


const ingredients = {
	salt: new Ingredient({ name: 'Salt', description: '' }),
	pepper: new Ingredient({ name: 'Pepper', description: '' }),
	potato: new Ingredient({ name: 'Potato', description: '' }),
	redWine: new Ingredient({ name: 'Red wine', description: '' }),
	egg: new Ingredient({ name: 'Egg', description: '' }),
};

const aCupOfSalt = new PortionnedIngredient(ingredients.salt, new Portion(1, Unit.cup))
const twoPinchesOfPepper = new PortionnedIngredient(ingredients.pepper, new Portion(2, Unit.pinch))
const aPoundOfPotato = new PortionnedIngredient(ingredients.potato, new Portion(1, Unit.lb));
const aKiloOfPotato = new PortionnedIngredient(ingredients.potato, new Portion(1, Unit.kg));
const halfALitreOfRedWine = new PortionnedIngredient(ingredients.redWine, new Portion(500, Unit.ml));
const twoEggs = new PortionnedIngredient(ingredients.egg, new Portion(2, Unit.unit));

const boringRecipe = new Recipe({
	name: 'The boring recipe',
	ingredients: [
		aCupOfSalt,
		twoPinchesOfPepper,
		aPoundOfPotato,
		aKiloOfPotato,
		halfALitreOfRedWine,
		twoEggs,
	],
	servings: 5,
});

[1, 1/2*3, 1/3, 2, 16/9].forEach(scale => {
	console.log({ scale });
	console.log(boringRecipe.scale(scale).optimize().toText());
});
