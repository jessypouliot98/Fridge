import React, {useState} from "react";
import {StyleProp, TextInput, Text, View, ViewStyle, Pressable} from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import clsx from "clsx";
import Icon from "../Icon/Icon";

export type SearchFieldProps = {
  style?: StyleProp<ViewStyle>,
  defaultValue?: string,
  onSubmit?: (searchTerm: string) => void,
}

const SearchField: React.FC<SearchFieldProps> = (props) => {
  const { style, defaultValue, onSubmit } = props;

  const tailwind = useTailwind();
  const [searchTerm, setSearchTerm] = useState(defaultValue || '');
  const [activeTerm, setActiveTerm] = useState(defaultValue || '');

  const handleSubmit = () => {
    setActiveTerm(searchTerm);
    onSubmit && onSubmit(searchTerm);
  }

  return (
    <View style={[tailwind('bg-white rounded-full flex flex-row items-center'), style]}>
      <TextInput
        style={tailwind('flex-1 h-12 px-4')}
        placeholder={'Search'}
        defaultValue={searchTerm}
        onSubmitEditing={handleSubmit}
        onChangeText={(v) => setSearchTerm(v)}
      />
      <Pressable
        style={({ pressed }) => [
          tailwind(clsx('rounded-full h-12 w-12 flex justify-center items-center', pressed ? 'bg-red-700' : 'bg-red-500')),
          { transform: [{ scale: 0.75 }] }
        ]}
        disabled={activeTerm === searchTerm}
        onPress={handleSubmit}
      >
        <Icon name={'search'} />
      </Pressable>
    </View>
  )
}

export default SearchField;
