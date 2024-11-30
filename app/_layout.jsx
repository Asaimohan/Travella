import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { CreateTripContext } from "../context/CreateTripContext";
import { useState } from "react";

export default function RootLayout() {
  useFonts({
    italic: require("./../assets/fonts/itallic.ttf"),
  });

  const [tripData, setTripData] = useState([]);
  return (
    <CreateTripContext.Provider value={{ tripData, setTripData }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" />
      </Stack>
    </CreateTripContext.Provider>
  );
}
