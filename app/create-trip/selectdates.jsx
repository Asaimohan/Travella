import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import{Colors, colors} from './../../constants/Colors'
export default function SelectDates() {
   const navigation=useNavigation();
   useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle:''
    })
   })

  return (
    <View style={{
      padding:25,
      paddingTop:50,
      backgroundColor:Colors.white,
      height:'100%'
    }}>
      <Text style={{
        fontFamily:'bold',fontSize:35,
        
      }}>Travel Dates</Text>
    </View>
  )
}