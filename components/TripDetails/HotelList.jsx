import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'
import { GetPhotoRef } from '../../services/GooglePlaceApi'
import Hotelcard, {HotelCard} from './../../components/TripDetails/HotelCard'

export default function HotelList({ hotelList }) {



  

  return (
    <View>
      <Text style={{
        fontFamily: 'bold',
        fontSize: 25
      }}>🛏️ Hotel Recomendation</Text>
      <FlatList
        data={hotelList}
        style={{
          marginTop: 8
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (

          <Hotelcard item={item}/>
        )} />
    </View>
  )
}