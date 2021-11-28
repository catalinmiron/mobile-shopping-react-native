import React from "react";
import { View } from "react-native";
import Button from "./button";
import theme from "./theme";

export const RenderProductFooter = ({ navigation }) => {
  return (
    <View
      style={[
        theme.groupButton,
        {
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          overflow: "hidden",
          borderTopWidth: 1,
          borderTopColor: "#f0f0f0",
        },
      ]}
    >
      <Button onPress={() => console.log("Added to cart")} theme="light">
        ADD TO CART
      </Button>

      <Button onPress={() => navigation.navigate("Checkout")} theme="dark">
        BUY NOW
      </Button>
    </View>
  );
};

export default RenderProductFooter;
