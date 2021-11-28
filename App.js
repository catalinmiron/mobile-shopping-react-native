// import Exponent, { Font, Components } from "exponent";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import styles from "./components/theme";

const App = () => {
  let [fontsLoaded] = useFonts({
    Skyhook: require("./assets/fonts/SkyhookMono.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "Skyhook" }}>dkaakdak</Text>
    </View>
  );
};

export default App;
