import { Unit } from './../../../src/enums/Unit';
import Model from "../../../src/models/Model";
import Ingredient from "../../../src/models/Ingredient";
import PortionnedIngredient from "../../../src/models/PortionnedIngredient";
import chalk from "chalk";
import Portion from "../../../src/valueObjects/Portion";

jest.mock('chalk', () => ({
	underline: jest.fn().mockImplementation((v: string) => v),
	green: jest.fn().mockImplementation((v: string) => v),
}));

describe('PortionnedIngredient', () => {
	let ingredient: Ingredient;
	let portion: Portion;
	let portionnedIngredient: PortionnedIngredient;

	beforeEach(() => {
		ingredient = new Ingredient({
			name: 'Test',
			description: 'some description',
		});
		portion = new Portion(3, Unit.unit);
		portionnedIngredient = new PortionnedIngredient(ingredient, portion);
	});

	it('extends Model', () => {
		expect(ingredient).toBeInstanceOf(Model);
	});

	it('can be instanciated', () => {
		expect(portionnedIngredient).toBeInstanceOf(PortionnedIngredient);
	});

	it('contains an ingredient and a portion', () => {
		expect(portionnedIngredient.ingredient).toBeInstanceOf(Ingredient);
		expect(portionnedIngredient.ingredient).toBe(ingredient);
		expect(portionnedIngredient.portion).toBeInstanceOf(Portion);
		expect(portionnedIngredient.portion).toBe(portion);
	});

	describe('scale', () => {
		it('returns a new instance of PortionnedIngredient', () => {
			const scaledPortionnedIngredient = portionnedIngredient.scale(2);

			expect(scaledPortionnedIngredient).toBeInstanceOf(PortionnedIngredient);
			expect(portionnedIngredient).not.toBe(scaledPortionnedIngredient);
		});

		it.each([
			[-1, -3],
			[1/2, 1.5],
			[2, 6],
			[3, 9],
		])('returns a double portion when scaled by {2}', (scale, portionValue) => {
			const scaledPortionnedIngredient = portionnedIngredient.scale(scale);
			expect(scaledPortionnedIngredient.portion.value).toBe(portionValue);
			expect(scaledPortionnedIngredient.portion.unit).toBe(portion.unit);
		});
	});

	xdescribe('optimize', () => {
		// TODO
	});

	xdescribe('convert', () => {
		// TODO
	});

	describe('toText', () => {
		it('returns a string value with the portion and ingredient', () => {
			expect(portionnedIngredient.toText()).toBe('3 unit of Test');
			expect(chalk.green).toBeCalled();
		});
	});
});