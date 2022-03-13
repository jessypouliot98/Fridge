import { ScreenFC, withScreen } from "../utils";
import { View } from "react-native";
import { Permissions } from "../../utils/permissions";
import React from 'react';
import SearchField from "../../components/SearchField/SearchField";
import ContentCard from "../../components/ContentCard/ContentCard";
import { useTailwind } from "tailwind-rn/dist";
import RecipeBrowserList from "../../components/RecipeBrowserList/RecipeBrowserList";
import MainTab from "../../tabs/MainTab/MainTab";

export type RecipeBrowserScreenProps = {
  searchTerm?: string,
}

const RecipeBrowserScreen: ScreenFC<RecipeBrowserScreenProps> = ({ navigation, route }) => {
  const { searchTerm } = route.params;

  const tailwind = useTailwind();

  const handleSearch = (nextSearchTerm: string) => {
    navigation.setParams({ searchTerm: nextSearchTerm });
  };

  return (
    <View style={tailwind('w-full bg-gray-300')}>
      <View style={tailwind('p-2')}>

        <SearchField
          onSubmit={handleSearch}
          defaultValue={searchTerm}
          style={tailwind('mb-2')}
        />

        <ContentCard>
          <RecipeBrowserList searchTerm={searchTerm} />
        </ContentCard>

      </View>
    </View>
  )
}

export default withScreen(RecipeBrowserScreen, {
  route: 'RecipeBrowserScreen',
  permissions: [Permissions.PUBLIC],
  tab: MainTab,
  title: () => 'Recipes',
})
