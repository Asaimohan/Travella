import React, { Component } from "react";
import { Text, View } from "react-native";
import { Colors } from "../../constants/Colors";

export default function Optioncard({ option }) {
  return (
    <View
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: Colors.lightGray,
        borderRadius: 15,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 20,
          }}
        >
          {option.title}
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: Colors.gray,
          }}
        >
          {option.desc}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 35,
        }}
      >
        {option.icon}
      </Text>
    </View>
  );
}
