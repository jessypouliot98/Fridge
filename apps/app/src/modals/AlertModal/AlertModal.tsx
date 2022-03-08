import React from "react";
import {ModalFC, withModal} from "../utils";
import Backdrop from "../../components/Backdrop/Backdrop";
import AlertBox from "../../components/AlertBox/AlertBox";
import {Permissions} from "../../utils/permissions";
import {Tab} from "../../navigation/tabs";

type AlertModalProps = {
  title: string,
  description: string,
  cancelText?: string,
  confirmText?: string,
  onCancel?: () => (void | Promise<void>),
  onConfirm?: () => (void | Promise<void>),
}

const AlertModal: ModalFC<AlertModalProps> = ({ navigation, route }) => {
  const {
    title,
    description,
    cancelText,
    confirmText,
    onCancel,
    onConfirm,
  } = route.params;

  return (
    <Backdrop onPress={() => navigation.goBack()}>
      <AlertBox
        title={title}
        description={description}
        cancelText={cancelText}
        confirmText={confirmText}
        onCancel={async () => {
          navigation.goBack();
          onCancel && await onCancel()
        }}
        onConfirm={async () => {
          navigation.goBack()
          onConfirm && await onConfirm();
        }}
      />
    </Backdrop>
  )
}

export default withModal(AlertModal, {
  route: 'AlertModal',
  permissions: [Permissions.PUBLIC],
});
