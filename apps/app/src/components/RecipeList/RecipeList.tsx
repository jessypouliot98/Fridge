import React from "react";
import {StyleProp, View, ViewStyle, Text, ActivityIndicator} from "react-native";
import RecipeListItem from "../RecipeListItem/RecipeListItem";
import { useTailwind } from "tailwind-rn/dist";
import {useRecipes} from "../../hooks/recipes";

export type RecipeListProps = {
  style?: StyleProp<ViewStyle>,
}

const RecipeList: React.FC<RecipeListProps> = (props) => {
  const { style } = props;

  const tailwind = useTailwind();
  const { isLoading, recipes } = useRecipes();

  return (
    <View style={style}>
      {isLoading ? (
        <View style={tailwind('h-28 flex justify-center')}>
          <ActivityIndicator color={'red'} size={'large'} />
        </View>
      ) : (
        <View style={tailwind('rounded-md overflow-hidden')}>
          {recipes.filter((_, i) => i < 5).map((recipe) => (
            <RecipeListItem key={recipe.uid} recipe={recipe} />
          ))}
        </View>
      )}
    </View>
  )
};

export default RecipeList;
