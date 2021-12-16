export enum Unit {
    /* Volumes */
    ml = 'milliliter',
    l = 'liter',

    cup = 'cup',

    pinch = 'pinch',

    gal = 'gallon',

    /* Weights */
    lb = 'pound',

    g = 'gram',
    kg = 'kilogram',

    /* Counts */
    unit = 'unit',
}

export const isCountPrefered = (unit: Unit): boolean => {
    return [Unit.pinch, Unit.unit].includes(unit);
}

export const isFractionPrefered = (unit: Unit): boolean => {
    if (isCountPrefered(unit)) {
        return false;
    }

    return [Unit.cup, Unit.gal, Unit.lb].includes(unit);
}

export const isDecimalPrefered = (unit: Unit): boolean => {
    if (isCountPrefered(unit)) {
        return false;
    }

    return !isFractionPrefered(unit);
}
