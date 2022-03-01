export var Unit;
(function (Unit) {
    /* Volumes */
    Unit["ml"] = "milliliter";
    Unit["l"] = "liter";
    Unit["cup"] = "cup";
    Unit["tsp"] = "teaspoon";
    Unit["tbsp"] = "tablespoon";
    Unit["gal"] = "gallon";
    /* Weights */
    Unit["lb"] = "pound";
    Unit["g"] = "gram";
    Unit["kg"] = "kilogram";
    /* Counts */
    Unit["pinch"] = "pinch";
    Unit["unit"] = "unit";
})(Unit || (Unit = {}));
export const PREFER_FULL_UNITS = [Unit.pinch, Unit.unit];
export const PREFER_FRACTION_UNITS = [Unit.tsp, Unit.tbsp, Unit.cup, Unit.gal, Unit.lb];
export const PREFER_DECIMAL_UNITS = [Unit.ml, Unit.l, Unit.g, Unit.kg];
export const isFullPrefered = (unit) => {
    return PREFER_FULL_UNITS.includes(unit);
};
export const isFractionPrefered = (unit) => {
    return PREFER_FRACTION_UNITS.includes(unit);
};
export const isDecimalPrefered = (unit) => {
    return PREFER_DECIMAL_UNITS.includes(unit);
};
