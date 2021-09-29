import Model from "./Model";
import { complex, Fraction, fraction } from 'mathjs';

export enum Unit {
	g = 'grams',
	kg = 'kilograms',

	lb = 'pounds',

	ml = 'milliliters',
	l = 'liters',

	c = 'cups',

	tbsp = 'tablespoon',
	tsp = 'teaspoon',

	unit = 'unit',
	pinch = 'pinch',
}

const G_TO_KG = 1/1000;
const ML_TO_L = 1/1000;
const C_TO_ML = 236.588;
const TSP_TO_TBSP = 1/3;
const TBSP_TO_CUP = 1/16;
const PINCH_TO_TSP = 1/16;

class Quantity extends Model {
	protected _value: number;
	protected _unit: Unit;

	public constructor(value: number, unit: Unit) {
		super();

		this._value = value;
		this._unit = unit;
	}

	public scale = (ratio: number) => {
		return new Quantity(this._value * ratio, this._unit);
	}

	public optimize = () => {
		let prevUnit = this._unit;
		
		do {
			prevUnit = this._unit;

			switch (this._unit) {
				case Unit.g: {
					if (this._value >= 1000) {
						this._value = this._value * G_TO_KG;
						this._unit = Unit.kg;
					}
	
					break;
				}

				case Unit.pinch: {
					if (this._value >= 16) {
						this._value = this._value * PINCH_TO_TSP;
						this._unit = Unit.tsp;
					}

					break;
				}

				case Unit.tsp: {
					if (this._value >= 3) {
						this._value = this._value * TSP_TO_TBSP;
						this._unit = Unit.tbsp;
					}

					break;
				}

				case Unit.tbsp: {
					if (this._value >= 16) {
						this._value = this._value * TBSP_TO_CUP;
						this._unit = Unit.c;
					}

					break;
				}

				case Unit.ml: {
					if (this._value >= 1000) {
						this._value = this._value * ML_TO_L;
						this._unit = Unit.l;
					}
	
					break;
				}
			}
		} while (prevUnit !== this._unit)

		return this;
	}

	public toString = () => {
		const value = +complex(`${this._value}`).format(3);
		
		const { s, d } = fraction(value) as Fraction;

		const int = Math.floor(value);
		
		let string = '';

		if (int >= 1) {
			string += `${int} `;
		}

		if (s !== d && d <= 10) {
			string += `${s}/${d} `
		}

		string += `${this._unit} `;

		return string.trim();
	}
}

export default Quantity;