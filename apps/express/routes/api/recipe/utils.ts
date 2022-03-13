import { Unit } from "@fridge/fridge";

const recipeNames = ['Foobar', 'Barbaz', 'Lorem Boopsoup', 'Boopsie bapedi'];

export const getFakeRecipe = (params?: Partial<{ uuid: string }>) => {
  const uuid = `${new Date().getTime()}-0001`;
  const name = recipeNames[Math.floor(Math.random() * recipeNames.length)];
  return {
    uuid,
    name,
    description: 'Recipe description lorem dolar ipsum sit amet adish',
    servings: 4,
    portionnedIngredients: [
      {
        ingredient: {
          name: 'Ingredient',
          description: 'ingredient description',
        },
        portion: {
          value: 2,
          unit: Unit.unit,
        }
      },
      {
        ingredient: {
          name: 'Ingredient',
          description: 'ingredient description',
        },
        portion: {
          value: 2,
          unit: Unit.unit,
        }
      },
      {
        ingredient: {
          name: 'Ingredient',
          description: 'ingredient description',
        },
        portion: {
          value: 2,
          unit: Unit.unit,
        }
      },
      {
        ingredient: {
          name: 'Ingredient',
          description: 'ingredient description',
        },
        portion: {
          value: 2,
          unit: Unit.unit,
        }
      },
      {
        ingredient: {
          name: 'Ingredient',
          description: 'ingredient description',
        },
        portion: {
          value: 2,
          unit: Unit.unit,
        }
      },
    ],
    ...(params || {}),
  }
}
