import React from "react";

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
import theme from "./theme";

import RenderProductFooter from "./RenderProductFooter";
const { width, height } = Dimensions.get("window");

const ProductRow = ({ product, i, navigation }) => {
  console.log(i);

  return (
    <View style={[theme.container, { width: width, padding: 40 }]} key={i}>
      <View
        style={{
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
        }}
      >
        <View style={[theme.newLabel, theme.absoluteTopLeft, theme.greenTheme]}>
          <Text style={[theme.newLabelText, theme.customFont]}>NEW</Text>
        </View>
        <Animated.Image source={{ uri: product.image }} style={[theme.image]} />
        <Text style={[theme.customFont, theme.title]}>{product.title}</Text>
        <Text style={[theme.customFont, theme.price]}>{product.price}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          {product.colors.map((color, index) => {
            return (
              <View
                key={index}
                style={{
                  position: "relative",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={[
                    theme.productColorBubble,
                    {
                      backgroundColor: color,
                    },
                  ]}
                />
                {product.selectedColor === color ? (
                  <View
                    style={[
                      theme.productColorBubble,
                      theme.selectedBubble,
                      {
                        backgroundColor: color,
                      },
                    ]}
                  />
                ) : null}
              </View>
            );
          })}
        </View>

        <RenderProductFooter navigation={navigation}/>
      </View>
    </View>
  );
};

export default ProductRow;
