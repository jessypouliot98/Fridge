import {ScreenFC, withScreen} from "../utils";
import {View} from "react-native";
import React from "react";
import Button from "../../components/Button/Button";
import ProfileScreen from "../ProfileScreen/ProfileScreen";
import SubscribeScreen from "../SubscribeScreen/SubscribeScreen";
import {useTailwind} from "tailwind-rn/dist";
import {signOut} from "../../store/account/actions";
import {useRootDispatch, useRootSelector} from "../../hooks";
import {Permissions} from "../../utils/permissions";
import {selectIsLoggedIn} from "../../store/account/selectors";
import {SignInScreen, SignUpScreen} from "../index";
import SettingTab from "../../tabs/SettingTab/SettingTab";

const SettingScreen: ScreenFC = () => {
  const tailwind = useTailwind();
  const dispatch: any = useRootDispatch();
  const isLoggedIn = useRootSelector(selectIsLoggedIn());

  return (
    <View>
      {isLoggedIn ? (
        <>
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
              onPress={() => dispatch(signOut())}
            >
              Sign out
            </Button>
          </View>
        </>
      ) : (
        <>
          <View style={tailwind('p-1')}>
            <Button onPress={() => SignUpScreen.navigate()}>
              Sign up
            </Button>
          </View>
          <View style={tailwind('p-1')}>
            <Button onPress={() => SignInScreen.navigate()}>
              Sign in
            </Button>
          </View>
        </>
      )}
    </View>
  );
}

export default withScreen(SettingScreen, {
  route: 'SettingScreen',
  permissions: [Permissions.PUBLIC],
  tab: SettingTab,
  title: () => 'Settings',
});
