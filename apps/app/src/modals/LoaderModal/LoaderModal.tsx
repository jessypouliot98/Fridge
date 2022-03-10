import React from 'react';
import { ModalFC, withModal } from "../utils";
import { useTailwind } from "tailwind-rn/dist";
import { ActivityIndicator, View } from "react-native";
import {Permissions} from "../../utils/permissions";

const LoaderModal: ModalFC = ({ route }) => {
  route.params
  const tailwind = useTailwind();

  return (
    <View style={[tailwind('w-full h-full flex justify-center items-center'), { backgroundColor: 'rgba(0, 0, 0, 0.7)'}]}>
      <ActivityIndicator size={'large'} />
    </View>
  )
}

export default withModal(LoaderModal, {
  route: 'LoaderModal',
  permissions: [Permissions.PUBLIC],
});
