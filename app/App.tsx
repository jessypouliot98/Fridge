import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as screens from './src/screens';
import * as modals from './src/modals';
import { navigationRef } from "./src/utils/navigation";

const { HomeScreen } = screens;
const Stack = createNativeStackNavigator();

const App = () => {
  const getStackScreens = () => {
    return (
      <Stack.Group screenOptions={{ presentation: 'transparentModal' }}>
        {Object.values(screens).map((Screen) => (
          <Stack.Screen
            key={Screen.id}
            name={Screen.id}
          >
            {(props) => (
              <Screen {...props} {...(props.route.params as any || {})}/>
            )}
          </Stack.Screen>
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
        {Object.values(modals).map((Modal) => (
          <Stack.Screen
            key={Modal.id}
            name={Modal.id}
          >
            {(props) => (
              <Modal {...props} {...(props.route.params as any || {})}/>
            )}
          </Stack.Screen>
        ))}
      </Stack.Group>
    );
  }

  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={HomeScreen.id}
        >
          {getStackModals()}
          {getStackScreens()}
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default App;
