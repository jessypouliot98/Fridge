import { getStaticProps, NavigationFC, navigationRef } from "../utils/navigation";
import React from "react";

export type ModalFC<P extends {} = {}> = NavigationFC<P>;

export type modalShowFunction<P> = (props: P) => void;
export type modalHideFunction = () => void;

export type ModalSFCStatic<P extends {} = {}> = {
  show: modalShowFunction<P>;
  hide: modalHideFunction;
};

export type ModalSFC<P> = ModalFC<P> & ModalSFCStatic<P>;

export const withModal = <P = any>(Component: ModalFC<P>): ModalSFC<P> => {
  const staticProps = getStaticProps(Component);

  const SuperComponent: ModalSFC<P> = ({ children, ...props }) => {
    return React.createElement(
      Component,
      props as any,
      children
    );
  }

  SuperComponent.id = Component.id;
  SuperComponent.show = (props) => {
    if (navigationRef.isReady()) {
      (navigationRef.navigate as any)(Component.id, props);
    }
  };
  SuperComponent.hide = () => {
    if (navigationRef.isReady()) {
      navigationRef.goBack();
    }
  };

  staticProps.forEach(([key, value]) => {
    SuperComponent[key] = value;
  });

  return SuperComponent;
};

