import {createNavigationContainerRef, NavigationContainerRef} from "@react-navigation/native";
import React from "react";
import {Permissions} from "./permissions";
import {RouteProp} from "@react-navigation/core/lib/typescript/src/types";
import {NativeStackNavigationOptions} from "@react-navigation/native-stack";

export const navigationRef = createNavigationContainerRef<Record<string, any>>();

export const getScreenOptions = (Screen: NavigationFCStatic): NativeStackNavigationOptions => {
  return {
    headerTitle: Screen.title?.(),
    ...(Screen.options || {}),
  }
}

export const filterNavigationComponent = ({ isLoggedIn, tab }: { isLoggedIn: boolean, tab?: string }) => (Component: NavigationFCStatic) => {
  const isPermitted = [
    (isLoggedIn && Component.permissions.includes(Permissions.GUEST)),
    (!isLoggedIn && Component.permissions.includes(Permissions.PRIVATE)),
  ].some(condition => !condition);

  const isInTab = tab ? (Component as any).tab === tab : true;

  if (Component.permissions.includes(Permissions.DEBUG) && !__DEV__) {
    return false;
  }

  return isPermitted && isInTab;
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

export type NavigationProps<P = never> = {
  navigation: NavigationContainerRef<Record<string, P>>,
  route: RouteProp<Record<string, P>>,
}
export type RouteProps<P = never> = Omit<P, keyof NavigationProps>;

export type NavigationFC<
  P = never,
  > = React.FC<NavigationProps<P>>;
