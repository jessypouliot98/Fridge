import { Unit } from "../enums/Unit";
declare class Portion {
    value: number;
    unit: Unit;
    constructor(value: number, unit: Unit);
    isEqual(portion: Portion): boolean;
    scale(multiplier: number): Portion;
    optimize(): Portion;
    convert(): Portion;
    toText(): string;
}
export default Portion;
