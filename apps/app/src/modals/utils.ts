import React from "react";
import {getStaticProps, NavigationFC, NavigationFCStatic, navigationRef, RouteProps} from "../utils/navigation";

export type ModalFC<P = never> = NavigationFC<P>;

export type ModalOpenFunction<P = never> = (props?: RouteProps<P>) => void;
export type ModalCloseFunction = () => void;

export type ModalSFCStatic<P = never> = NavigationFCStatic & {
  open: ModalOpenFunction<P>;
  close: ModalCloseFunction;
};

export type ModalSFC<P = never> = ModalFC<P> & ModalSFCStatic<P>;

export const withModal = <P>(Component: ModalFC<P>, statics: NavigationFCStatic): ModalSFC<P> => {
  const { route, permissions } = statics;
  const staticProps = getStaticProps(Component);

  const SuperComponent: ModalSFC<P> = (({ children, ...props }) => {
    return React.createElement(
      Component,
      props as any,
      children
    );
  }) as any;

  SuperComponent.route = route;
  SuperComponent.permissions = permissions;
  SuperComponent.open = (props) => {
    if (navigationRef.isReady()) {
      (navigationRef.navigate as any)('ModalStack', {
        screen: route,
        params: props,
      });
    }
  };
  SuperComponent.close = () => {
    if (navigationRef.isReady()) {
      navigationRef.goBack();
    }
  };

  staticProps.forEach(([key, value]) => {
    SuperComponent[key] = value;
  });

  return SuperComponent;
};

