import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  Animated,
  useWindowDimensions,
  NativeScrollEvent, StyleProp, ViewStyle, Pressable
} from "react-native";
import { ScreenFC, withScreen } from "../utils";
import IngredientList from "../../components/IngredientList/IngredientList";
import IngredientListItem from "../../components/IngredientListItem/IngredientListItem";
import { useTailwind } from "tailwind-rn";
import { Recipe } from "@fridge/fridge";
import { Permissions } from "../../utils/permissions";
import ContentCard from "../../components/ContentCard/ContentCard";
import RatioContainer, { RatioType } from "../../components/RatioContainer/RatioContainer";
import PreperationList from "../../components/PreperationList/PreperationList";
import PreperationListItem from "../../components/PreperationListItem/PreperationListItem";
import InstructionList from "../../components/InstructionList/InstructionList";
import InstructionListItem from "../../components/InstructionListItem/InstructionListItem";
import AdSpace from '../../components/AdSpace/AdSpace';
import Icon from "../../components/Icon/Icon";
import MainTab from "../../tabs/MainTab/MainTab";

export type RecipeScreenProps = {
  recipe: Recipe,
}

const IMAGE_FORMAT = [4, 3] as RatioType;

const RecipeScreen: ScreenFC<RecipeScreenProps> = ({ navigation, route }) => {
  const { recipe } = route.params;
  const tailwind = useTailwind();
  const { width } = useWindowDimensions();
  const scrollOffset = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: route?.params?.recipe?.name,
    })
  }, [navigation, route]);

  const scrollHandler = Animated.event<NativeScrollEvent>(
    [{ nativeEvent: { contentOffset: { y: scrollOffset } } }],
    { useNativeDriver: false },
  );

  const contentTranslationStyle = {
    transform: [{
      translateY: scrollOffset.interpolate({
        inputRange: [0, width],
        outputRange: [0, width / 2],
      }),
    }],
    opacity: scrollOffset.interpolate({
      inputRange: [width / 2, width],
      outputRange: [1, 0],
    }),
  };

  return (
    <View style={tailwind('relative')}>
      <ScrollView onScroll={scrollHandler}>
        <Animated.View style={contentTranslationStyle}>
          <RatioContainer ratio={IMAGE_FORMAT}>
            <Image
              style={tailwind('w-full h-full')}
              source={{ uri: `https://picsum.photos/500?random=${recipe.uid}` }}
            />
          </RatioContainer>
        </Animated.View>

        <View style={tailwind('relative')}>
          <View style={tailwind('absolute bottom-0 right-0 p-4 flex items-end')}>
            <Pressable
              style={tailwind('flex justify-center items-center h-12 w-12 bg-white rounded-full')}
              onPress={() => console.log('toggle favorite')}
            >
              <Icon name={'heart'} />
            </Pressable>
          </View>
        </View>

        <View style={tailwind('p-4')}>
          <ContentCard style={tailwind('mb-2')}>
            <View style={tailwind('mb-4')}>
              <View style={tailwind('flex flex-row -m-1')}>
                <View style={tailwind('p-1')}>
                  <Text>{`👤 ${recipe.servings}`}</Text>
                </View>
                <View style={tailwind('p-1')}>
                  <Text>{`⏳ 35m`}</Text>
                </View>
              </View>
            </View>
            <Text style={tailwind('font-bold text-lg mb-2')}>Description</Text>
            <Text>{recipe.description || 'Lorem ipsum'}</Text>
          </ContentCard>

          <ContentCard style={tailwind('mb-2')}>
            <AdSpace ratio={[4, 3]}/>
          </ContentCard>

          <ContentCard style={tailwind('mb-2')}>
            <Text style={tailwind('font-bold text-lg mb-2')}>Ingredients</Text>
            <IngredientList>
              {recipe.ingredients.map((ingredient) => (
                <IngredientListItem
                  key={ingredient.uid}
                  style={tailwind('border-b border-gray-100')}
                  ingredient={ingredient}
                />
              ))}
            </IngredientList>
          </ContentCard>

          <ContentCard style={tailwind('mb-2')}>
            <AdSpace ratio={[1200, 400]}/>
          </ContentCard>

          <ContentCard style={tailwind('mb-2')}>
            <Text style={tailwind('font-bold text-lg mb-2')}>Preparation</Text>
            <PreperationList>
              {recipe.ingredients.map((ingredient) => (
                <PreperationListItem
                  key={ingredient.uid}
                  style={tailwind('border-b border-gray-100')}
                />
              ))}
            </PreperationList>
          </ContentCard>

          <ContentCard style={tailwind('mb-2')}>
            <AdSpace ratio={[1200, 400]}/>
          </ContentCard>

          <ContentCard>
            <Text style={tailwind('font-bold text-lg mb-2')}>Instructions</Text>
            <InstructionList>
              {recipe.ingredients.map((ingredient) => (
                <InstructionListItem
                  key={ingredient.uid}
                  style={tailwind('border-b border-gray-100')}
                />
              ))}
            </InstructionList>
          </ContentCard>
        </View>
      </ScrollView>
    </View>
  );
}

export default withScreen(RecipeScreen, {
  route: 'RecipeScreen',
  permissions: [Permissions.PUBLIC],
  tab: MainTab,
  title: () => 'Recipe',
});
