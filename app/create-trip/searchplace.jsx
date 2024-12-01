import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import "react-native-get-random-values";
import { CreateTripContext } from "./../../context/CreateTripContext";
import { useContext } from "react";
import { textInputContainer } from "react-native-web";

export default function searchPlace() {
  const navigation = useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
    });
  });

  useEffect(() => {
    console.log(tripData);
  }),
    [tripData];

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: "white",

        height: "100%",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search Place"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data.description);
          console.log(details?.geometry.location);
          console.log(details?.photos[0]?.photos_reference);
          console.log(details?.url);
          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: details?.geometry.location,
              photoRef: details?.photos[0]?.photos_reference,
              url: details?.url,
            },
          });

          router.push("/create-trip/selectTraveler");
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
        }}
        styles={{
          textInputContainer: {
            borderWidth: 1.5,
            borderRadius: 5,
            marginTop: 20,
          },
        }}
      />
    </View>
  );
}
