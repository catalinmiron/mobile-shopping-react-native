import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { data } from "../data";
import ProductRow from "../components/ProductRow";

const { width, height } = Dimensions.get("window");
import theme from "../components/theme";

const PADDING = 40;
const INDICATOR_CONTAINER_HEIGHT = 2;
const INDICATOR_CONTAINER_WIDTH = width - PADDING * 2;
const INDICATOR_WIDTH = INDICATOR_CONTAINER_WIDTH / data.length;

export default function ProductList({ navigation }) {
  const [selectedId, setselectedId] = useState(0);
  const scrollX = new Animated.Value(0);
  const [indicator, setIndicator] = useState(new Animated.Value(1));
  console.log(scrollX);

  // useEffect(() => {
  //   scrollX.addListener(updateView(scrollX));
  // }, []);

  // const updateView = (offset) => {
  //   let currentIndex = offset.value / width;
  //   if (offset.value < 0) {
  //     currentIndex = 0;
  //   } else if (offset.value > (data.length - 1) * width) {
  //     currentIndex = data.length - 1;
  //   }

  //   setIndicator(currentIndex * INDICATOR_WIDTH);
  // };

  return (
    // <NavigationContainer>
    <View style={[theme.container, theme.bg]}>
      <Animated.ScrollView
        pagingEnabled
        scrollEventThrottle={16}
        contentContainerStyle={[ss.contentContainer]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      >
        {data.map((item, i) => {
          console.log(i);
          return (
            <ProductRow
              product={item}
              i={i}
              navigation={navigation}
              key={i + "21231"}
            />
          );
        })}
      </Animated.ScrollView>
      <Animated.View style={ss.indicatorContainer}>
        <Animated.View style={[ss.indicator, { left: indicator }]} />
      </Animated.View>
    </View>
    // </NavigationContainer>
  );
}

const ss = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    backgroundColor: "#ffffff",
  },
  productItem: {
    width: width,
    padding: 40,
  },
  indicator: {
    width: INDICATOR_WIDTH,
    height: INDICATOR_CONTAINER_HEIGHT,
    position: "absolute",
    top: 0,
    backgroundColor: "#c0c0c0",
  },
  indicatorContainer: {
    height: INDICATOR_CONTAINER_HEIGHT,
    marginVertical: 20,
    backgroundColor: "#ededed",
    position: "relative",
    width: INDICATOR_CONTAINER_WIDTH,
    paddingHorizontal: PADDING,
  },
});
