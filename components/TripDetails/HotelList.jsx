import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'

export default function HotelList({hotelList}) {
  return (
    <View>
      <Text style={{ fontFamily:'bold',
        fontSize:20
      }}>🛏️ Hotel Recomendation</Text>
      <FlatList
      data={hotelList}
      style={{
        marginTop:8
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <View style={{
          marginRight:15,
          width:180
        }}>
          <Image source={require('./../../assets/images/goa.jpg')}
          style={{
            width:180,
            height:120,borderRadius:15
          }}/>
          <View>
            <Text style={{
              fontFamily:'bold',
              fontSize:15,textAlign:'center'
            }}>
            {item.HotelName}</Text>
            <View style={{
              gap:5
            }}>
              <Text>
              ⭐ {item.rating}
              </Text>
              <Text>
              💰 {item.Price}
              </Text>
            </View>
          </View>
        </View>
      )}/>
    </View>
  )
}