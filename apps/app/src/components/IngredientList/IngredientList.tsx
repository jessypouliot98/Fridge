import React from "react";
import {StyleProp, View, ViewStyle} from "react-native";

export type IngredientListProps = {
  style?: StyleProp<ViewStyle>,
}

const IngredientList: React.FC<IngredientListProps> = (props) => {
  const { children, style } = props;

  return (
    <View style={style}>
      {children}
    </View>
  );
}

export default IngredientList;
