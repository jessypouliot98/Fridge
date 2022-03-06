import React from "react";
import {StyleProp, Text, TouchableWithoutFeedback, View, ViewStyle} from "react-native";
import {useTailwind} from "tailwind-rn/dist";
import CheckBox from "../CheckBox/CheckBox";
import {IngredientDetailsModal} from "../../modals";
import {PortionnedIngredient} from "@fridge/fridge";

type IngredientListItemProps = {
  style?: StyleProp<ViewStyle>,
  ingredient: PortionnedIngredient,
}

const IngredientListItem: React.FC<IngredientListItemProps> = (props) => {
  const { style, ingredient } = props;

  const tailwind = useTailwind();

  const openIngredientDetails = () => {
    IngredientDetailsModal.open({ ingredient: ingredient.ingredient });
  };

  return (
    <View style={[tailwind('w-full bg-white p-4 flex flex-row'), style]}>
      <View style={tailwind('flex-1')}>
        <Text>
          <TouchableWithoutFeedback onPress={openIngredientDetails}>
            <Text style={tailwind('text-blue-500 border bg-red-100')}>
              {ingredient.toText()}
            </Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
      <View style={tailwind('')}>
        <CheckBox />
      </View>
    </View>
  );
}

export default IngredientListItem;
