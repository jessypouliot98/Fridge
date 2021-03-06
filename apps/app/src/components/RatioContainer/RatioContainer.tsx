import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";

export type RatioType = [number, number];
export type RatioContainerProps = {
  ratio: RatioType,
  style?: StyleProp<ViewStyle>,
}

export const getRatio = ([x,y]: RatioType) => {
  return y / x;
}

const RatioContainer: React.FC<RatioContainerProps> = (props) => {
  const { children, ratio: ratioRaw, style } = props;
  const ratio = getRatio(ratioRaw);

  return (
    <View style={[{ position: 'relative', height: 0, paddingBottom: `${ratio * 100}%` }, style]}>
      <View style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}>
        {children}
      </View>
    </View>
  )
}

export default RatioContainer;
