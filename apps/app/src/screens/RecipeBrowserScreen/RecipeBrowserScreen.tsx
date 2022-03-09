import { ScreenFC, withScreen } from "../utils";
import { View, Text } from "react-native";
import { Permissions } from "../../utils/permissions";
import { Tab } from "../../navigation/tabs";
import React from 'react';

export type RecipeBrowserScreenProps = {
  searchTerm?: string,
}

const RecipeBrowserScreen: ScreenFC<RecipeBrowserScreenProps> = ({ route }) => {
  const { searchTerm } = route.params || {};

  return (
    <View>
      <Text>{searchTerm || 'dffdsjkfh'}</Text>
    </View>
  );
}

export default withScreen(RecipeBrowserScreen, {
  route: 'RecipeBrowserScreen',
  permissions: [Permissions.PUBLIC],
  tab: Tab.MAIN,
  title: () => 'Recipes',
})
