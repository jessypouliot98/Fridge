import React from "react";
import {ModalFC, withModal} from "../utils";
import Backdrop from "../../components/Backdrop/Backdrop";
import AlertBox from "../../components/AlertBox/AlertBox";

const AlertModal: ModalFC = (props) => {
  const { navigation } = props;

  return (
    <Backdrop onPress={() => navigation.goBack()}>
      <AlertBox
        title={'Alert !'}
        description={'Lorem ipsum dolar sit amet'}
        onCancel={() => navigation.goBack()}
        onConfirm={() => navigation.goBack()}
      />
    </Backdrop>
  )
}

AlertModal.id = 'AlertModal';

export default withModal(AlertModal);
