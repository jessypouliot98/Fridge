import {ScreenFC, withScreen} from "../utils";
import {Text, View} from "react-native";
import {useDispatch} from "react-redux";
import Button from "../../components/Button/Button";
import { signIn } from "../../store/account/actions";
import React from 'react';
import { Permissions } from "../../utils/permissions";
import {Tab} from "../../navigation/tabs";

const SignInScreen: ScreenFC = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>SignInScreen</Text>
      <Button onPress={() => dispatch(signIn())}>
        Sign in
      </Button>
    </View>
  );
}

export default withScreen(SignInScreen, {
  route: 'SignInScreen',
  permissions: [Permissions.GUEST],
  tab: Tab.SETTING,
});
