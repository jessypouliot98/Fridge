export declare enum Unit {
    ml = "milliliter",
    l = "liter",
    cup = "cup",
    tsp = "teaspoon",
    tbsp = "tablespoon",
    gal = "gallon",
    lb = "pound",
    g = "gram",
    kg = "kilogram",
    pinch = "pinch",
    unit = "unit"
}
export declare const PREFER_FULL_UNITS: readonly [Unit.pinch, Unit.unit];
export declare const PREFER_FRACTION_UNITS: readonly [Unit.tsp, Unit.tbsp, Unit.cup, Unit.gal, Unit.lb];
export declare const PREFER_DECIMAL_UNITS: readonly [Unit.ml, Unit.l, Unit.g, Unit.kg];
export declare const isFullPrefered: (unit: Unit) => unit is Unit.pinch | Unit.unit;
export declare const isFractionPrefered: (unit: Unit) => unit is Unit.cup | Unit.tsp | Unit.tbsp | Unit.gal | Unit.lb;
export declare const isDecimalPrefered: (unit: Unit) => unit is Unit.ml | Unit.l | Unit.g | Unit.kg;
