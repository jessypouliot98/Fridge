import React from 'react';
import {NavigationContainerRef} from "@react-navigation/native";

type ScreenProps = {
  navigation: NavigationContainerRef<any>,
}

export type ScreenFC<T extends {} = {}> = React.FC<ScreenProps & T> & { id: string };
