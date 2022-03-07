import {ScreenFC, withScreen} from "../utils";
import {View} from "react-native";
import React from "react";
import Button from "../../components/Button/Button";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import SubscribeScreen from "../SubscribeScreen/SubscribeScreen";
import {useTailwind} from "tailwind-rn/dist";

const SettingScreen: ScreenFC = () => {
  const tailwind = useTailwind();

  return (
    <View>
      <View style={tailwind('p-1')}>
        <Button onPress={() => ProfileScreen.navigate()}>
          Profile & Preferences
        </Button>
      </View>
      <View style={tailwind('p-1')}>
        <Button onPress={() => SubscribeScreen.navigate()}>
          Get premium
        </Button>
      </View>
      <View style={tailwind('p-1')}>
        <Button
          onPress={() => console.log('logout')}
        >
          Sign out
        </Button>
      </View>
    </View>
  );
}

export default withScreen(SettingScreen, { route: 'SettingScreen' });
