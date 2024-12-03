import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {
  const router = useRouter();
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 25,
      }}
    >
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text
        style={{
          fontSize: 25,
          fontFamily: "itallic",
        }}
      >
        No Trips planned yet!
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "itallic",
          textAlign: "center",
          color: "gray",
        }}
      >
        Looks like its time to plan a new travel experience! Get Started below
      </Text>

      <TouchableOpacity
        onPress={() => router.push("create-trip/searchplace")}
        style={{
          padding: 15,
          backgroundColor: "black",
          borderRadius: 15,
          paddingHorizontal: 30,
        }}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "SpaceMono-Regular",
            fontSize: 15,fontFamily:'bold'
          }}
        >
          Start A New Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
