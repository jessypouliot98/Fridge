import React from "react";
import {StyleProp, View, ViewStyle} from "react-native";

export type PreperationListProps = {
  style?: StyleProp<ViewStyle>,
}

const PreperationList: React.FC<PreperationListProps> = (props) => {
  const { children, style } = props;

  return (
    <View style={style}>
      {children}
    </View>
  );
}

export default PreperationList;
