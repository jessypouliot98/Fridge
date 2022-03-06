import React from "react";
import { View } from "react-native";
import {useTailwind} from "tailwind-rn/dist";

const ContentCard: React.FC = (props) => {
  const { children } = props;

  const tailwind = useTailwind();

  return (
    <View style={[tailwind('bg-white p-2 rounded-lg')]}>
      {children}
    </View>
  )
};

export default ContentCard;
