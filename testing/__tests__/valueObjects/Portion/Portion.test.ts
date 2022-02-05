import { Unit } from "../../../../lib/enums/Unit";
import Portion from "../../../../lib/Portion/Portion";

describe('Portion', () => {
	let portion: Portion;

	beforeEach(() => {
		portion = new Portion(2, Unit.unit);
	});

	it('can be instanciated', () => {
		expect(portion).toBeInstanceOf(Portion);
	});

	it('contains a value and a unit', () => {
		expect(portion.value).toBe(2);
		expect(portion.unit).toBe(Unit.unit);
	});

	describe('scale', () => {
		it('returns a new Portion instance', () => {
			const scaledPortion = portion.scale(2);

			expect(scaledPortion).toBeInstanceOf(Portion);
			expect(scaledPortion).not.toBe(portion);
		});
		
		it.each([
			[-1, -2],
			[1/2, 1],
			[2, 4],
		])('returns a scaled Portion', (scale, value) => {
			const scaledPortion = portion.scale(scale);

			expect(scaledPortion.value).toBe(value);
			expect(scaledPortion.unit).toBe(portion.unit);
		});
	});

	xdescribe('optimize', () => {
		// TODO
	});

	xdescribe('convert', () => {
		// TODO
	});
});