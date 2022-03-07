import React from "react";
import {GestureResponderEvent, StyleProp, Text, View, ViewStyle} from "react-native";
import {useTailwind} from "tailwind-rn/dist";
import Button from "../Button/Button";
import ModalCard from "../ModalCard/ModalCard";

type AlertBoxProps = {
  style?: StyleProp<ViewStyle>
  title: string,
  description: string,
  cancelText?: string,
  confirmText?: string,
  onCancel: (e: GestureResponderEvent) => void,
  onConfirm: (e: GestureResponderEvent) => void,
}

const AlertBox: React.FC<AlertBoxProps> = (props) => {
  const {
    style,
    title,
    description,
    cancelText = 'Cancel',
    confirmText = 'Confirm',
    onCancel,
    onConfirm,
  } = props;

  const tailwind = useTailwind();

  return (
    <ModalCard style={[tailwind('w-64'), style]}>
      <View style={tailwind('pb-2 border-b border-gray-100')}>
        <Text style={tailwind('text-center font-bold text-xl')}>{title}</Text>
      </View>

      <View style={tailwind('pt-4 pb-6')}>
        <Text>{description}</Text>
      </View>

      <View>
        <View style={tailwind('-m-1')}>
          <View style={tailwind('p-1')}>
            <Button onPress={onConfirm} type={'primary'}>
              {confirmText}
            </Button>
          </View>

          <View style={tailwind('p-1')}>
            <Button onPress={onCancel} type={'outline-gray'}>
              {cancelText}
            </Button>
          </View>
        </View>
      </View>
    </ModalCard>
  )
}

export default AlertBox;
