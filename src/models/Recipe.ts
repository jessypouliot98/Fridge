import Model from "./Model";
import PortionnedIngredient from "./PortionnedIngredient";
import chalk from "chalk";
import Portion from "../valueObjects/Portion/Portion";

type recipeDetails = {
    name: string;
    ingredients: PortionnedIngredient[],
    servings: number;
}

class Recipe extends Model {

    public name: recipeDetails['name'];
    public ingredients: recipeDetails['ingredients'];
    public servings: recipeDetails['servings'];

    constructor(details: recipeDetails) {
        super();

        this.name = details.name;
        this.ingredients = details.ingredients;
        this.servings = details.servings;
    }

    public scale(...args: Parameters<Portion['scale']>) {
        const [multiplier] = args;

        return new Recipe({
            name: this.name,
            ingredients: this.ingredients.map(ingredient => ingredient.scale(...args)),
            servings: this.servings * multiplier,
        });
    }

    public optimize(...args: Parameters<Portion['optimize']>) {
        return new Recipe({
            name: this.name,
            ingredients: this.ingredients.map(ingredient => ingredient.optimize(...args)),
            servings: this.servings,
        });
    }

    public convert(...args: Parameters<Portion['convert']>) {
        return new Recipe({
            name: this.name,
            ingredients: this.ingredients.map(ingredient => ingredient.convert(...args)),
            servings: this.servings,
        });
    }

    public toText() {
        return [
            chalk.bold.blue(this.name),
            ...this.ingredients.map(ingredient => {
               return `- ${ingredient.toText()}`;
            }),
            '',
        ].join('\n');
    }

}

export default Recipe;
