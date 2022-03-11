import React from "react";
import {View, Text} from "react-native";
import {OnboardingPageFC} from "./types";
import Button from "../../../components/Button/Button";

const Page3: OnboardingPageFC = ({ handleClose }) => {
  return (
    <View>
      <Text>Dolar</Text>
      <Button onPress={handleClose}>
        Let's go
      </Button>
    </View>
  )
}

export default Page3;
