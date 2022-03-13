import React from "react";
import {View, Text, Pressable, Image} from "react-native";
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
      ]}>
        <View style={tailwind('flex flex-row')}>
          <View style={tailwind('w-28 rounded-r-lg')}>
            <RatioContainer ratio={[4, 3]}>
              <Image
                style={tailwind('w-full h-full')}
                source={{ uri: `https://picsum.photos/500?random=${recipe.uid}` }}
              />
            </RatioContainer>
          </View>
          <View style={tailwind('p-2 border-b w-full border-gray-100')}>
            <View style={tailwind('mb-1')}>
              <Text style={tailwind('font-bold')}>{recipe.name}</Text>
            </View>
            <View>
              <Text>{`👤 ${recipe.servings}`}</Text>
              <Text>{`⏳ 35m`}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default RecipeListItem;
