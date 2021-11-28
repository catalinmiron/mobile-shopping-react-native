import React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import { AiFillApple } from "react-icons/ai";

import ProductList from "./ProductList";
import CartScreen from "./CartScreen";

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="List"
        component={ProductList}
        options={{
          tabBarIcon: ({ focused }) => {
            <Image source={require("../assets/idea.png")} />;
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            <View>
              <Image source={require("../assets/idea.png")} />;
            </View>;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
