import React from "react";
import {View} from "react-native";

const IngredientList: React.FC = (props) => {
  const { children } = props;

  return (
    <View>
      {children}
    </View>
  );
}

export default IngredientList;
