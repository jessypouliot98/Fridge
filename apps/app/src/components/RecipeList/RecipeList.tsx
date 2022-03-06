import React from "react";
import {ScrollView, StyleProp, View, ViewStyle} from "react-native";
import { useRootSelector } from "../../hooks";
import { selectRecipeList } from "../../store/recipe/selectors";
import RecipeListItem from "../RecipeListItem/RecipeListItem";
import { useTailwind } from "tailwind-rn/dist";

export type RecipeListProps = {
  displayMode: 'table' | 'list',
  style?: StyleProp<ViewStyle>,
}

const RecipeList: React.FC<RecipeListProps> = (props) => {
  const { style, displayMode } = props;

  const recipes = useRootSelector(selectRecipeList());

  const tailwind = useTailwind();

  return (
    <ScrollView
      style={tailwind('w-full')}
      contentContainerStyle={[tailwind('flex flex-row flex-wrap bg-blue-100'), style]}
    >
      {recipes.map((recipe, i) => (
        <RecipeListItem
          key={recipe.uid + i}
          recipe={recipe}
          displayMode={displayMode}
        />
      ))}
    </ScrollView>
  )
};

export default RecipeList;
