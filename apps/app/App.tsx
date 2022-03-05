import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as screens from './src/screens';
import * as modals from './src/modals';
import { navigationRef } from "./src/navigation/navigation";
import {Provider} from "react-redux";
import store from "./src/store";
import {ScreenSFC} from "./src/screens/utils";
import {ModalSFC} from "./src/modals/utils";

const { HomeScreen } = screens;
const Stack = createNativeStackNavigator();

const App = () => {
  const getStackScreens = () => {
    return (
      <Stack.Group screenOptions={{ presentation: 'transparentModal' }}>
        {Object.values(screens as Record<string, ScreenSFC>).map((Screen) => (
          <Stack.Screen
            key={Screen.route}
            name={Screen.route}
            component={Screen}
          />
        ))}
      </Stack.Group>
    );
  }

  const getStackModals = () => {
    return (
      <Stack.Group
        screenOptions={{
          presentation: 'transparentModal',
          headerShown: false,
          statusBarStyle: 'dark',
        }}
      >
        {Object.values(modals as Record<string, ModalSFC>).map((Modal) => (
          <Stack.Screen
            key={Modal.route}
            name={Modal.route}
            component={Modal}
          />
        ))}
      </Stack.Group>
    );
  }

  return (
    <Provider store={store}>
      <TailwindProvider utilities={utilities}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName={HomeScreen.route}
          >
            {getStackModals()}
            {getStackScreens()}
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </Provider>
  );
};

export default App;
