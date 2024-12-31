import { View, Text, Image } from 'react-native'
import React from 'react'
import moment from 'moment'
import {Colors} from './../../constants/Colors'
import { useEffect, useState } from 'react';
import { GetPhotoRef } from '../../services/GooglePlaceApi';


export default function UserTripCard({trip}) {
  const [photoRef, setPhotoRef] = useState(null);
   useEffect(() => {
    GetGooglePhotoRef();
  }, []);

  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef(trip.tripPlan?.trip_details?.destination);
    if (result.results?.length > 0 && result.results[0].photos?.length > 0) {
      setPhotoRef(result.results[0].photos[0].photo_reference);
    }
  };


  const formatData=(data)=>{
    return JSON.parse(data);
  }
  return (
    <View style={{
            marginTop:20,
            display:'flex',
            flexDirection:'row',
            gap:10,
            alignItems:'center'
          }}>
            <Image source={{
          uri: photoRef
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
            : 'https://via.placeholder.com/180x120', // Placeholder URL
        }}
        style={{
          width: 180,
          height: 120,
          borderRadius: 15,
        }}/>
            <View >
                <Text style={{ fontFamily:'bold',fontSize:19}}>{trip.tripPlan?.trip_details?.destination}</Text>
                <Text style={{ fontSize:14, color:Colors.gray}}>{moment(formatData(trip.tripData).startDate).format('DD MMM YYYY')}</Text>
                <Text style={{ fontSize:14, color:Colors.gray}}>Traveling: {formatData(trip.tripData).traveler.title}</Text>
            </View>
    </View>
  )
}