import {isCountPrefered, isFractionPrefered, Unit} from "../enums/Unit";

class Portion {

    public value: number;
    public unit: Unit;

    constructor(value: number, unit: Unit) {
        this.value = value;
        this.unit = unit;
    }

    public scale(multiplier: number) {
        return new Portion(this.value * multiplier, this.unit);
    }

    public optimize() {
        // TODO
        return new Portion(this.value, this.unit);
    }

    public convert() {
        // TODO
        return new Portion(this.value, this.unit);
    }

    public toText() {
        if (isFractionPrefered(this.unit)) {
            // TODO
            return `1/2 ${this.unit}`;
        }

        if (isCountPrefered(this.unit)) {
            return `${Math.round(this.value)} ${this.unit}`;
        }

        return `${this.value} ${this.unit}`;
    }

}

export default Portion;
