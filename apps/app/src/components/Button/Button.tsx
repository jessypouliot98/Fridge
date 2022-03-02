import React, {useState} from "react";
import {GestureResponderEvent, StyleProp, Text, TouchableWithoutFeedback, View, ViewStyle} from "react-native";
import {ThemeType} from "../../utils/types";
import {useTailwind} from "tailwind-rn/dist";

export type ButtonType = ThemeType | `outline-${ThemeType}` | 'default' | 'none';

export type ButtonProps = {
  onPress?: (e: GestureResponderEvent) => void,
  disabled?: boolean,
  type?: ButtonType,
  style?: StyleProp<ViewStyle>,
}

export const getButtonStyle = (tailwind: ReturnType<typeof useTailwind>, type: ButtonType, isPressed: boolean) => {
  const defaultStyles = 'px-4 py-2 rounded border border-transparent flex flex-row justify-center items-center';

  switch (type) {
    case 'primary': {
      const themeStyle = !isPressed ? 'bg-blue-400 border-blue-400' : 'bg-blue-500 border-blue-500';
      return tailwind(`${defaultStyles} ${themeStyle}`);
    }
    case 'gray': {
      const themeStyle = !isPressed ? 'bg-gray-400 border-gray-400' : 'bg-gray-500 border-gray-500';
      return tailwind(`${defaultStyles} ${themeStyle}`);
    }
    case 'warn': {
      const themeStyle = !isPressed ? 'bg-yellow-400 border-yellow-400' : 'bg-yellow-500 border-yellow-500';
      return tailwind(`${defaultStyles} ${themeStyle}`);
    }
    case 'error': {
      const themeStyle = !isPressed ? 'bg-red-400 border-red-400' : 'bg-red-500 border-red-500';
      return tailwind(`${defaultStyles} ${themeStyle}`);
    }
    case 'outline-primary': {
      const themeStyle = !isPressed ? 'bg-white border-blue-400' : 'bg-blue-500 border-blue-500';
      return tailwind(`${defaultStyles} ${themeStyle}`);
    }
    case 'outline-gray': {
      const themeStyle = !isPressed ? 'bg-white border-gray-400' : 'bg-gray-500 border-gray-500';
      return tailwind(`${defaultStyles} ${themeStyle}`);
    }
    case 'outline-warn': {
      const themeStyle = !isPressed ? 'bg-white border-yellow-400' : 'bg-yellow-500 border-yellow-500';
      return tailwind(`${defaultStyles} ${themeStyle}`);
    }
    case 'outline-error': {
      const themeStyle = !isPressed ? 'bg-white border-red-400' : 'bg-red-500 border-red-500';
      return tailwind(`${defaultStyles} ${themeStyle}`);
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

export const getTextStyle = (tailwind: ReturnType<typeof useTailwind>, type: ButtonType, isPressed: boolean) => {
  const defaultStyles = '';

  switch (type) {
    case 'primary':
    case 'gray':
    case 'success':
    case 'warn':
    case 'error': {
      return tailwind(`${defaultStyles} text-white`);
    }
    case 'outline-primary': {
      const themeStyle = !isPressed ? 'text-blue-400' : 'text-white';
      return tailwind(`${defaultStyles} ${themeStyle}`);
    }
    case 'outline-gray': {
      const themeStyle = !isPressed ? 'text-gray-500' : 'text-white';
      return tailwind(`${defaultStyles} ${themeStyle}`);
    }
    case 'outline-warn': {
      const themeStyle = !isPressed ? 'text-yellow-400' : 'text-white';
      return tailwind(`${defaultStyles} ${themeStyle}`);
    }
    case 'outline-error': {
      const themeStyle = !isPressed ? 'text-red-400' : 'text-white';
      return tailwind(`${defaultStyles} ${themeStyle}`);
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
    type = 'primary' as const,
    onPress,
  } = props;

  const [isPressed, setIsPressed] = useState(false);
  const tailwind = useTailwind();

  return (
    <TouchableWithoutFeedback
      disabled={disabled}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <View style={[getButtonStyle(tailwind, type, isPressed), style]}>
        {typeof children === 'string' ? (
          <Text style={getTextStyle(tailwind, type, isPressed)}>{children}</Text>
        ) : (
          children
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Button;
