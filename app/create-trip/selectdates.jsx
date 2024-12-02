import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import{Colors, colors} from './../../constants/Colors'
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';

export default function SelectDates() {
   const navigation=useNavigation();
   const [startDate,setStartDate]=useState();
   const [endDate,setEndDate]=useState();
   useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle:''
    })
   })
    const onDateChange=(date,type)=>{
        console.log(date,type)
        if(type=='START_DATE'){
          setStartDate(moment(date))
        }
        else{
          setEndDate(moment(date))
        }
    }
    const OnDateSelectionContinue=()=>{
           
      if(!startDate&&!endDate)
      {
        ToastAndroid.show('Please select Start and End Dates', ToastAndroid.LONG)
        return;
      }

          const totalNoOfDays=endDate.diff(startDate,'days');
          console.log(totalNoOfDays+1);
    }
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
      <View style={{marginTop:30}}>
      <CalendarPicker
       onDateChange={onDateChange}
       allowRangeSelection={true}
       minDate={new Date()}
       maxRangeDuration={5}
       selectedRangeStyle={{
        backgroundColor:Colors.primary
       }}
       selectedDayTextStyle={{
        color:Colors.white
       }}
       />
       </View>
       <TouchableOpacity
       onPress={OnDateSelectionContinue}
      style={{
          padding:20,backgroundColor:Colors.primary,
          marginTop:35,
          borderRadius:15

        }}>
         
        <Text style={{
          color:Colors.white,
          textAlign:'center',
         

        }}>
          Continue
        </Text >
        
      </TouchableOpacity>

    </View>
  )
} 