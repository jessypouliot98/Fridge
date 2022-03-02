import React from "react";
import {StyleProp, Text, TouchableWithoutFeedback, View, ViewStyle} from "react-native";
import {useTailwind} from "tailwind-rn/dist";
import CheckBox from "../CheckBox/CheckBox";
import {IngredientDetailsModal} from "../../modals";

type IngredientListItemProps = {
  style?: StyleProp<ViewStyle>,
}

const IngredientListItem: React.FC<IngredientListItemProps> = (props) => {
  const { style } = props;
  const tailwind = useTailwind();

  const ingredient = {
    qty: '12oz of',
    name: 'Mashed potatos',
  }

  const openIngredientDetails = () => {
    IngredientDetailsModal.open({ ingredient });
  };

  const getIngredientText = () => (
    <Text>
      <Text>{`${ingredient.qty} `}</Text>
      <TouchableWithoutFeedback onPress={openIngredientDetails}>
        <Text style={tailwind('text-blue-500 border bg-red-100')}>
          {ingredient.name}
        </Text>
      </TouchableWithoutFeedback>
    </Text>
  )

  return (
    <View style={[tailwind('w-full bg-white p-4 flex flex-row'), style]}>
      <View style={tailwind('flex-1')}>
        {getIngredientText()}
      </View>
      <View style={tailwind('')}>
        <CheckBox />
      </View>
    </View>
  );
}

export default IngredientListItem;
