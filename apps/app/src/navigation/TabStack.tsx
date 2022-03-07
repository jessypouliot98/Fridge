import { HomeScreen, SettingScreen } from "../screens";
import { Tab as EnumTab } from "./tabs";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as screens from "../screens";
import { ScreenSFC } from "../screens/utils";
import { filterNavigationComponent } from "../utils/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRootSelector } from "../hooks";
import { selectIsLoggedIn } from "../store/account/selectors";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabStack = () => {
  const isLoggedIn = useRootSelector(selectIsLoggedIn());

  const getStackScreens = (tab: EnumTab) => {
    return (
      <Stack.Group
        screenOptions={{
          animation: 'slide_from_right',
        }}
      >
        {Object.values(screens as Record<string, ScreenSFC>)
          .filter(filterNavigationComponent({ isLoggedIn, tab }))
          .map((Screen) => (
            <Stack.Screen
              key={Screen.route}
              name={Screen.route}
              component={Screen}
            />
          ))}
      </Stack.Group>
    );
  }

  return (
    <Tab.Navigator initialRouteName={HomeScreen.route}>
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        {[EnumTab.MAIN, EnumTab.SETTING].map((tab) => {
          return (
            <Tab.Screen name={tab} children={() => (
              <Stack.Navigator initialRouteName={
                tab === EnumTab.SETTING
                  ? SettingScreen.route
                  : HomeScreen.route
              }>
                {getStackScreens(tab)}
              </Stack.Navigator>
            )}/>
          )
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
}

export default TabStack;
