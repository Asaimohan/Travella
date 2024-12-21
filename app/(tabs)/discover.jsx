import { View, Text } from 'react-native'
import React from 'react'
import {Colors} from './../../constants/Colors'
export default function Discover() {
  return (
    <View style={{ backgroundColor:Colors.white,
      height:'100%',padding:30
    }}>
      <Text style={{ textAlign:'center', fontSize:70,fontFamily:'bold',marginTop:180}}>
        This Page Will Updated Soon
      </Text>
    </View>
  )
}