import React, {useEffect} from 'react';
import { ScrollView, View, Text } from "react-native";
import { ScreenFC, withScreen } from "../utils";
import RecipeList from "../../components/RecipeList/RecipeList";
import { useTailwind } from "tailwind-rn/dist";
import { Permissions } from "../../utils/permissions";
import SearchField from "../../components/SearchField/SearchField";
import Button from "../../components/Button/Button";
import RecipeBrowserScreen from "../RecipeBrowserScreen/RecipeBrowserScreen";
import ContentCard from "../../components/ContentCard/ContentCard";
import { getFromStorage, StorageKeys } from "../../utils/storage";
import { OnboardingModal } from "../../modals";
import AdSpace from "../../components/AdSpace/AdSpace";
import {MainTab} from "../../tabs";

const HomeScreen: ScreenFC = () => {
  const tailwind = useTailwind();

  useEffect(() => {
    getFromStorage<boolean>(StorageKeys.hasBeenOnboarded, false)
      .then((hasBeenOnboarded) => {
        if (!hasBeenOnboarded) {
          OnboardingModal.open();
        }
      });
  }, []);

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm) {
      return;
    }

    RecipeBrowserScreen.navigate({ searchTerm });
  }

  return (
    <View style={tailwind('w-full h-full bg-gray-300')}>
      <ScrollView style={tailwind('p-2')}>
        <SearchField
          style={tailwind('mb-2')}
          onSubmit={handleSearch}
        />

        <ContentCard style={tailwind('mb-2')}>
          <View style={tailwind('mb-2')}>
            <Text style={tailwind('text-lg font-bold')}>Trending</Text>
          </View>

          <RecipeList style={tailwind('mb-2')} />

          <Button
            type={'default'}
            onPress={() => RecipeBrowserScreen.navigate({ searchTerm: '' })}
          >
            Show more
          </Button>
        </ContentCard>

        <ContentCard style={tailwind('mb-2')}>
          <AdSpace ratio={[1200, 400]}/>
        </ContentCard>
      </ScrollView>
    </View>
  );
}

export default withScreen(HomeScreen, {
  route: 'HomeScreen',
  permissions: [Permissions.PUBLIC],
  tab: MainTab,
  title: () => 'Fridge',
});
