import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import ProductList from "./ProductList";
import CartScreen from "./CartScreen";

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List" component={ProductList} />
      <Tab.Screen name="Cart" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
