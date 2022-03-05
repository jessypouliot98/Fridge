import {ModalFC, withModal} from "../utils";
import Backdrop from "../../components/Backdrop/Backdrop";
import React from "react";
import { Text, View } from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import ModalCard from "../../components/ModalCard/ModalCard";

export type IngredientDetailsModalProps = {
  ingredient: {
    name: string,
  }
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
          <Text>Lorem ipsum dolar sit amet. Lorem ipsum dolar sit amet. Lorem ipsum dolar sit amet. Lorem ipsum dolar sit amet. Lorem ipsum dolar sit amet. </Text>
        </View>

      </ModalCard>
    </Backdrop>
  )
}

export default withModal(IngredientDetailsModal, { route: 'IngredientDetailsModal' });
