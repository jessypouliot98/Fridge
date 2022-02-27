import React from "react";
import { createNavigationContainerRef, NavigationContainerRef } from "@react-navigation/native";
import { RouteProp } from "@react-navigation/core/lib/typescript/src/types";

export const navigationRef = createNavigationContainerRef();

type NavigationProps = {
  navigation: NavigationContainerRef<any>,
  route: RouteProp<any>,
}

export type NavigationFCStatic = { id: string };
export type NavigationFC<
  P extends {} = {},
  NP extends NavigationProps = NavigationProps,
> = React.FC<NP & P> & NavigationFCStatic;

export const getStaticProps = <
  S extends NavigationFCStatic = NavigationFCStatic,
  C extends {} = {},
>(component: C) => {
  return Object.entries(component) as [keyof S, S[keyof S]][];
}
