import React, {useEffect, useState} from "react";
import {Text, TouchableWithoutFeedback, View} from "react-native";
import {useTailwind} from "tailwind-rn/dist";
import clsx from "clsx";

export type CheckBoxProps = {
  defaultValue?: boolean,
  onChange?: (state: boolean) => void,
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const {
    defaultValue = false,
    onChange,
  } = props;

  const tailwind = useTailwind();
  const [isChecked, setIsChecked] = useState<boolean>(defaultValue);

  useEffect(() => {
    onChange && onChange(isChecked);
  }, [isChecked]);

  const handleCheck = () => {
    setIsChecked(prevState => !prevState);
  }

  return (
    <TouchableWithoutFeedback onPress={handleCheck}>
      <View style={tailwind('p-2 -m-2')}>
        <View style={tailwind('rounded-full border border-gray-200 bg-white w-6 h-6')}>
          <Text style={tailwind(clsx('text-center', isChecked ? 'text-green-500' : 'text-red-500'))}>{isChecked ? 'X' : 'O'}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CheckBox;
