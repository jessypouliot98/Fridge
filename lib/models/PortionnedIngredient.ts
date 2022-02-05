import i18next from '../utils/i18n';
import Model from './Model';
import chalk from 'chalk';
import Ingredient from "./Ingredient";
import Portion from "../valueObjects/Portion/Portion";
import { Unit } from '../enums/Unit';

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
