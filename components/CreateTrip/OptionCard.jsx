import React, { Component } from "react";
import { Text, View } from "react-native";

export default function Optioncard({ option }) {
  return (
    <View
      style={{
        padding: 15,
      }}
    >
      <View>
        <Text>{option.title}</Text>
      </View>
    </View>
  );
}
