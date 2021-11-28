import React from "react";
import { View } from "react-native";
import Button from "./button";
import theme from "./theme";

export const RenderProductFooter = () => {
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
      <Button
        onPress={() => console.log("Here will be navigator")}
        theme="light"
      >
        ADD TO CART
      </Button>

      <Button
        onPress={() => console.log("Here will be navigator")}
        theme="dark"
      >
        BUY NOW
      </Button>
    </View>
  );
};

export default RenderProductFooter;
