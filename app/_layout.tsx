import { Stack } from "expo-router";
import {useFonts} from "expo-font"

export default function RootLayout() {
  useFonts({
  'italic':require('./../assets/fonts/itallic.ttf')
  })
  return(
  <Stack screenOptions={{
    headerShown:false
  }}>
  
  <Stack.Screen name="(tabs)" />
  </Stack>
);
}
