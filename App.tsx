import React from "react";

import { ThemeProvider } from "styled-components";
import { StyleSheet, Text, View } from "react-native";

import { theme } from "./config";
import { Body2, H6 } from "./styles";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <H6 mb="8px">asaf</H6>
        <Body2 color="yellow">
          When my phone rings, my anxiety shoots through the roof. I put my
          location on with my immediate family so they know when I’m at work and
          just to text me with direct . I’m convinced something really bad
          happened to someone I love and someone is calling me to tell me. Help?
        </Body2>
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
