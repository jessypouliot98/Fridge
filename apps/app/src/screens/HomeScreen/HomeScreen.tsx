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
      <Button onPress={() => navigation.navigate(RecipeScreen.id)} type={'primary'}>
        Open Recipe
      </Button>
      <Button onPress={() => navigation.navigate(AlertModal.id)} type={'primary'}>
        Open Alert Modal
      </Button>
    </View>
  );
}

HomeScreen.id = 'HomeScreen';

export default withScreen(HomeScreen);
