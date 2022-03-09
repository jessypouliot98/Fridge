import React, {useState} from "react";
import {StyleProp, TextInput, Text, View, ViewStyle, Pressable} from "react-native";
import { useTailwind } from "tailwind-rn/dist";
import clsx from "clsx";

export type SearchFieldProps = {
  style?: StyleProp<ViewStyle>,
  onSubmit?: (searchTerm: string) => void,
}

const SearchField: React.FC<SearchFieldProps> = (props) => {
  const { style, onSubmit } = props;

  const tailwind = useTailwind();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = () => {
    onSubmit && onSubmit(searchTerm);
  }

  return (
    <View style={[tailwind('bg-white rounded-full flex flex-row items-center'), style]}>
      <TextInput
        style={tailwind('flex-1 h-12 px-4')}
        placeholder={'Search'}
        onSubmitEditing={handleSubmit}
        onChangeText={(v) => setSearchTerm(v)}
      />
      <Pressable
        style={({ pressed }) => [
          tailwind(clsx('rounded-full h-12 w-12 flex justify-center items-center', pressed ? 'bg-red-700' : 'bg-red-500')),
          { transform: [{ scale: 0.75 }] }
        ]}
        onPress={handleSubmit}
      >
        <Text>Q</Text>
      </Pressable>
    </View>
  )
}

export default SearchField;
