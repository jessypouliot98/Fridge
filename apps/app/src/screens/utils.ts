import { getStaticProps, NavigationFC, NavigationFCStatic, navigationRef, RouteProps } from "../navigation/navigation";
import React from "react";

export type ScreenFC<P = never> = NavigationFC<P>;

export type ScreenNavigateFunction<P = never> = (props?: RouteProps<P>) => void;

export type ScreenSFCStatic<P = never> = NavigationFCStatic & {
  navigate: ScreenNavigateFunction<P>;
};

export type ScreenSFC<P = never> = ScreenFC<P> & ScreenSFCStatic<P>;

export const withScreen = <P>(Component: ScreenFC<P>, statics: NavigationFCStatic): ScreenSFC<P> => {
  const { route } = statics;
  const staticProps = getStaticProps(Component);

  const SuperComponent: ScreenSFC<P> = (({ children, ...props }) => {
    return React.createElement(
      Component,
      props as any,
      children
    );
  }) as any;

  SuperComponent.route = route;
  SuperComponent.navigate = (props) => {
    if (navigationRef.isReady()) {
      (navigationRef.navigate as any)(route, props);
    }
  };

  staticProps.forEach(([key, value]) => {
    SuperComponent[key] = value;
  });

  return SuperComponent;
};

