import React, {useMemo, useRef} from 'react';
import { ModalFC, withModal } from "../utils";
import { useTailwind } from "tailwind-rn/dist";
import {Animated, FlatList, Text, useWindowDimensions, View} from "react-native";
import { Permissions } from "../../utils/permissions";
import { Page1, Page2, Page3 } from './pages';

const OnboardingModal: ModalFC = ({ navigation }) => {
  const tailwind = useTailwind();

  const { width, height } = useWindowDimensions();
  const scrollOffset = useRef(new Animated.Value(0)).current;

  const pages = [
    { id: 1, Component: Page1, color: 'rgb(255, 0, 0)' },
    { id: 2, Component: Page2, color: 'rgb(255, 255, 0)' },
    { id: 3, Component: Page3, color: 'rgb(255, 0, 255)' },
  ];

  const pageCount = useMemo(() => pages.length, [pages]);

  const bgStyle = {
    backgroundColor: scrollOffset.interpolate({
      inputRange: pages.map((_, i) => width * i),
      outputRange: pages.map((page) => page.color),
    }),
  }

  const handleLeaveOnboarding = () => {
    navigation.goBack();
  }

  return (
    <Animated.View style={[tailwind('w-full h-full'), bgStyle]}>
      <FlatList
        data={pages}
        horizontal={true}
        pagingEnabled={true}
        bounces={true}
        alwaysBounceHorizontal={true}
        showsHorizontalScrollIndicator={true}
        keyExtractor={(page) => page.id.toString()}
        renderItem={({ item: { Component }, index }) => (
          <View style={{ width, height }}>
            <Component
              pageIndex={index}
              pageCount={pageCount}
              handleClose={handleLeaveOnboarding}
            />
          </View>
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollOffset } } }],
          { useNativeDriver: false },
        )}
      />
    </Animated.View>
  )
}

export default withModal(OnboardingModal, {
  route: 'OnboardingModal',
  permissions: [Permissions.PUBLIC],
  options: {
    presentation: 'fullScreenModal',
  }
});
