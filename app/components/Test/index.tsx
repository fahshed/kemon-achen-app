import React from "react";
//import { View, Text, Pressable } from "react-native";

export default function Test() {
  return (
    <Pressable
      style={{ backgroundColor: "pink", height: 30, width: 100 }}
      android_ripple={{ radius: 0, color: "#eeeeee" }}
      onPress={() => console.log("Pressed")}
    >
      <Text>Hello</Text>
    </Pressable>
  );
}
