import React, {useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "../utils/navigation";
import ModalStack from "./ModalStack";
import TabStack from "./TabStack";
import {BackHandler} from "react-native";
import {DebugModal} from "../modals";

const Root = createNativeStackNavigator();

const handleBackPress = (): boolean => {
  if (__DEV__ && !navigationRef.canGoBack()) {
    DebugModal.open();

    return true;
  }

  return false;
}

const Navigation: React.FC = () => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Root.Navigator
        initialRouteName={'ScreenStack'}
        screenOptions={{
          presentation: 'transparentModal'
        }}
      >
        <Root.Screen
          name={'ScreenStack'}
          options={{
            headerShown: false,
          }}
          component={TabStack}
        />
        <Root.Screen
          name={'ModalStack'}
          options={{
            headerShown: false,
            animation: 'fade',
          }}
          component={ModalStack}
        />
      </Root.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
