import React from "react";
import {View} from "react-native";
import {useRootSelector} from "../../hooks";
import {selectRecipeList} from "../../store/recipe/selectors";
import RecipeListItem from "../RecipeListItem/RecipeListItem";

const RecipeList: React.FC = () => {
  const recipes = useRootSelector(selectRecipeList());

  return (
    <View>
      {recipes.map((recipe) => <RecipeListItem key={recipe.uid} recipe={recipe}/>)}
    </View>
  )
};

export default RecipeList;
