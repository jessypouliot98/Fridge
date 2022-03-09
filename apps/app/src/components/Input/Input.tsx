import {StyleProp, TextInput, TextStyle, View, ViewStyle} from "react-native";
import React from "react";

export type InputType = 'string' | 'password' | 'email';

export type InputProps = {
  type: InputType,
  styles?: {
    container: StyleProp<ViewStyle>,
    input: StyleProp<TextStyle>,
  },
  placeholder?: string,
  autoFocus?: boolean,
  onChange?: (value: string) => void,
}

const Input: React.FC<InputProps> = (props) => {
  const {
    type,
    styles,
    placeholder,
    autoFocus,
    onChange,
  } = props;

  return (
    <View style={styles?.container}>
      <TextInput
        style={styles?.input}
        placeholder={placeholder}
        secureTextEntry={type === 'password'}
        autoFocus={autoFocus}
        onChangeText={onChange}
      />
    </View>
  )
}

export default Input;
