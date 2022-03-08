import {ModalFC, withModal} from "../utils";
import Backdrop from "../../components/Backdrop/Backdrop";
import React from "react";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import ModalCard from "../../components/ModalCard/ModalCard";
import {Ingredient} from "@fridge/fridge";
import {Permissions} from "../../utils/permissions";
import {Tab} from "../../navigation/tabs";

export type IngredientDetailsModalProps = {
  ingredient: Ingredient
}

const IngredientDetailsModal: ModalFC<IngredientDetailsModalProps> = ({ navigation, route }) => {
  const { ingredient } = route.params;

  const tailwind = useTailwind();

  return (
    <Backdrop onPress={() => navigation.goBack()}>
      <ModalCard style={tailwind('w-80')}>

        <View>
          <Text>{ingredient.name}</Text>
        </View>

        <View>
          <Text>{ingredient.description}</Text>
        </View>

      </ModalCard>
    </Backdrop>
  )
}

export default withModal(IngredientDetailsModal, {
  route: 'IngredientDetailsModal',
  permissions: [Permissions.PUBLIC],
});
