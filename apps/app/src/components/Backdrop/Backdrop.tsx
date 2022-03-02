import React, {useEffect, useState} from "react";
import {Animated, GestureResponderEvent, TouchableWithoutFeedback, View} from "react-native";
import {useTailwind} from "tailwind-rn/dist";

export type BackdropProps = {
  onPress: (e: GestureResponderEvent) => void,
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  const {
    children,
    onPress: handleBackdropPress,
  } = props;

  const [isPressed, setIsPressed] = useState(false);
  const [animation] = useState(new Animated.Value(1));
  const tailwind = useTailwind();

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isPressed ? 0 : 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [isPressed]);

  const handlePreventPress = (e: GestureResponderEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <TouchableWithoutFeedback
      onPress={handleBackdropPress}
      onPressIn={() => setIsPressed(true)}
      onLongPress={() => setIsPressed(false)}
    >
      <Animated.View
        style={[
          tailwind('relative w-full h-full flex justify-center items-center'),
          {
            backgroundColor: animation.interpolate({
              inputRange: [0, 1],
              outputRange: ['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.7)'],
            }),
          },
        ]}>
        <TouchableWithoutFeedback onPress={handlePreventPress}>
          <View>
            {children}
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default Backdrop;
