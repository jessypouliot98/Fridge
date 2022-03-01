import React from "react";
import {useTailwind} from "tailwind-rn/dist";
import {StyleProp, View, ViewStyle} from "react-native";

export type ModalCardProps = {
  style?: StyleProp<ViewStyle>,
}

const ModalCard: React.FC<ModalCardProps> = (props) => {
  const { children, style } = props;

  const tailwind = useTailwind();

  return (
    <View style={[tailwind('bg-white rounded-lg px-4 py-4'), style]}>
      {children}
    </View>
  )
}

export default ModalCard;
