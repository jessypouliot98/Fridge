import {ScreenFC, withScreen} from "../utils";
import {View, Text} from "react-native";
import React from "react";

const ProfileScreen: ScreenFC = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
}

export default withScreen(ProfileScreen, { route: 'ProfileScreen' });
