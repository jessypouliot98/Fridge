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
      <View style={tailwind('p-3 -m-3')}>
        <View style={tailwind('rounded-full border border-gray-200 bg-white w-6 h-6')}>
          {isChecked && (
            <View style={tailwind('rounded-full w-full h-full bg-red-700')} />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CheckBox;
