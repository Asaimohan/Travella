import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';

import moment from 'moment';




export default function TripDetails({ }) {

  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState([]);

  const formatData = (data) => {
    return JSON.parse(data)
  }

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    })
    setTripDetails(JSON.parse(trip))
  }, [])

  return tripDetails && (
    <View>
      <Image source={require('./../../assets/images/goa1.jpg')}
        style={{
          width: "100%",
          height: 300, marginTop: -10
        }} />
      <View style={{
        padding: 15,
        backgroundColor: Colors.white, height: '100%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15, marginTop: -15
      }}>
        <Text style={{
          fontFamily: 'bold', fontSize: 40, textAlign: 'center'
        }}>
          {tripDetails?.tripPlan?.trip_details?.destination}
        </Text>
        <Text>

        </Text>
      </View>
    </View>

  )
}