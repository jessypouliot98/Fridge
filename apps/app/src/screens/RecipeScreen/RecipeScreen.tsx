import React, { useEffect } from 'react';
import { Text, View } from "react-native";
import { ScreenFC, withScreen } from "../utils";
import IngredientList from "../../components/IngredientList/IngredientList";
import IngredientListItem from "../../components/IngredientListItem/IngredientListItem";
import { useTailwind } from "tailwind-rn";
import { Recipe } from "@fridge/fridge";
import { Permissions } from "../../utils/permissions";
import { Tab } from "../../navigation/tabs";
import ContentCard from "../../components/ContentCard/ContentCard";

export type RecipeScreenProps = {
  recipe: Recipe,
}

const RecipeScreen: ScreenFC<RecipeScreenProps> = ({ navigation, route }) => {
  const { recipe } = route.params;
  const tailwind = useTailwind();

  useEffect(() => {
    navigation.setOptions({
      headerTitle: route?.params?.recipe?.name,
    })
  }, [navigation, route])

  return (
    <View style={tailwind('p-4')}>
      <Text>{`Name: ${recipe.name}`}</Text>
      <Text>{`Servings: ${recipe.servings}`}</Text>

      <ContentCard>
        <IngredientList style={tailwind('')}>
          {recipe.ingredients.map((ingredient) => (
            <IngredientListItem
              key={ingredient.uid}
              style={tailwind('border-b border-gray-100')}
              ingredient={ingredient}
            />
          ))}
        </IngredientList>
      </ContentCard>
    </View>
  );
}

export default withScreen(RecipeScreen, {
  route: 'RecipeScreen',
  permissions: [Permissions.PUBLIC],
  tab: Tab.MAIN,
  title: () => 'Recipe',
});
