import React from 'react';
import {View} from "react-native";
import {ScreenFC, withScreen} from "../utils";
import IngredientList from "../../components/IngredientList/IngredientList";
import IngredientListItem from "../../components/IngredientListItem/IngredientListItem";
import {useTailwind} from "tailwind-rn/dist";
import {useRootSelector} from "../../hooks";
import {selectRecipeList} from "../../store/recipe/selectors";
import {Recipe} from "@fridge/fridge";

export type RecipeScreenProps = {
  recipe: Recipe,
}

const RecipeScreen: ScreenFC<RecipeScreenProps> = ({ route }) => {
  const { recipe } = route.params;
  const tailwind = useTailwind();

  console.log(recipe || 'No recipe')

  return (
    <View>
      <IngredientList>
        {recipe.ingredients.map((portionnedIngredient) => (
          <IngredientListItem
            key={portionnedIngredient.uid}
            style={tailwind('border-y border-gray-300')}
            portionnedIngredient={portionnedIngredient}
          />
        ))}
      </IngredientList>
    </View>
  );
}

export default withScreen(RecipeScreen, { route: 'RecipeScreen' });
