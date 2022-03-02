import React from 'react';
import {View} from "react-native";
import {ScreenFC, withScreen} from "../utils";
import IngredientList from "../../components/IngredientList/IngredientList";
import IngredientListItem from "../../components/IngredientListItem/IngredientListItem";
import {useTailwind} from "tailwind-rn/dist";
import {useRootSelector} from "../../hooks";
import {selectRecipeList} from "../../store/recipe/selectors";

const RecipeScreen: ScreenFC = () => {
  const tailwind = useTailwind();
  const recipes = useRootSelector(selectRecipeList());
  const recipe = recipes[0];

  console.log(recipe || 'No recipe')

  return (
    <View>
      <IngredientList>
        {[1,2,3,4].map((id) => (
          <IngredientListItem key={id} style={tailwind('border-y border-gray-300')} />
        ))}
      </IngredientList>
    </View>
  );
}

export default withScreen(RecipeScreen, { route: 'RecipeScreen' });
