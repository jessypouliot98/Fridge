import { TextInputProps } from "react-native";
import type { InputProps } from "./Input";
import {useTailwind} from "tailwind-rn/dist";


export const useInput = (props: InputProps): TextInputProps => {
  const {
    type,
    styles,
    placeholder,
    autoFocus,
    onChange
  } = props;

  const tailwind = useTailwind();

  return {
    style: [tailwind('h-12 px-2'), styles?.input],
    placeholder: placeholder,
    secureTextEntry: type === 'password',
    autoFocus: autoFocus,
    onChangeText: onChange,
  }
}
