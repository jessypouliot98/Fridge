import React from "react";
import { Text, View } from "react-native";
import {useTailwind} from "tailwind-rn/dist";

const IngredientListItem: React.FC = () => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('w-full bg-gray-100')}>
      <Text style={tailwind('text-blue-600')}>Hello world</Text>
    </View>
  );
}

export default IngredientListItem;
