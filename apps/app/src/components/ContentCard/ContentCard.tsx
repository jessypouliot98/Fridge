import React from "react";
import {StyleProp, View, ViewStyle} from "react-native";
import {useTailwind} from "tailwind-rn/dist";

export type ContentCardProps = {
  style?: StyleProp<ViewStyle>,
}

const ContentCard: React.FC<ContentCardProps> = (props) => {
  const { children, style } = props;

  const tailwind = useTailwind();

  return (
    <View style={[tailwind('bg-white p-4 rounded-lg'), { elevation: 5 }, style]}>
      {children}
    </View>
  )
};

export default ContentCard;
