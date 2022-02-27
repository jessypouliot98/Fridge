import React from 'react';
import { getStaticProps, NavigationFC } from "../utils/navigation";

export type ScreenFC<P extends {} = {}> = NavigationFC<P>;

export type ScreenSFCStatic<P extends {} = {}> = { };

export type ScreenSFC<P> = ScreenFC<P> & ScreenSFCStatic<P>;

export const withScreen = <P = any>(Component: ScreenFC<P>): ScreenSFC<P> => {
  const staticProps = getStaticProps(Component);

  const SuperComponent: ScreenSFC<P> = ({ children, ...props }) => {
    return React.createElement(
      Component,
      props as any,
      children
    );
  }

  SuperComponent.id = Component.id;

  staticProps.forEach(([key, value]) => {
    SuperComponent[key] = value;
  });

  return SuperComponent;
};
