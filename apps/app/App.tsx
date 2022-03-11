import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import Navigation  from "./src/navigation/Navigation";
import {Provider} from "react-redux";
import store from "./src/store";
import {getTailwindUtilities} from "./src/utils/tailwind";
import {IconProvider} from "./src/components/Icon/IconContext";
import {icons} from "./src/utils/icons";

const App = () => {
  return (
    <Provider store={store}>
      <IconProvider icons={icons}>
        <TailwindProvider utilities={getTailwindUtilities()}>
          <Navigation />
        </TailwindProvider>
      </IconProvider>
    </Provider>
  );
};

export default App;
