import Ingredient from "./Ingredient";
import Model from "./Model";
import PortionedIngredient from "./PortionedIngredient";

class RecipeStep extends Model {

	protected _text: string;
	protected _dependencies: PortionedIngredient[];

	public constructor(text: string, dependencies: PortionedIngredient[]) {
		super();

		this._text = text;
		this._dependencies = dependencies;
	}

	public toString = () => {
		const matches = this._text.match(/(\@[a-zA-Z0-9]{1,})/g);
		
		let text = this._text;

		matches?.forEach(match => {
			const uid = match.replace(/^@/, '');
			const ingredient = this._dependencies.find(ingredient => ingredient.uid === uid);
			
			if (!ingredient) {
				return;
			}

			text = text.replace(match, ingredient.toString());
		});

		return text;
	}

}

export default RecipeStep;