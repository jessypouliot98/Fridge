import React from "react";
import { getStaticProps, NavigationFC, NavigationFCStatic, navigationRef, RouteProps } from "../utils/navigation";
import {Tab} from "../tabs/types";

export type ScreenFC<P = never> = NavigationFC<P>;

export type ScreenNavigateFunction<P = never> = (props?: RouteProps<P>) => void;

export type ScreenFCStatic = NavigationFCStatic & {
  tab: Tab,
};

export type ScreenSFCStatic<P = never> = ScreenFCStatic & {
  navigate: ScreenNavigateFunction<P>;
};

export type ScreenSFC<P = never> = ScreenFC<P> & ScreenSFCStatic<P>;

export const withScreen = <P>(Component: ScreenFC<P>, statics: ScreenFCStatic): ScreenSFC<P> => {
  const { route, permissions, tab, title, options } = statics;
  const staticProps = getStaticProps(Component);

  const SuperComponent: ScreenSFC<P> = ((props: any) => {
    const { children, ...componentProps } = props;
    return React.createElement(
      Component,
      componentProps,
      children
    );
  }) as any;

  SuperComponent.route = route;
  SuperComponent.permissions = permissions;
  SuperComponent.tab = tab;
  SuperComponent.title = title;
  SuperComponent.options = options;

  SuperComponent.navigate = (props) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate('ScreenStack', {
        screen: tab.name,
        params: {
          screen: route,
          params: props,
        },
      });
    }
  };

  staticProps.forEach(([key, value]) => {
    SuperComponent[key] = value;
  });

  return SuperComponent;
};

