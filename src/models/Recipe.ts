import { complex } from 'mathjs';
import PortionedIngredient from "./PortionedIngredient";
import Model from "./Model";
import RecipeStep from './RecipeStep';

export type recipeDetails = {
	rating?: number,
	description?: string,
}

class Recipe extends Model {

	protected _name: string;
	protected _ingredients: PortionedIngredient[];
	protected _steps: RecipeStep[];
	protected _servings: number;
	protected _details: recipeDetails;

	public constructor(
		name: string,
		servings: number,
		ingredients: PortionedIngredient[],
		steps: RecipeStep[],
		details: recipeDetails = {},
	) {
		super();

		this._name = name;
		this._servings = servings;
		this._ingredients = ingredients;
		this._steps = steps;
		this._details = details;
	}

	public get description(): string {
		return this._details?.description || '';
	}

	public get rating(): number {
		const r = this._details.rating;

		if (!r) {
			return 0;
		}

		return +complex(`${r / 100 * 5}`).format(2);
	}

	public serveFor = (servings: number) => {
		const ratio = servings / this._servings;

		return new Recipe(
			this._name,
			servings,
			this._ingredients.map(ingredient => ingredient.scale(ratio)),
			this._steps,
			this._details,
		);
	}

	public toString = () => {
		const ingredients = this._ingredients.map(ingredient => `- ${ingredient.toString()}`);

		const steps = this._steps.map((step, i) => `${i + 1}) ${step.toString()}`);

		return [
			'===============================================',
			'',
			`\t${this._name} (${this._servings} servings)`,
			`\t${this.description}`,
			`\t${this.rating} ★`,
			'',
			'-----------------------------------------------',
			'',
			...ingredients,
			'',
			'-----------------------------------------------',
			'',
			...steps,
			'',
			'===============================================',
		].join('\n');
	}

}

export default Recipe;