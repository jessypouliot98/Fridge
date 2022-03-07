import {ScreenFC, withScreen} from "../utils";
import {View, Text} from "react-native";
import React from "react";

const SubscribeScreen: ScreenFC = () => {
  return (
    <View>
      <Text>SubscribeScreen</Text>
    </View>
  );
}

export default withScreen(SubscribeScreen, { route: 'SubscribeScreen' });
