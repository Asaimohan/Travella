import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigation } from "expo-router";
import { Colors } from "./../../constants/Colors";
import { SelectTravelesList } from "./../../constants/Options";

import OptionCard from "../../components/CreateTrip/OptionCard";
import { CreateTripContext } from "../../context/CreateTripContext";

export default function selectraveler() {
  const navigation = useNavigation();
  const [selectedTraveler,SetSelectedTraveler]=useState();
  const { tripData, setTripData } = useContext(CreateTripContext);
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, [])

  useEffect(()=>{
     setTripData({...tripData,
      traveler:selectedTraveler
     })
  },[selectedTraveler]);
  useEffect(()=>{
    console.log(tripData);
  },[tripData])


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
          marginTop: 20,fontFamily:'bold'
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
            fontSize: 18,fontFamily:'bold'
          }}
        >
          Choose your traveles
        </Text>
        <FlatList
          data={SelectTravelesList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
            onPress={()=> SetSelectedTraveler(item)}
              style={{
                marginVertical: 10,
              }}
            >
              <OptionCard option={item} selectedOption={selectedTraveler} />
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
       
      style={{
          padding:20,backgroundColor:Colors.primary,
          marginTop:20,
          borderRadius:15

        }}>
          <Link href={'/create-trip/selectdates'}>
        <Text style={{
          color:Colors.white,
          textAlign:'center',
         

        }}>
          Continue
        </Text >
        </Link>
      </TouchableOpacity>
    </View>
  );
}
