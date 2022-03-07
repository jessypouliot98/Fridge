import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "../utils/navigation";
import ModalStack from "./ModalStack";
import TabStack from "./TabStack";

const Root = createNativeStackNavigator();

const Navigation: React.FC = () => {
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
