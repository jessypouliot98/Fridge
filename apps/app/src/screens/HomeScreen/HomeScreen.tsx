import React from 'react';
import { View } from "react-native";
import {ScreenFC, withScreen} from "../utils";
import Button from "../../components/Button/Button";
import { RecipeScreen } from "../index";
import { AlertModal } from "../../modals";
import RecipeList from "../../components/RecipeList/RecipeList";

const HomeScreen: ScreenFC = ({ navigation }) => {
  return (
    <View>
      <RecipeList />
    </View>
  );
}

export default withScreen(HomeScreen, { route: 'HomeScreen' });
