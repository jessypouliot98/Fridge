import React from "react";
import {StyleProp, View, ViewStyle} from "react-native";
import {useIcon} from "./hooks";

export type IconProps<N = string> = {
  style?: StyleProp<ViewStyle>,
  name: N,
}

const Icon: React.FC<IconProps> = (props) => {
  const { style, name } = props;

  const icon = useIcon(name);

  if (!icon) {
    return null;
  }

  return (
    <View style={style}>
      {icon}
    </View>
  );
}

export default Icon;
