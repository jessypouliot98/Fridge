import { TextInputProps } from "react-native";
import type { InputTextProps } from "./InputText";
import {useTailwind} from "tailwind-rn/dist";
import {useInputStyle} from "../hooks";


export const useInputText = (props: InputTextProps) => {
  const {
    type,
    styles,
    defaultValue,
    value,
    placeholder,
    disabled,
    autoFocus,
    onChange
  } = props;

  const { containerStyle, inputStyle } = useInputStyle();

  return {
    containerStyle: [containerStyle, styles?.container],
    inputStyle: [inputStyle, styles?.input],
    defaultValue,
    value,
    placeholder: placeholder,
    editable: disabled,
    secureTextEntry: type === 'password',
    autoFocus: autoFocus,
    onChangeText: onChange,
  }
}
