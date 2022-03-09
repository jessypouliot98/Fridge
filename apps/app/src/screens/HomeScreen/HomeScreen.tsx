import React from 'react';
import {ScrollView, View, Text} from "react-native";
import { ScreenFC, withScreen } from "../utils";
import RecipeList from "../../components/RecipeList/RecipeList";
import { useTailwind } from "tailwind-rn/dist";
import { Permissions } from "../../utils/permissions";
import { Tab } from "../../navigation/tabs";
import SearchField from "../../components/SearchField/SearchField";
import Button from "../../components/Button/Button";
import RecipeBrowserScreen from "../RecipeBrowserScreen/RecipeBrowserScreen";
import ContentCard from "../../components/ContentCard/ContentCard";

const HomeScreen: ScreenFC = () => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('w-full h-full bg-gray-300')}>
      <ScrollView
        style={tailwind('p-2')}
        contentContainerStyle={tailwind('h-full')}
      >

        <View>
          <SearchField
            style={tailwind('mb-2')}
            onSubmit={(searchTerm) => RecipeBrowserScreen.navigate({ searchTerm })}
          />
        </View>

        <ContentCard>
          <View style={tailwind('mb-2')}>
            <Text style={tailwind('text-lg font-bold')}>Trending</Text>
          </View>

          <RecipeList style={tailwind('mb-2')} />

          <Button
            type={'default'}
            onPress={() => RecipeBrowserScreen.navigate()}
          >
            Show more
          </Button>
        </ContentCard>

      </ScrollView>
    </View>
  );
}

export default withScreen(HomeScreen, {
  route: 'HomeScreen',
  permissions: [Permissions.PUBLIC],
  tab: Tab.MAIN,
  title: () => 'Fridge',
});
