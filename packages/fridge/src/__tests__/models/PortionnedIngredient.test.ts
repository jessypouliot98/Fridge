import chalk from "chalk";
import { Unit } from "../../enums/Unit";
import Ingredient from "../../models/Ingredient";
import Model from "../../models/Model";
import PortionnedIngredient from "../../models/PortionnedIngredient";
import Portion from "../../Portion/Portion";


jest.mock('chalk', () => ({
	underline: jest.fn().mockImplementation((v: string) => v),
	green: jest.fn().mockImplementation((v: string) => v),
}));

const getPortionnedIngredient = (name: string, qty: number, unit: Unit) => new PortionnedIngredient(
	new Ingredient({ name, description: 'Test description' }),
	new Portion(qty, unit),
);

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
		])('returns a scaled portion', (scale, portionValue) => {
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
			expect(portionnedIngredient.toText()).toBe('3 Tests');
			expect(getPortionnedIngredient('Apple juice', 2, Unit.ml).toText()).toBe('2ml of Apple juice');
			expect(getPortionnedIngredient('Red bell pepper', 1, Unit.unit).toText()).toBe('1 Red bell pepper');
			expect(getPortionnedIngredient('Flour', 250, Unit.g).toText()).toBe('250g of Flour');
			expect(getPortionnedIngredient('Granulated sugar', 1/2, Unit.cup).toText()).toBe('1/2cup of Granulated sugar');
			expect(getPortionnedIngredient('Kosher salt', 3, Unit.pinch).toText()).toBe('3pinches of Kosher salt');
			expect(chalk.green).toBeCalled();
		});
	});
});