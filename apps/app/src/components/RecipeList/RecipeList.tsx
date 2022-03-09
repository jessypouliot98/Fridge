import React from "react";
import { FlatList, View } from "react-native";
import { useRootSelector } from "../../hooks";
import { selectRecipeList } from "../../store/recipe/selectors";
import RecipeListItem from "../RecipeListItem/RecipeListItem";
import { useTailwind } from "tailwind-rn/dist";
import { Recipe } from "@fridge/fridge";

export type RecipeListProps = {

}

const RecipeList: React.FC<RecipeListProps> = (props) => {
  const { style } = props;

  const tailwind = useTailwind();
  const recipes: Recipe[] = useRootSelector(selectRecipeList());

  return (
    <View style={[tailwind('rounded-md overflow-hidden'), style]}>
      {recipes.map((recipe) => (
        <RecipeListItem key={recipe.uid} recipe={recipe} />
      ))}
    </View>
  )
};

export default RecipeList;
