import { ScreenFC, withScreen } from "../utils";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import { signIn } from "../../store/account/actions";
import React, { useState } from 'react';
import { Permissions } from "../../utils/permissions";
import ContentCard from "../../components/ContentCard/ContentCard";
import { useTailwind } from "tailwind-rn/dist";
import Input from "../../components/Input/Input";
import SettingTab from "../../tabs/SettingTab/SettingTab";

const SignInScreen: ScreenFC = () => {
  const dispatch = useDispatch();
  const tailwind = useTailwind();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={tailwind('p-4 flex justify-center items-center w-full h-full bg-gray-900')}>
      <View style={tailwind('w-full')}>
        <ContentCard style={tailwind('w-full')}>
          <View style={tailwind('mb-4 flex')}>
            <Text style={tailwind('font-bold text-center text-lg')}>Sign in</Text>
          </View>

          <Input
            type={'email'}
            styles={{ container: tailwind('mb-2 border border-gray-100') }}
            placeholder={'email'}
            autoFocus={true}
            onChange={(v) => setEmail(v)}
          />

          <Input
            type={'password'}
            styles={{ container: tailwind('mb-2 border border-gray-100') }}
            placeholder={'password'}
            onChange={(v) => setPassword(v)}
          />

          <Button style={tailwind('mt-4')} onPress={() => dispatch(signIn({ email, password }))}>
            Sign in
          </Button>
        </ContentCard>

        <View style={tailwind('p-4 flex flex items-end')}>
          <Pressable onPress={() => console.log('I forgot my password 🤷‍♂️')}>
            <Text style={tailwind('text-blue-400')}>Forgot password</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default withScreen(SignInScreen, {
  route: 'SignInScreen',
  permissions: [Permissions.GUEST],
  tab: SettingTab,
  title: () => 'Sign In',
  options: {

  }
});
