export enum Unit {
    /* Volumes */
    ml = 'milliliter',
    l = 'liter',

    cup = 'cup',
    tsp = 'teaspoon',
    tbsp = 'tablespoon',
    
    gal = 'gallon',
    
    /* Weights */
    lb = 'pound',
    
    g = 'gram',
    kg = 'kilogram',
    
    /* Counts */
    pinch = 'pinch',
    unit = 'unit',
}

export const PREFER_FULL_UNITS = [Unit.pinch, Unit.unit] as const;
export const PREFER_FRACTION_UNITS =  [Unit.tsp, Unit.tbsp, Unit.cup, Unit.gal, Unit.lb] as const;
export const PREFER_DECIMAL_UNITS = [Unit.ml, Unit.l, Unit.g, Unit.kg] as const;

export const isFullPrefered = (unit: Unit): unit is typeof PREFER_FULL_UNITS[number] => {
    return PREFER_FULL_UNITS.includes(unit as any);
}

export const isFractionPrefered = (unit: Unit): unit is typeof PREFER_FRACTION_UNITS[number] => {
    return PREFER_FRACTION_UNITS.includes(unit as any);
}

export const isDecimalPrefered = (unit: Unit): unit is typeof PREFER_DECIMAL_UNITS[number] => {
    return PREFER_DECIMAL_UNITS.includes(unit as any);
}
