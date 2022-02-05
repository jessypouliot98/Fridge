import Model from "../../../src/models/Model";
import Ingredient from "../../../src/models/Ingredient";
import chalk from "chalk";

jest.mock('chalk', () => ({
	underline: jest.fn().mockImplementation((v: string) => v),
}));

describe('Ingredient', () => {
	let ingredient: Ingredient;

	beforeEach(() => {
		ingredient = new Ingredient({
			name: 'Test',
			description: 'some description',
		});
	});

	it('extends Model', () => {
		expect(ingredient).toBeInstanceOf(Model);
	});

	it('can be instanciated', () => {
		expect(ingredient).toBeInstanceOf(Ingredient);
	});

	it('contains a name and description', () => {
		expect(ingredient.name).toBe('Test');
		expect(ingredient.description).toBe('some description');
	});

	describe('toText', () => {
		it('returns a string value with the name', () => {
			expect(ingredient.toText()).toBe('Test');
			expect(chalk.underline).toBeCalled();
		});
	});
});