import * as math from "mathjs";
import { isFractionPrefered, isFullPrefered, Unit } from "../enums/Unit";
import i18next from "../utils/i18n";
import optimize from './optimize';
const MAX_DENOMINATOR = 10;
const MAX_DECIMAL_POINTS = 2;
class Portion {
    constructor(value, unit) {
        this.value = value;
        this.unit = unit;
    }
    isEqual(portion) {
        return (this.value === portion.value &&
            this.unit === portion.unit);
    }
    scale(multiplier) {
        return new Portion(this.value * multiplier, this.unit);
    }
    optimize() {
        return optimize(this);
    }
    convert() {
        // TODO
        return new Portion(this.value, this.unit);
    }
    toText() {
        const count = this.value > 1 ? 2 : 1;
        const unitText = i18next.t(`unitsShort.${this.unit}`, { count }).toLowerCase();
        if (isFractionPrefered(this.unit)) {
            let v = `${this.value}`;
            const { s, n, d } = math.fraction(this.value);
            if (d > 1 && d <= MAX_DENOMINATOR) {
                v = `${n % d}/${d}`;
                if (n > s) {
                    v = `${s} ${v}`;
                }
            }
            return [v, unitText].join('');
        }
        if (isFullPrefered(this.unit)) {
            if (this.unit === Unit.unit) {
                return `${Math.round(this.value)}`;
            }
            return [Math.round(this.value), unitText].join('');
        }
        return [parseFloat(this.value.toFixed(MAX_DECIMAL_POINTS)), unitText].join('');
    }
}
export default Portion;
