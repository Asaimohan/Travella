import { View, Text, Image } from 'react-native'
import React from 'react'

export default function UserTripList({userTrips}) {
  return (
    <View>
      <View style={{
        marginTop:20
      }}>
        <Image source={require('./../../assets/images/destination.jpg')}
        style={{
          width:'100%',
          height:250,
          objectFit:'cover',
          borderRadius:15
        }}/>
        <View>
          <Text>
          {userTrips[0]?.tripPlan?.trip_details?.destination}
          </Text>
        </View>
      </View>
    </View>
  )
} 