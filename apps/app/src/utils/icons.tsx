import {IconDict} from "../components/Icon/IconContext";
import {Text} from "react-native";
import React from 'react';

export const icons: IconDict = {
  heart: {
    svg: (
      <Text style={{ color: 'white', fontWeight: '700' }}>
        ❤️
      </Text>
    ),
  },
  search: {
    svg: (
      <Text style={{ color: 'white', fontWeight: '700' }}>
        Q
      </Text>
    ),
  }
} as const;
