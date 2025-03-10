import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
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
          fontFamily: "italic", // Use a valid font family
        }}
      >
        No Trips planned yet!
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "italic", // Use a valid font family
          textAlign: "center",
          color: "gray",
        }}
      >
        Looks like it's time to plan a new travel experience! Get started below.
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
            fontFamily: "SpaceMono-Regular", // Use a valid font family
            fontSize: 15,
            fontWeight: "bold", // Use fontWeight for bold text
          }}
        >
          Start A New Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}