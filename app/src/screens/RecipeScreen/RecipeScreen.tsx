import React from 'react';
import {View} from "react-native";
import { ScreenFC } from "../types";
import IngredientList from "../../components/IngredientList/IngredientList";
import IngredientListItem from "../../components/IngredientListItem/IngredientListItem";

const RecipeScreen: ScreenFC = () => {
  return (
    <View>
      <IngredientList>
        <IngredientListItem />
        <IngredientListItem />
        <IngredientListItem />
        <IngredientListItem />
      </IngredientList>
    </View>
  );
}

RecipeScreen.id = 'RecipeScreen';

export default RecipeScreen;
