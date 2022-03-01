import Model from "./Model";
import chalk from "chalk";
class Recipe extends Model {
    constructor(details) {
        super();
        this.name = details.name;
        this.ingredients = details.ingredients;
        this.servings = details.servings;
    }
    scale(...args) {
        const [multiplier] = args;
        return new Recipe({
            name: this.name,
            ingredients: this.ingredients.map(ingredient => ingredient.scale(...args)),
            servings: this.servings * multiplier,
        });
    }
    optimize(...args) {
        return new Recipe({
            name: this.name,
            ingredients: this.ingredients.map(ingredient => ingredient.optimize(...args)),
            servings: this.servings,
        });
    }
    convert(...args) {
        return new Recipe({
            name: this.name,
            ingredients: this.ingredients.map(ingredient => ingredient.convert(...args)),
            servings: this.servings,
        });
    }
    toText() {
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
