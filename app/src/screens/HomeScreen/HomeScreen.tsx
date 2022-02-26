import React from 'react';
import {View, Text} from "react-native";
import { ScreenFC } from "../types";
import {RatioContainer} from "../../components/RatioContainer/RatioContainer";

const HomeScreen: ScreenFC = () => {
  return (
    <View>
      <RatioContainer ratio={[16,9]}>
        <Text>Hello world</Text>
      </RatioContainer>
    </View>
  );
}

HomeScreen.id = 'HomeScreen';

export default HomeScreen;
