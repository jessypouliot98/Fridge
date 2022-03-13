import React from "react";
import { StyleProp, Text, TouchableWithoutFeedback, View, ViewStyle } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import CheckBox from "../CheckBox/CheckBox";

type InstructionListItemProps = {
  style?: StyleProp<ViewStyle>,
}

const InstructionListItem: React.FC<InstructionListItemProps> = (props) => {
  const { style } = props;

  const tailwind = useTailwind();

  return (
    <View style={[tailwind('w-full bg-white px-2 py-4 flex flex-row'), style]}>
      <View style={tailwind('flex justify-center items-center mr-4')}>
        <View style={tailwind('bg-red-700 w-2 h-2 rounded-full')} />
      </View>

      <View style={tailwind('flex flex-1 justify-center')}>
        <Text>Step 1</Text>
      </View>

      <View style={tailwind('')}>
        <CheckBox />
      </View>
    </View>
  );
}

export default InstructionListItem;
