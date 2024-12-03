import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router';
import { SelectBudgetOption } from '../../constants/Options';
import Optioncard from '../../components/CreateTrip/OptionCard';
import {Colors} from './../../constants/Colors'
import { CreateTripContext } from '../../context/CreateTripContext';


export default function selectBudget() {
    const navigation=useNavigation();
    const [selectedOption,setSelectedOption]=useState ();
    const { tripData, setTripData } = useContext(CreateTripContext);
    const router=useRouter();

    useEffect(()=>{
        navigation.setOptions({
          headerShown:true,
          headerTransparent:true,
          headerTitle:''
        })
       },[]);
       useEffect(()=>{

           selectedOption&&setTripData({
            ...tripData,
            budget:selectedOption?.title
           })
       },[selectedOption])
       const onClickContinue=()=>{
        if(!selectedOption){
          ToastAndroid.show('Please Select your Budget',ToastAndroid.LONG)
          return;
        }
        router.push('/create-trip/review-trip');
       }
  return (
    <View style={{
        padding:25,
        paddingTop:50,
        backgroundColor:Colors.white,
        height:'100%'
    }}>
      <Text style={{
        fontFamily:'bold',
        fontSize:35
    }}
        >Budget ??</Text>
        <View style={{
       marginTop:20
    }}>
      <Text style={{
        fontFamily:'bold',
        fontSize:20
    }}
        >Choose spending habits for your trips </Text>
        <FlatList
        data={SelectBudgetOption}
        renderItem={({item,index})=>(
            <TouchableOpacity style={{
              marginVertical:10
            }}
            onPress={()=>setSelectedOption(item)}
            >
              
                <Optioncard option={item} selectedOption={selectedOption}/>
            </TouchableOpacity>
        )}
        />
    </View>
    <TouchableOpacity
       onPress={()=>onClickContinue()}
      style={{
          padding:20,backgroundColor:Colors.primary,
          marginTop:20,
          borderRadius:15

        }}>
        <Text style={{
          color:Colors.white,
          textAlign:'center',fontFamily:'bold'
         

        }}>
          
          Continue
        </Text >
       
      </TouchableOpacity>
    </View>
    
  )
}