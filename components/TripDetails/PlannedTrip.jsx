import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

export default function PlannedTrip({daydetails}) {
  return (
    <View  style={{
     marginTop:10
   }}>
      <Text style={{
         fontFamily:'bold',
              fontSize:25
      }}>🏕️ Planning</Text>
     
      <FlatList
      style={{gap:10}}
      data={daydetails}
      renderItem={({item,index})=>(
        <View >
          {/* <Image source={require('./../../assets/images/goa.jpg')}
          style={{
            height:120,
            width:'100%',borderRadius:20

          }}/> */}
          <View style={{
           gap:4
          }}>
         
            <Text style={{fontFamily:'bold',
              fontSize:15
            }}>
            DAY {item.day} :-
            </Text>
            <Text>
            ✷ Dated:- {item.date}
            </Text>
            <Text style={{fontFamily:'italic'}}>
            ✷ {item.plan}
            </Text>
            <Text style={{fontFamily:'bold'}}>
            "Try To Visit Location At {item.best_time_to_visit}"
            </Text>
          </View>
        </View>
      )}/>
    </View>
  )
}