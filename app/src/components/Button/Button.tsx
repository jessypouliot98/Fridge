import React from "react";
import {Text, TouchableOpacity} from "react-native";

export type ButtonProps = {
  onPress?: () => void,
  disabled?: boolean,
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, disabled, onPress } = props;
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      {typeof children === 'string' ? (
        <Text>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}

export default Button;
