import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../constants/Colors';

import { CreateTripContext } from '../../context/CreateTripContext';
import moment from 'moment';

export default function ReviewTrip() {
  const navigation=useNavigation();
  const { tripData, setTripData } = useContext(CreateTripContext);
  const router=useRouter();

  useEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      headerTransparent:true,
      headerTitle:''
    })
   },[]);
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
    }}>
       Review Your Trip </Text>
       <View style={{marginTop:20}}>
        <Text style={{ fontFamily:'bold',
          fontSize:20
        }}>
          Before Generating your trip, Please Review your Selection
        </Text>

        <View style={{
          marginTop:40,
          display:'flex',
          flexDirection:'row',
          gap:20
        }}>
         <Text style=
         {{
          fontSize:35
         }}>
         📍
         </Text>
          <View>
          <Text style={{fontSize:20,
          color:Colors.gray
          }}>Destination</Text>

            <Text style={{
            fontSize:18,
            fontFamily:'bold'
          }}>{tripData?.locationInfo?.name}
          </Text>
          </View>
        </View>
        <View style={{
          marginTop:30,
          display:'flex',
          flexDirection:'row',
          gap:20
        }}>
         <Text style=
         {{
          fontSize:35
         }}>
         🗓️
         </Text>
          <View>
          <Text style={{fontSize:20,
          color:Colors.gray
          }}>Travel Date</Text>

            <Text style={{
            fontSize:18,
            fontFamily:'bold'
          }}>{moment(tripData?.startDate).format('DD MMM')+ "  To  "
          + moment(tripData?.endDate).format('DD MMM')+ "  "}   
          ({tripData?.totalNoOfDays} days)
          </Text>
          </View>
        </View>
        <View style={{
          marginTop:30,
          display:'flex',
          flexDirection:'row',
          gap:20
        }}>
         <Text style=
         {{
          fontSize:35
         }}>
         🚍
         </Text>
          <View>
          <Text style={{fontSize:20,
          color:Colors.gray
          }}>Who is Travelling </Text>

            <Text style={{
            fontSize:18,
            fontFamily:'bold'
          }}>{tripData?.traveler?.title}
          </Text>
          </View>
        </View>
        <View style={{
          marginTop:30,
          display:'flex',
          flexDirection:'row',
          gap:20
        }}>
         <Text style=
         {{
          fontSize:35
         }}>
         💰
         </Text>
          <View>
          <Text style={{fontSize:20,
          color:Colors.gray
          }}>Budget</Text>

            <Text style={{
            fontSize:18,
            fontFamily:'bold'
          }}>{tripData?.budget}
          </Text>
          </View>
        </View>
       </View>
       <TouchableOpacity
       onPress={()=>router.replace('/create-trip/generate-trip')}
      style={{
          padding:20,backgroundColor:Colors.primary,
          marginTop:60,
          borderRadius:30

        }}>
        <Text style={{
          color:Colors.white,
          textAlign:'center',
          fontSize:15,
          fontFamily:'bold'
        }}>
          Build My Trip
        </Text >
       
      </TouchableOpacity>
    </View>
  )
}