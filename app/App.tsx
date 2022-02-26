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
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>

        <Stack.Navigator
          initialRouteName={HomeScreen.id}
        >
          {Object.values(screens as Record<string, ScreenFC>).map((Screen) => {
            return (
              <Stack.Screen key={Screen.id} name={Screen.id} component={Screen as any} />
            )
          })}
        </Stack.Navigator>

      </NavigationContainer>
    </TailwindProvider>
  );
};

export default App;
