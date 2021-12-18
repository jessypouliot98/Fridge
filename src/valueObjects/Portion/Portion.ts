import i18next from '../../utils/i18n';
import { isFullPrefered } from '../../enums/Unit';
import * as math from "mathjs";
import { isFractionPrefered, Unit } from "../../enums/Unit";
import optimize from './optimize';

const MAX_DENOMINATOR = 10;
const MAX_DECIMAL_POINTS = 2;

class Portion {

    public value: number;
    public unit: Unit;

    constructor(value: number, unit: Unit) {
        this.value = value;
        this.unit = unit;
    }

    public isEqual(portion: Portion) {
        return (
            this.value === portion.value &&
            this.unit === portion.unit
        );
    }

    public scale(multiplier: number) {
        return new Portion(this.value * multiplier, this.unit);
    }

    public optimize() {
        return optimize(this);
    }

    public convert() {
        // TODO
        return new Portion(this.value, this.unit);
    }

    public toText() {
        const count = this.value > 1 ? 2 : 1;
        const unitText = i18next.t(`unitsShort.${this.unit}`, { count }).toLowerCase();

        if (isFractionPrefered(this.unit)) {
            let v = `${this.value}`;
            const { s, n, d } = math.fraction(this.value) as math.Fraction;
            
            if (d > 1 && d <= MAX_DENOMINATOR) {
                v = `${n % d}/${d}`;
                
                if (n > s) {
                    v = `${s} ${v}`;
                }
            }
            
            return `${v} ${unitText}`;
        }

        if (isFullPrefered(this.unit)) {
            if (this.unit === Unit.unit) {
                return `${Math.round(this.value)}`;
            }
            
            return `${Math.round(this.value)} ${unitText}`;
        }

        return `${parseFloat(this.value.toFixed(MAX_DECIMAL_POINTS))} ${unitText}`;
    }

}

export default Portion;
