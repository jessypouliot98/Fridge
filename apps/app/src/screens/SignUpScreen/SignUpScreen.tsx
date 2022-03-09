import {ScreenFC, withScreen} from "../utils";
import {View, Text, Pressable} from "react-native";
import {Permissions} from "../../utils/permissions";
import React, {useState} from 'react';
import {Tab} from "../../navigation/tabs";
import {useDispatch} from "react-redux";
import {useTailwind} from "tailwind-rn/dist";
import ContentCard from "../../components/ContentCard/ContentCard";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { signUp } from "../../store/account/actions";

const SignUpScreen: ScreenFC = () => {
  const dispatch = useDispatch();
  const tailwind = useTailwind();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={tailwind('p-4 flex justify-center items-center w-full h-full bg-gray-900')}>
      <View style={tailwind('w-full')}>
        <ContentCard style={tailwind('w-full')}>
          <View style={tailwind('mb-4 flex')}>
            <Text style={tailwind('font-bold text-center text-lg')}>Sign up</Text>
          </View>

          <Input
            type={'string'}
            styles={{ container: tailwind('mb-2 border border-gray-100') }}
            placeholder={'full name'}
            autoFocus={true}
            onChange={(v) => setName(v)}
          />

          <Input
            type={'email'}
            styles={{ container: tailwind('mb-2 border border-gray-100') }}
            placeholder={'email'}
            onChange={(v) => setEmail(v)}
          />

          <Input
            type={'password'}
            styles={{ container: tailwind('mb-2 border border-gray-100') }}
            placeholder={'password'}
            onChange={(v) => setPassword(v)}
          />

          <Button style={tailwind('mt-4')} onPress={() => dispatch(signUp({ name, email, password }))}>
            Sign in
          </Button>
        </ContentCard>
      </View>
    </View>
  );
}

export default withScreen(SignUpScreen, {
  route: 'SignUpScreen',
  permissions: [Permissions.GUEST],
  tab: Tab.SETTING,
  title: () => 'Sign Up'
});
