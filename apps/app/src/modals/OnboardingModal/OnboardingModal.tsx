import React from 'react';
import { ModalFC, withModal } from "../utils";
import { useTailwind } from "tailwind-rn/dist";
import { View } from "react-native";
import { Permissions } from "../../utils/permissions";

const OnboardingModal: ModalFC = () => {
  const tailwind = useTailwind();

  return (
    <View>

    </View>
  )
}

export default withModal(OnboardingModal, {
  route: 'OnboardingModal',
  permissions: [Permissions.PUBLIC],
  options: {
    presentation: 'fullScreenModal',
  }
});
