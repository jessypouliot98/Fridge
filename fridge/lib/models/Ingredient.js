import Model from './Model';
import chalk from 'chalk';
class Ingredient extends Model {
    constructor(details) {
        super();
        this.name = details.name;
        this.description = details.description;
    }
    toText() {
        const text = this.name;
        return chalk.underline(text);
    }
}
export default Ingredient;
