import { Unit } from "../enums/Unit";
import Portion from "./Portion";
export const optimizeMl = (portion) => {
    if (portion.value >= 1000) {
        return new Portion(portion.value / 1000, Unit.l);
    }
    return new Portion(portion.value, portion.unit);
};
export const optimizeG = (portion) => {
    if (portion.value >= 1000) {
        return new Portion(portion.value / 1000, Unit.kg);
    }
    return new Portion(portion.value, portion.unit);
};
export const optimizeKg = (portion) => {
    if (portion.value < 1) {
        return new Portion(portion.value * 1000, Unit.g);
    }
    return new Portion(portion.value, portion.unit);
};
export const optimizeTsp = (portion) => {
    if (portion.value >= 3) {
        return new Portion(portion.value / 1000, Unit.tbsp);
    }
    return new Portion(portion.value, portion.unit);
};
export const optimizeTbsp = (portion) => {
    if (portion.value >= 16) {
        return new Portion(portion.value / 16, Unit.cup);
    }
    return new Portion(portion.value, portion.unit);
};
const optimize = (portion) => {
    const { unit } = portion;
    switch (unit) {
        case Unit.ml: {
            return optimizeMl(portion);
        }
        case Unit.g: {
            return optimizeG(portion);
        }
        case Unit.kg: {
            return optimizeKg(portion);
        }
        case Unit.tsp: {
            return optimizeTsp(portion);
        }
        case Unit.tbsp: {
            return optimizeTbsp(portion);
        }
    }
    return new Portion(portion.value, portion.unit);
};
export default optimize;
