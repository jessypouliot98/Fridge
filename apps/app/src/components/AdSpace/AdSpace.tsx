import React from "react";
import RatioContainer, { RatioType } from "../RatioContainer/RatioContainer";
import { Image, StyleProp, View, ViewStyle } from "react-native";
import { useTailwind } from "tailwind-rn/dist";

export type AdSpaceProps = {
  style?: StyleProp<ViewStyle>,
  ratio: RatioType,
}

const AdSpace: React.FC<AdSpaceProps> = (props) => {
  const { style, ratio } = props;

  const tailwind = useTailwind();

  return (
    <View style={style}>
      <RatioContainer ratio={ratio}>
        <Image
          style={tailwind('w-full h-full')}
          source={{ uri: 'https://unsplash.com/photos/GG1FJwV67PA/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fGFkfGVufDB8fHx8MTY0NzE3NzY5MQ&force=true&w=640' }}
        />
      </RatioContainer>
    </View>
  );
}

export default AdSpace;
