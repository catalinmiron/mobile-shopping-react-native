import React from "react";
import { Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import ProductList from "./screens/ProductList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "./components/theme";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import BuyNowScreen from "./screens/BuyNowScreen";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
const App = () => {
  let [fontsLoaded] = useFonts({
    Skyhook: require("./assets/fonts/SkyhookMono.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={"Checkout"} component={BuyNowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
