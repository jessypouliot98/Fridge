import {ScreenFC, withScreen} from "../utils";
import {View, Text} from "react-native";
import React from "react";
import {Permissions} from "../../utils/permissions";
import {SettingTab} from "../../tabs";

const ProfileScreen: ScreenFC = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
}

export default withScreen(ProfileScreen, {
  route: 'ProfileScreen',
  permissions: [Permissions.PRIVATE],
  tab: SettingTab,
  title: () => 'Profile & Preferences',
});
