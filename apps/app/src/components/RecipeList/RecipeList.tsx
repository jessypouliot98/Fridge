import React from "react";
import {FlatList, StyleProp, View, ViewStyle} from "react-native";
import { useRootSelector } from "../../hooks";
import { selectRecipeList } from "../../store/recipe/selectors";
import RecipeListItem from "../RecipeListItem/RecipeListItem";
import { useTailwind } from "tailwind-rn/dist";

export type RecipeListProps = {
  style?: StyleProp<ViewStyle>,
}

const RecipeList: React.FC<RecipeListProps> = (props) => {
  const { style } = props;

  const tailwind = useTailwind();
  const recipes = useRootSelector(selectRecipeList());

  return (
    <View style={[tailwind('rounded-md overflow-hidden'), style]}>
      {recipes.map((recipe) => (
        <RecipeListItem key={recipe.uid} recipe={recipe} />
      ))}
    </View>
  )
};

export default RecipeList;
