import Model from './Model';
import chalk from 'chalk';
import Ingredient from "./Ingredient";
import Portion from "../valueObjects/Portion";

class PortionnedIngredient extends Model {

    public ingredient: Ingredient;
    public portion: Portion;

    constructor(ingredient: Ingredient, portion: Portion) {
        super();

        this.ingredient = ingredient;
        this.portion = portion;
    }

    public scale(...args: Parameters<Portion['scale']>) {
        return new PortionnedIngredient(this.ingredient, this.portion.scale(...args));
    }

    public optimize(...args: Parameters<Portion['optimize']>) {
        return new PortionnedIngredient(this.ingredient, this.portion.optimize(...args));
    }

    public convert(...args: Parameters<Portion['convert']>) {
        return new PortionnedIngredient(this.ingredient, this.portion.convert(...args));
    }

    public toText(): string {
        return chalk.green(`${this.portion.toText()} ${'of'} ${this.ingredient.toText()}`);
    }

}

export default PortionnedIngredient;
