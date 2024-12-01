import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "expo-router";
import { Colors } from "./../../constants/Colors";
import { SelectTravelesList } from "./../../constants/Options";

import OptionCard from "../../components/CreateTrip/OptionCard";

export default function selectraveler() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        padding: 25,
        paddingtop: 75,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 35,
          marginTop: 20,
        }}
      >
        Who's Traveling
      </Text>

      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "itallic",
            fontSize: 18,
          }}
        >
          Choose your traveles
        </Text>
        <FlatList
          data={SelectTravelesList}
          renderItem={({ item, index }) => (
            <View
              style={{
                marginVertical: 10,
              }}
            >
              <OptionCard option={item} />
            </View>
          )}
        />
      </View>
    </View>
  );
}
