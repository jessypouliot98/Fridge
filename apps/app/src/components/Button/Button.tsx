import React from "react";
import {GestureResponderEvent, StyleProp, Text, TouchableWithoutFeedback, View, ViewStyle} from "react-native";
import {ThemeType} from "../../utils/types";
import {useTailwind} from "tailwind-rn/dist";

export type ButtonType = ThemeType | 'default' | 'none';

export type ButtonProps = {
  onPress?: (e: GestureResponderEvent) => void,
  disabled?: boolean,
  type?: ButtonType,
  style?: StyleProp<ViewStyle>,
}

export const getButtonStyle = (tailwind: ReturnType<typeof useTailwind>, type: ButtonType) => {
  const defaultStyles = 'px-4 py-2 rounded flex flex-row justify-center items-center';

  switch (type) {
    case 'primary': {
      return tailwind(`${defaultStyles} bg-blue-400`);
    }
    case 'gray': {
      return tailwind(`${defaultStyles} bg-gray-300`);
    }
    case 'warn': {
      return tailwind(`${defaultStyles} bg-yellow-400`);
    }
    case 'error': {
      return tailwind(`${defaultStyles} bg-red-400`);
    }
    case 'default': {
      return tailwind(defaultStyles);
    }
    case 'none':
    default: {
      return null;
    }
  }
}

export const getTextStyle = (tailwind: ReturnType<typeof useTailwind>, type: ButtonType) => {
  const defaultStyles = '';

  switch (type) {
    case 'primary':
    case 'success':
    case 'warn':
    case 'error': {
      return tailwind(`${defaultStyles} text-white`);
    }
    default: {
      return tailwind(`${defaultStyles} text-gray-700`);
    }
  }
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    style,
    disabled,
    type = 'primary',
    onPress,
  } = props;

  const tailwind = useTailwind();

  return (
    <TouchableWithoutFeedback disabled={disabled} onPress={onPress}>
      <View style={[getButtonStyle(tailwind, type), style]}>
        {typeof children === 'string' ? (
          <Text style={getTextStyle(tailwind, type)}>{children}</Text>
        ) : (
          children
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Button;
