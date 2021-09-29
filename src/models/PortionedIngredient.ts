import Ingredient, { ingredientDetails } from "./Ingredient";
import Model from "./Model";
import Quantity from './Quantity';

class PortionedIngredient extends Model {
	protected _ingredient: Ingredient;
	protected _qty: Quantity;

	public constructor(ingredient: Ingredient, qty: Quantity) {
		super();

		this._ingredient = ingredient;
		this._qty = qty;
	}

	public get name() {
		return this._ingredient.name;
	}

	public get quantity() {
		return this._qty;
	}
	
	public scale = (ratio: number) => {
		return new PortionedIngredient(this._ingredient, this._qty.scale(ratio).optimize());
	}

	public toString = () => {
		return `${this.quantity.toString()} ${this.name.toLowerCase()}`;
	}
}

export default PortionedIngredient;