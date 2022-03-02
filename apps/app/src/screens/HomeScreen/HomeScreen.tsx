import React from 'react';
import { View } from "react-native";
import {ScreenFC, withScreen} from "../utils";
import Button from "../../components/Button/Button";
import { RecipeScreen } from "../index";
import { AlertModal } from "../../modals";

const HomeScreen: ScreenFC = (props) => {
  const { navigation } = props;

  return (
    <View>
      <Button onPress={() => RecipeScreen.navigate()} type={'primary'}>
        Open Recipe
      </Button>
      <Button onPress={() => AlertModal.open()} type={'primary'}>
        Open Alert Modal
      </Button>
    </View>
  );
}

export default withScreen(HomeScreen, { route: 'HomeScreen' });
