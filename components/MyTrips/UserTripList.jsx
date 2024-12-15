import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment'
import {Colors} from './../../constants/Colors'
import UserTripCard from './UserTripCard'
export default function UserTripList({userTrips}) {
     const LatestTrip=JSON.parse(userTrips[0].tripData)
  return userTrips&&(
    <View>
      <View style={{
        marginTop:20
      }}>
        <Image source={require('./../../assets/images/destination.jpg')}
        style={{
          width:'100%',
          height:230,
          objectFit:'cover',
          borderRadius:15
        }}/>
        <View style={{ marginTop:10}}>
          <Text style={{
            fontFamily:'bold',fontSize:23
          }}>
          {userTrips[0]?.tripPlan?.trip_details?.destination}
          </Text>
          <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:5
          }}>
          <Text style={{fontFamily:'bold',
            fontSize:17,color:Colors.gray
          }}>{moment(LatestTrip.startDate).format('DD MMM YYYY')}</Text>
          <Text style={{fontFamily:'bold',
            fontSize:17,color:Colors.gray
          }}>🚍{LatestTrip.traveler.title}</Text>
          </View>
          <TouchableOpacity
       
      style={{
          padding:15  ,backgroundColor:Colors.primary,
          marginTop:10,
          borderRadius:15

        }}>
        <Text style={{
          color:Colors.white,
          textAlign:'center',fontFamily:'bold'
         

        }}>
          
          See your plan
        </Text >
       
      </TouchableOpacity>
        
        </View>
            {userTrips.map((trip,index)=>(
              <UserTripCard trip={trip} key={index} />
            ))}
      </View>
    </View> 
  )
} 