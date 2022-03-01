import React from "react";
import {GestureResponderEvent, TouchableWithoutFeedback, View} from "react-native";
import {useTailwind} from "tailwind-rn/dist";

export type BackdropProps = {
  color?: string,
  onPress: (e: GestureResponderEvent) => void,
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  const {
    children,
    color: backgroundColor = 'rgba(0, 0, 0, 0.3)',
    onPress: handleBackdropPress,
  } = props;

  const tailwind = useTailwind();

  const handlePreventPress = (e: GestureResponderEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <TouchableWithoutFeedback onPress={handleBackdropPress}>
      <View style={[tailwind('relative w-full h-full flex justify-center items-center'), { backgroundColor }]}>
        <TouchableWithoutFeedback onPress={handlePreventPress}>
          <View>
            {children}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Backdrop;
