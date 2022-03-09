import React from "react";
import {View, Text, Pressable} from "react-native";
import {Recipe} from "@fridge/fridge";
import {RecipeScreen} from "../../screens";
import RatioContainer from "../RatioContainer/RatioContainer";
import {useTailwind} from "tailwind-rn/dist";

export type RecipeListItemProps = {
  recipe: Recipe,
}

const RecipeListItem: React.FC<RecipeListItemProps> = (props) => {
  const { recipe } = props;

  const tailwind = useTailwind();

  return (
    <Pressable onPress={() => RecipeScreen.navigate({ recipe })}>
      <View style={[
        tailwind('w-full bg-white overflow-hidden'),
        { elevation: 3 },
      ]}>
        <View style={tailwind('flex flex-row')}>
          <View style={tailwind('w-28 rounded-r-lg')}>
            <RatioContainer ratio={[4, 3]} style={tailwind('bg-red-500')} />
          </View>
          <View style={tailwind('p-2')}>
            <Text>{recipe.name}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default RecipeListItem;
