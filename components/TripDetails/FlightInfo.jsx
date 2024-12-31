import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'


export default function Flightinfo({flightData}) {
  return (
    <View style={{
      marginTop:5
    }}>
      <Text style={{fontFamily:'bold',
        fontSize:25, marginTop:0}}>✈️  Flight details</Text>
      <FlatList
      data={flightData}
      renderItem={({item,index})=>(
        <View>
          <Text style={{
            fontFamily:'bold',
            marginLeft:30
          }}>
             🛬  {item.flight_name}
          </Text>
          
          <Text style={{
            fontFamily:'bold',
            marginLeft:30
          }}>
          💰  {item.price}
          </Text>
          <TouchableOpacity>
          <Text style={{
            
            marginLeft:30, color:Colors.blue
          }}>
            🔗  {item.booking_url}
          </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{padding:5,backgroundColor:Colors.primary,width:100
            ,borderRadius:20,marginLeft:280
          }}>
            <Text style={{
              color:Colors.white,
              textAlign:'center',borderRadius:15
            }}>
              Book Here
            </Text>
          </TouchableOpacity>
        </View>
      )}
      />
    </View>
  )
}