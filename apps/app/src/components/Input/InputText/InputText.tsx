import {StyleProp, TextInput, TextStyle, View, ViewStyle} from "react-native";
import React from "react";
import {useInputText} from "./hooks";

export type InputTextType = 'string' | 'password' | 'email';

export type InputTextProps = {
  type: InputTextType,
  styles?: {
    container?: StyleProp<ViewStyle>,
    input?: StyleProp<TextStyle>,
  },
  defaultValue?: string,
  value?: string,
  placeholder?: string,
  disabled?: boolean,
  autoFocus?: boolean,
  onChange?: (value: string) => void,
}

const InputText: React.FC<InputTextProps> = (props) => {
  const {
    containerStyle,
    inputStyle,
    ...textInputProps
  } = useInputText(props);

  return (
    <View style={containerStyle}>
      <TextInput style={inputStyle} {...textInputProps} />
    </View>
  )
}

export default InputText;
