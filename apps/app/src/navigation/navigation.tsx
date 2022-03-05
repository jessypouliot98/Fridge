import React from "react";
import {createNavigationContainerRef, NavigationContainerRef} from "@react-navigation/native";
import { RouteProp } from "@react-navigation/core/lib/typescript/src/types";

export const navigationRef = createNavigationContainerRef<Record<string, any>>();

export const getStaticProps = <
  S extends {} = {},
  C extends {} = React.FC,
>(component: C) => {
  return Object.entries(component) as [keyof S, S[keyof S]][];
}

export type NavigationFCStatic = {
  route: string,
};

export type NavigationProps<P = never> = {
  navigation: NavigationContainerRef<Record<string, P>>,
  route: RouteProp<Record<string, P>>,
}
export type RouteProps<P = never> = Omit<P, keyof NavigationProps>;

export type NavigationFC<
  P = { never },
> = React.FC<NavigationProps<P>>;
