import Model from './Model';
import Ingredient from "./Ingredient";
import Portion from "../Portion/Portion";
declare class PortionnedIngredient extends Model {
    ingredient: Ingredient;
    portion: Portion;
    constructor(ingredient: Ingredient, portion: Portion);
    scale(...args: Parameters<Portion['scale']>): PortionnedIngredient;
    optimize(...args: Parameters<Portion['optimize']>): PortionnedIngredient;
    convert(...args: Parameters<Portion['convert']>): PortionnedIngredient;
    toText(): string;
}
export default PortionnedIngredient;
