import React from 'react';
import {View} from "react-native";
import {ScreenFC, withScreen} from "../utils";
import IngredientList from "../../components/IngredientList/IngredientList";
import IngredientListItem from "../../components/IngredientListItem/IngredientListItem";
import {useTailwind} from "tailwind-rn/dist";

const RecipeScreen: ScreenFC = () => {
  const tailwind = useTailwind();

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

RecipeScreen.id = 'RecipeScreen';

export default withScreen(RecipeScreen);
