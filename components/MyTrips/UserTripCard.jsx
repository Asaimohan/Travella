import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment'
import {Colors} from './../../constants/Colors'

export default function UserTripCard({trip}) {
  const formatData=(data)=>{
    return JSON.parse(data);
  }
  return (
    <View style={{
            marginTop:15,
            display:'flex',
            flexDirection:'row',
            gap:10,
            alignItems:'center'
          }}>
            <Image source={require('./../../assets/images/destination.jpg')}
            style={{
              width:100,
              height:100
            }}/>
            <View>
                <Text>{trip.tripPlan?.trip_details?.destination}</Text>
                <Text>{moment(formatData(trip.tripData).startDate).format('DD MMM YYYY')}</Text>
                <Text >{formatData(trip.tripData).traveler.title}</Text>
            </View>
    </View>
  )
}