import React, {useEffect} from "react";
import {StyleProp, View, ViewStyle, Text, FlatList, RefreshControl} from "react-native";
import RecipeListItem from "../RecipeListItem/RecipeListItem";
import { useTailwind } from "tailwind-rn/dist";
import {useRecipes} from "../../hooks/recipes";
import ContentCard from "../ContentCard/ContentCard";

export type RecipeListProps = {
  style?: StyleProp<ViewStyle>,
  searchTerm?: string,
}

const RecipeBrowserList: React.FC<RecipeListProps> = (props) => {
  const { style, searchTerm } = props;

  const tailwind = useTailwind();
  const { refresh, isLoading, recipes } = useRecipes();

  useEffect(() => {
    refresh();
  }, [searchTerm]);

  return (
    <View style={[tailwind('rounded-md overflow-hidden'), style]}>
      <FlatList
        data={recipes}
        refreshing={isLoading}
        overScrollMode={'always'}
        refreshControl={(
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => refresh()}
          />
        )}
        keyExtractor={(recipe) => recipe.uid}
        renderItem={({ item: recipe }) => (
          <RecipeListItem key={recipe.uid} recipe={recipe} />
        )}
      />
    </View>
  )
};

export default RecipeBrowserList;
