import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';


const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaView>
        <StatusBar barStyle={'light-content'} />
        <Text>Hello world</Text>
      </SafeAreaView>
    </TailwindProvider>
  );
};

export default App;
