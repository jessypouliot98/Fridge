import Model from './Model';
declare type ingredientDetails = {
    name: string;
    description: string;
};
declare class Ingredient extends Model {
    name: ingredientDetails['name'];
    description: ingredientDetails['description'];
    constructor(details: ingredientDetails);
    toText(): string;
}
export default Ingredient;
