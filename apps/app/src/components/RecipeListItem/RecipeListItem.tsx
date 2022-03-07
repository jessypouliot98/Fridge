import React from "react";
import {View, Text, TouchableWithoutFeedback} from "react-native";
import {Recipe} from "@fridge/fridge";
import {RecipeScreen} from "../../screens";
import RatioContainer from "../RatioContainer/RatioContainer";
import {useTailwind} from "tailwind-rn/dist";

export type RecipeListItemProps = {
  recipe: Recipe,
  displayMode: 'table' | 'list',
}

const RecipeListItem: React.FC<RecipeListItemProps> = (props) => {
  const { recipe, displayMode } = props;

  const tailwind = useTailwind();

  return (
    <TouchableWithoutFeedback onPress={() => RecipeScreen.navigate({ recipe })}>
      <View style={[
        tailwind('bg-white rounded-lg overflow-hidden'),
        { elevation: 3 },
        { width: displayMode === 'table' ? '50%' : '100%' },
      ]}>
        {displayMode === 'table' ? (
          <View>
            <RatioContainer ratio={[16, 9]} style={tailwind('bg-red-100')} />
            <View style={tailwind('p-2')}>
              <Text>{recipe.name}</Text>
            </View>
          </View>
        ) : (
          <View style={tailwind('flex flex-row')}>
            <View style={tailwind('w-32')}>
              <RatioContainer ratio={[4, 3]} style={tailwind('bg-red-100')} />
            </View>
            <View style={tailwind('p-2')}>
              <Text>{recipe.name}</Text>
            </View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RecipeListItem;
