import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {Recipe} from "@fridge/fridge";
import {RecipeScreen} from "../../screens";

export type RecipeListItemProps = {
  recipe: Recipe,
}

const RecipeListItem: React.FC<RecipeListItemProps> = ({ recipe }) => {
  return (
    <TouchableOpacity onPress={() => RecipeScreen.navigate({ recipe })}>
      <Text>{recipe.name}</Text>
    </TouchableOpacity>
  )
};

export default RecipeListItem;
