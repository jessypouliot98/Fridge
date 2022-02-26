import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as screens from './src/screens';
import { ScreenFC } from "./src/screens/types";

const { HomeScreen } = screens;
const Stack = createNativeStackNavigator();

const App = () => {
  const getStackNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName={HomeScreen.id}
      >
        {Object.values(screens as Record<string, ScreenFC>).map((Screen) => (
          <Stack.Screen
            key={Screen.id}
            name={Screen.id}
          >
            {(props) => (
              <TailwindProvider utilities={utilities}>
                <Screen {...props} />
              </TailwindProvider>
            )}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {getStackNavigator()}
    </NavigationContainer>
  );
};

export default App;
