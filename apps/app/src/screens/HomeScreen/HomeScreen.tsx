import React, {useState} from 'react';
import { View } from "react-native";
import { ScreenFC, withScreen } from "../utils";
import RecipeList, {RecipeListProps} from "../../components/RecipeList/RecipeList";
import { useTailwind } from "tailwind-rn/dist";
import Button from "../../components/Button/Button";

const HomeScreen: ScreenFC = () => {
  const tailwind = useTailwind();

  const [recipeListDisplayMode, setRecipeListDisplayMode] = useState<RecipeListProps['displayMode']>('table');

  const handleToggleDisplayMode = () => {
    setRecipeListDisplayMode((prevMode) => prevMode === 'table' ? 'list' : 'table')
  }

  return (
    <View style={tailwind('w-full p-2')}>
      <View style={tailwind('mb-2')}>
        <Button onPress={handleToggleDisplayMode}>
          Toggle display mode
        </Button>
      </View>
      <View style={tailwind('-mx-2')}>
        <RecipeList style={tailwind('px-2')} displayMode={recipeListDisplayMode} />
      </View>
    </View>
  );
}

export default withScreen(HomeScreen, { route: 'HomeScreen' });
