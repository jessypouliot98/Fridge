import { Unit } from './../../../src/enums/Unit';
import Model from "../../../src/models/Model";
import Ingredient from "../../../src/models/Ingredient";
import PortionnedIngredient from "../../../src/models/PortionnedIngredient";
import Portion from "../../../src/valueObjects/Portion";
import Recipe from '../../../src/models/Recipe';

const SERVINGS = 4;
const PORTIONS = 3;

describe('Recipe', () => {
	let recipe: Recipe;
	let portionnedIngredients: PortionnedIngredient[];

	beforeEach(() => {
		portionnedIngredients = ['Foo', 'Bar'].map((name) => {
			return new PortionnedIngredient(
				new Ingredient({
					name,
					description: 'description',
				}),
				new Portion(PORTIONS, Unit.unit),
			);
		});

		recipe = new Recipe({
			name: 'Test Recipe',
			ingredients: portionnedIngredients,
			servings: SERVINGS,
		});
	});

	it('extends Model', () => {
		expect(recipe).toBeInstanceOf(Model);
	});

	it('can be instanciated', () => {
		expect(recipe).toBeInstanceOf(Recipe);
	});

	it('contains a name, an array of portionned ingredient and a number of servings', () => {
		expect(typeof recipe.servings).toBe('number');
		expect(recipe.servings).toBe(SERVINGS);

		expect(typeof recipe.name).toBe('string');
		expect(recipe.name).toBe('Test Recipe');

		expect(Array.isArray(recipe.ingredients)).toBe(true);
		recipe.ingredients.forEach(ingredient => {
			expect(ingredient).toBeInstanceOf(PortionnedIngredient);
		});
	});

	describe('scale', () => {
		it('returns a new instance of Recipe', () => {
			const scaledRecipe = recipe.scale(2);

			expect(scaledRecipe).toBeInstanceOf(Recipe);
			expect(scaledRecipe).not.toBe(recipe);
		});

		it.each([
			[-1, -3, -4],
			[1/2, 1.5, 2],
			[2, 6, 8],
		])('returns a recipe with scaled portions', (scale, ingredientQty, servings) => {
			const scaledRecipe = recipe.scale(scale);

			expect(scaledRecipe.servings).toBe(servings);

			scaledRecipe.ingredients.forEach(ingredient => {
				expect(ingredient.portion.value).toBe(ingredientQty);
			});
		});
	});

	xdescribe('optimize', () => {
		// TODO
	});

	xdescribe('convert', () => {
		// TODO
	});

	describe('toText', () => {
		it('returns a string value', () => {
			expect(typeof recipe.toText()).toBe('string');
		});
	});
});