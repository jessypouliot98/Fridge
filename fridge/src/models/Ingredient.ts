import Model from './Model';
import chalk from 'chalk';

type ingredientDetails = {
    name: string,
    description: string,
}

class Ingredient extends Model {

    public name: ingredientDetails['name'];
    public description: ingredientDetails['description'];

    constructor(details: ingredientDetails) {
        super();

        this.name = details.name;
        this.description = details.description;
    }

    public toText(): string {
        const text = this.name;

        return chalk.underline(text);
    }

}

export default Ingredient;
