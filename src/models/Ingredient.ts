import Model from "./Model";

export type ingredientDetails = {
	image?: string,
	description?: string,
	origin?: string,
}

class Ingredient extends Model {

	protected _name: string;
	protected _details: ingredientDetails;

	public constructor(name: string, details: ingredientDetails = {}) {
		super();

		this._name = name;
		this._details = details;
	}

	public get name() {
		return this._name;
	}

}

export default Ingredient;