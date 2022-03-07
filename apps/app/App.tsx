import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import Navigation  from "./src/navigation/Navigation";
import {Provider} from "react-redux";
import store from "./src/store";
import {getTailwindUtilities} from "./src/utils/tailwind";

const App = () => {
  return (
    <Provider store={store}>
      <TailwindProvider utilities={getTailwindUtilities()}>
        <Navigation />
      </TailwindProvider>
    </Provider>
  );
};

export default App;
