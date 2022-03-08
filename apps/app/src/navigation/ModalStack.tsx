import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as modals from "../modals";
import {ModalSFC} from "../modals/utils";
import {filterNavigationComponent, getScreenOptions} from "../utils/navigation";
import React from "react";
import {useRootSelector} from "../hooks";
import {selectIsLoggedIn} from "../store/account/selectors";

const Stack = createNativeStackNavigator();

const ModalStack = () => {
  const isLoggedIn = useRootSelector(selectIsLoggedIn());

  return (
    <Stack.Navigator>
      <Stack.Group
        screenOptions={{
          contentStyle: {
            backgroundColor: 'transparent',
          },
          headerShown: false,
          animation: 'fade',
        }}
      >
        {Object.values(modals as Record<string, ModalSFC>)
          .filter(filterNavigationComponent({ isLoggedIn }))
          .map((Modal) => (
            <Stack.Screen
              key={Modal.route}
              name={Modal.route}
              options={getScreenOptions(Modal)}
              component={Modal}
            />
          ))}
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default ModalStack;
