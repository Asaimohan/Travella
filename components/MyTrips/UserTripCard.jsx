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
            marginTop:20,
            display:'flex',
            flexDirection:'row',
            gap:10,
            alignItems:'center'
          }}>
            <Image source={require('./../../assets/images/location3D.jpg')}
            style={{
              width:130,
              height:100,
              borderRadius:15
            }}/>
            <View>
                <Text style={{ fontFamily:'bold',fontSize:19}}>{trip.tripPlan?.trip_details?.destination}</Text>
                <Text style={{ fontSize:14, color:Colors.gray}}>{moment(formatData(trip.tripData).startDate).format('DD MMM YYYY')}</Text>
                <Text style={{ fontSize:14, color:Colors.gray}}>Traveling: {formatData(trip.tripData).traveler.title}</Text>
            </View>
    </View>
  )
}