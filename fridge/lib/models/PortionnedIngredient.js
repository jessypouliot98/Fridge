import i18next from '../utils/i18n';
import Model from './Model';
import chalk from 'chalk';
import { Unit } from '../enums/Unit';
class PortionnedIngredient extends Model {
    constructor(ingredient, portion) {
        super();
        this.ingredient = ingredient;
        this.portion = portion;
    }
    scale(...args) {
        return new PortionnedIngredient(this.ingredient, this.portion.scale(...args));
    }
    optimize(...args) {
        return new PortionnedIngredient(this.ingredient, this.portion.optimize(...args));
    }
    convert(...args) {
        return new PortionnedIngredient(this.ingredient, this.portion.convert(...args));
    }
    toText() {
        const i18nPayload = {
            qty: this.portion.toText(),
            ingredient: this.ingredient.toText(),
            count: this.portion.value > 1 ? 2 : 1,
        };
        const text = this.portion.unit === Unit.unit
            ? i18next.t('portionedIngredient.unit', i18nPayload)
            : i18next.t('portionedIngredient.default', i18nPayload);
        return chalk.green(text);
    }
}
export default PortionnedIngredient;
