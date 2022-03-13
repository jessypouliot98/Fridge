import {StyleProp, TextInput, TextStyle, View, ViewStyle} from "react-native";
import React from "react";
import {useTailwind} from "tailwind-rn/dist";
import {useInput} from "./hooks";

export type InputType = 'string' | 'password' | 'email';

export type InputProps = {
  type: InputType,
  styles?: {
    container?: StyleProp<ViewStyle>,
    input?: StyleProp<TextStyle>,
  },
  placeholder?: string,
  autoFocus?: boolean,
  onChange?: (value: string) => void,
}

const Input: React.FC<InputProps> = (props) => {
  const { styles } = props;

  const textInputProps = useInput(props);
  const tailwind = useTailwind();

  return (
    <View style={styles?.container}>
      <TextInput

      />
    </View>
  )
}

export default Input;
