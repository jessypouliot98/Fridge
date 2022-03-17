import {ModalFC, withModal} from "../utils";
import {Text} from "react-native";
import Backdrop from "../../components/Backdrop/Backdrop";
import ModalCard from "../../components/ModalCard/ModalCard";
import {Permissions} from "../../utils/permissions";
import React from 'react';
import {Calendar, DateData} from "react-native-calendars";

export type DatePickerModalProps = {
  defaultValue?: string,
  onSubmit: (v: string | null) => void,
}

const DatePickerModal: ModalFC<DatePickerModalProps> = ({ navigation, route }) => {
  const {
    defaultValue,
    onSubmit,
  } = route.params;

  const handleSubmit = (date?: DateData) => {
    onSubmit(date ? date.dateString : null);
    navigation.goBack();
  }

  return (
    <Backdrop onPress={() => navigation.goBack()}>
      <ModalCard>
        <Calendar
          current={defaultValue}
          onDayPress={handleSubmit}
        />
      </ModalCard>
    </Backdrop>
  )
}

export default withModal(DatePickerModal, {
  route: 'date-picker-modal',
  permissions: [Permissions.PUBLIC],
});
