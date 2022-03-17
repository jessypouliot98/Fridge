import {Pressable, StyleProp, Text, TextInput, TextStyle, View, ViewStyle} from "react-native";
import React from "react";
import {useInputDate} from "./hooks";
import DatePickerModal from "../../../modals/DatePickerModal/DatePickerModal";
import {useTailwind} from "tailwind-rn/dist";

export type InputDateType = 'date';

export type InputDateProps = {
  type: InputDateType,
  styles?: {
    container?: StyleProp<ViewStyle>,
    input?: StyleProp<TextStyle>,
  },
  defaultValue?: string,
  value?: string,
  placeholder?: string,
  autoFocus?: boolean,
  onChange?: (value: string) => void,
}

const InputDate: React.FC<InputDateProps> = (props) => {
  const {
    containerStyle,
    inputStyle,
    displayValue,
    placeholder,
    handleOpenPicker,
  } = useInputDate(props);
  const tailwind = useTailwind();

  return (
    <Pressable style={containerStyle} onPress={handleOpenPicker}>
      <View style={[inputStyle, tailwind('flex items-center')]}>
        <Text style={tailwind('w-full')}>
          {displayValue || placeholder}
        </Text>
      </View>
    </Pressable>
  )
}

export default InputDate;
