import { ScreenFC, withScreen } from "../utils";
import { Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import { signIn } from "../../store/account/actions";
import React, { useState } from 'react';
import { Permissions } from "../../utils/permissions";
import { Tab } from "../../navigation/tabs";

const SignInScreen: ScreenFC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>SignInScreen</Text>

      <TextInput onChangeText={(v) => setEmail(v)} placeholder={'email'} />
      <TextInput secureTextEntry={true} onChangeText={(v) => setPassword(v)} placeholder={'password'} />

      <Button onPress={() => dispatch(signIn({ email, password }))}>
        Sign in
      </Button>
    </View>
  );
}

export default withScreen(SignInScreen, {
  route: 'SignInScreen',
  permissions: [Permissions.GUEST],
  tab: Tab.SETTING,
  title: () => 'Sign In',
});
