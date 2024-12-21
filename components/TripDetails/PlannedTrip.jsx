import { View, Text, FlatList } from 'react-native'
import React from 'react'

export default function PlannedTrip({details}) {
  return (
    <View>
      <Text>PLan For Day</Text>
      <FlatList
      data={details}
      style={{
      marginTop:8
      }}
      renderItem={({item,index})=>(
        <View> {item.date}</View>
      )}/>
    </View>
  )
}