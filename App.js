import React from "react";
import { Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import ProductList from "./screens/ProductList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styles from "./components/theme";

const Stack = createNativeStackNavigator();
const App = () => {
  let [fontsLoaded] = useFonts({
    Skyhook: require("./assets/fonts/SkyhookMono.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen
          name="Product List"
          title="List"
          component={ProductList}
        />
        <Stack.Screen name="ProductDetails" component={ProductList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
