import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Permissions } from "../utils/permissions";
import * as screens from "../screens";
import type { ScreenSFC } from "../screens/utils";
import * as modals from "../modals";
import type { ModalSFC } from "../modals/utils";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRootSelector } from "../hooks";
import { selectIsLoggedIn } from "../store/account/selectors";
import {NavigationFCStatic, navigationRef} from "../utils/navigation";

const { HomeScreen } = screens;
const Stack = createNativeStackNavigator();

const filterNavigationComponent = ({ isLoggedIn }: { isLoggedIn: boolean }) => (Component: NavigationFCStatic) => {
  return [
    (isLoggedIn && Component.permissions.includes(Permissions.GUEST)),
    (!isLoggedIn && Component.permissions.includes(Permissions.PRIVATE)),
  ].some(condition => !condition);
};

const Navigation: React.FC = () => {
  const isLoggedIn = useRootSelector(selectIsLoggedIn());

  const getStackScreens = () => {
    return (
      <Stack.Group
        screenOptions={{
          animation: 'slide_from_right',
        }}
      >
        {Object.values(screens as Record<string, ScreenSFC>)
          .filter(filterNavigationComponent({ isLoggedIn }))
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

  const getStackModals = () => {
    return (
      <Stack.Group
        screenOptions={{
          presentation: 'transparentModal',
          headerShown: false,
          statusBarStyle: 'dark',
          animation: 'fade',
        }}
      >
        {Object.values(modals as Record<string, ModalSFC>)
          .filter(filterNavigationComponent({ isLoggedIn }))
          .map((Modal) => (
            <Stack.Screen
              key={Modal.route}
              name={Modal.route}
              component={Modal}
            />
          ))}
      </Stack.Group>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={HomeScreen.route}
      >
        {getStackScreens()}
        {getStackModals()}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
