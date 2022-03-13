import React from "react";
import {StyleProp, View, ViewStyle} from "react-native";

export type InstructionListProps = {
  style?: StyleProp<ViewStyle>,
}

const InstructionList: React.FC<InstructionListProps> = (props) => {
  const { children, style } = props;

  return (
    <View style={style}>
      {children}
    </View>
  );
}

export default InstructionList;
