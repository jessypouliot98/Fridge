import type { InputDateProps } from "./InputDate";
import DatePickerModal from "../../../modals/DatePickerModal/DatePickerModal";
import {useState} from "react";
import {useInputStyle} from "../hooks";

export const useInputDate = (props: InputDateProps) => {
  const {
    styles,
    defaultValue,
    placeholder,
    autoFocus,
    onChange
  } = props;

  const { containerStyle, inputStyle } = useInputStyle();
  const [selectedDate, setSelectedDate] = useState<string | null>(defaultValue || null);

  const handleOpenPicker = () => {
    DatePickerModal.open({
      defaultValue: selectedDate || undefined,
      onSubmit: setSelectedDate,
    });
  }

  const handleChange = (value: string) => {
    setSelectedDate(value);
    onChange && onChange(value);
  };

  return {
    containerStyle: [containerStyle, styles?.container],
    inputStyle: [inputStyle, styles?.input],
    placeholder: placeholder,
    displayValue: selectedDate,
    handleOpenPicker,
    autoFocus: autoFocus,
    onChange: handleChange,
  }
}
