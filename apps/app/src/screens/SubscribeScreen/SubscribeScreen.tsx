import {ScreenFC, withScreen} from "../utils";
import {Text, View} from "react-native";
import React from "react";
import {Permissions} from "../../utils/permissions";
import {Tab} from "../../navigation/tabs";

const SubscribeScreen: ScreenFC = () => {
  return (
    <View>
      <Text>SubscribeScreen</Text>
    </View>
  );
}

export default withScreen(SubscribeScreen, {
  route: 'SubscribeScreen',
  permissions: [Permissions.PRIVATE],
  tab: Tab.SETTING,
});
