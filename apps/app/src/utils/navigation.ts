import { createNavigationContainerRef } from "@react-navigation/native";
import React from "react";
import { Permissions } from "./permissions";
import { RouteProp } from "@react-navigation/core/lib/typescript/src/types";
import { NativeStackNavigationOptions, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ScreenSFC } from "../screens/utils";
import { Tab } from "../tabs/types";

export const navigationRef = createNavigationContainerRef<Record<string, any>>();

export const getScreenOptions = (Screen: NavigationFCStatic): NativeStackNavigationOptions => {
  return {
    headerTitle: Screen.title?.(),
    ...(Screen.options || {}),
  }
}

export const filterNavigationComponent = ({ isLoggedIn, tab }: { isLoggedIn: boolean, tab?: Tab }) => (Component: NavigationFCStatic) => {
  if ((Component.permissions || []).length === 0) {
    return false;
  }

  const isPermitted = [
    (Component.permissions.includes(Permissions.GUEST) && isLoggedIn),
    (Component.permissions.includes(Permissions.PRIVATE) && !isLoggedIn),
  ].some(condition => !condition);

  // const isInTab = tab?.name ? (Component as ScreenSFC).tab.name === tab.name : true;
  // console.log({isInTab, tab: tab?.name, Component: (Component as ScreenSFC)?.tab.name})

  if (Component.permissions.includes(Permissions.DEBUG) && !__DEV__) {
    return false;
  }

  return isPermitted;
};

export const getStaticProps = <
  S extends {} = {},
  C extends {} = React.FC,
  >(component: C) => {
  return Object.entries(component) as [keyof S, S[keyof S]][];
}

export type NavigationFCStatic = {
  route: string,
  permissions: Permissions[],
  title?: () => string,
  options?: NativeStackNavigationOptions,
};

export type NavigationProps<P extends {} = never> = {
  navigation: NativeStackNavigationProp<Record<string, P>>,
  route: RouteProp<Record<string, P>>,
}
export type RouteProps<P = never> = Omit<P, keyof NavigationProps>;

export type NavigationFC<
  P = never,
  > = React.FC<NavigationProps<P>>;
