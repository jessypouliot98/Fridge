import React from "react";
import InputText, {InputTextProps} from "./InputText/InputText";
import InputDate, {InputDateProps} from "./InputDate/InputDate";

export type InputProps = InputTextProps | InputDateProps;

const Input: React.FC<InputProps> = (props) => {
  switch(props.type) {
    case 'string':
    case "email":
    case "password":
      return (<InputText {...props} />);

    case 'date':
      return (<InputDate {...props} />);

    default:
      return null;
  }
}

export default Input;
