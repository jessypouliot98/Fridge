import React from 'react';
import { View } from "react-native";
import { ScreenFC } from "../types";
import Button from "../../components/Button/Button";
import { RecipeScreen } from "../index";

const HomeScreen: ScreenFC = (props) => {
  const { navigation } = props;

  return (
    <View>
      <Button onPress={() => navigation.navigate(RecipeScreen.id)}>
        Open Recipe
      </Button>
    </View>
  );
}

HomeScreen.id = 'HomeScreen';

export default HomeScreen;
