import { HomeScreen, SettingScreen } from "../screens";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as screens from "../screens";
import { tabs } from "../tabs";
import { ScreenSFC } from "../screens/utils";
import {filterNavigationComponent, getScreenOptions} from "../utils/navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRootSelector } from "../hooks";
import { selectIsLoggedIn } from "../store/account/selectors";
import { Tab } from "../tabs/types";

const TabNavigator = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabStack = () => {
  const isLoggedIn = useRootSelector(selectIsLoggedIn());

  const getStackScreens = (tab: Tab) => {
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
              options={getScreenOptions(Screen)}
              component={Screen}
            />
          ))}
      </Stack.Group>
    );
  }

  return (
    <TabNavigator.Navigator initialRouteName={tabs[0].name}>
      <TabNavigator.Group
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarVisibilityAnimationConfig: {
            hide: {
              animation: 'timing',
              config: { duration: 0 },
            }
          }
        }}
      >
        {tabs.map((tab) => {
          return (
            <TabNavigator.Screen key={tab.name} name={tab.name} children={() => (
              <Stack.Navigator initialRouteName={HomeScreen.route}>
                {getStackScreens(tab)}
              </Stack.Navigator>
            )}/>
          )
        })}
      </TabNavigator.Group>
    </TabNavigator.Navigator>
  );
}

export default TabStack;
