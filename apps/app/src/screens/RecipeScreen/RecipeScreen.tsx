import React from 'react';
import {Text, View} from "react-native";
import {ScreenFC, withScreen} from "../utils";
import IngredientList from "../../components/IngredientList/IngredientList";
import IngredientListItem from "../../components/IngredientListItem/IngredientListItem";
import {useTailwind} from "tailwind-rn";
import {Recipe} from "@fridge/fridge";
import {Permissions} from "../../utils/permissions";
import {Tab} from "../../navigation/tabs";

export type RecipeScreenProps = {
  recipe: Recipe,
}

const RecipeScreen: ScreenFC<RecipeScreenProps> = ({ route }) => {
  const { recipe } = route.params;
  const tailwind = useTailwind();

  return (
    <View style={tailwind('p-4')}>
      <Text>{`Name: ${recipe.name}`}</Text>
      <Text>{`Servings: ${recipe.servings}`}</Text>
      <IngredientList>
        {recipe.ingredients.map((ingredient) => (
          <IngredientListItem
            key={ingredient.uid}
            style={tailwind('border-y border-gray-300')}
            ingredient={ingredient}
          />
        ))}
      </IngredientList>
    </View>
  );
}

export default withScreen(RecipeScreen, {
  route: 'RecipeScreen',
  permissions: [Permissions.PUBLIC],
  tab: Tab.MAIN,
  title: () => 'Recipe',
});
