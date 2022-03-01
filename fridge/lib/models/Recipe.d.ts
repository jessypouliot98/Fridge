import Model from "./Model";
import PortionnedIngredient from "./PortionnedIngredient";
import Portion from "../Portion/Portion";
declare type recipeDetails = {
    name: string;
    ingredients: PortionnedIngredient[];
    servings: number;
};
declare class Recipe extends Model {
    name: recipeDetails['name'];
    ingredients: recipeDetails['ingredients'];
    servings: recipeDetails['servings'];
    constructor(details: recipeDetails);
    scale(...args: Parameters<Portion['scale']>): Recipe;
    optimize(...args: Parameters<Portion['optimize']>): Recipe;
    convert(...args: Parameters<Portion['convert']>): Recipe;
    toText(): string;
}
export default Recipe;
