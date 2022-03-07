import {ScreenFC, withScreen} from "../utils";
import {View, Text} from "react-native";
import {Permissions} from "../../utils/permissions";
import React from 'react';

const SignUpScreen: ScreenFC = () => {
  return (
    <View>
      <Text>SignInScreen</Text>
    </View>
  );
}

export default withScreen(SignUpScreen, {
  route: 'SignUpScreen',
  permissions: [Permissions.GUEST],
});
