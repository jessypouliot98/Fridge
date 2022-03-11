import {IconDict} from "../components/Icon/IconContext";
import {Text} from "react-native";
import React from 'react';

export const icons: IconDict = {
  search: {
    svg: (
      <Text style={{ color: 'white', fontWeight: '700' }}>
        Q
      </Text>
    ),
  }
} as const;
