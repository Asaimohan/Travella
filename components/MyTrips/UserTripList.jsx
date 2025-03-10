import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Colors } from './../../constants/Colors'
import UserTripCard from './UserTripCard'
import { useRouter } from 'expo-router'
import { GetPhotoRef } from '../../services/GooglePlaceApi';

export default function UserTripList({ userTrips }) {
  const [photoRef, setPhotoRef] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (userTrips.length > 0) {
      GetGooglePhotoRef();
    }
  }, [userTrips]);

  const GetGooglePhotoRef = async () => {
    const destination = userTrips[0]?.tripPlan?.trip_details?.destination;
    if (destination) {
      const result = await GetPhotoRef(destination);
      if (result.results?.length > 0 && result.results[0].photos?.length > 0) {
        setPhotoRef(result.results[0].photos[0].photo_reference);
      }
    }
  };

  if (!userTrips || userTrips.length === 0) {
    return <Text>No trips available</Text>;
  }

  const LatestTrip = JSON.parse(userTrips[0]?.tripData);

  return (
    <View>
      <View style={{ marginTop: 20 }}>
        <Image
          source={{
            uri: photoRef
              ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
              : 'https://via.placeholder.com/180x120',
          }}
          style={{
            width: '100%',
            height: 230,
            objectFit: 'cover',
            borderRadius: 15,
          }}
        />
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: 'bold', fontSize: 23 }}>
            {userTrips[0]?.tripPlan?.trip_details?.destination}
          </Text>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 5
          }}>
            <Text style={{ fontFamily: 'bold', fontSize: 17, color: Colors.gray }}>
              {moment(LatestTrip.startDate).format('DD MMM YYYY')}
            </Text>
            <Text style={{ fontFamily: 'bold', fontSize: 17, color: Colors.gray }}>
              🚍 {LatestTrip.traveler.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push({
              pathname: '/trip-details',
              params: {
                trip: JSON.stringify(userTrips[0])
              }
            })}
            style={{
              padding: 15, backgroundColor: Colors.primary,
              marginTop: 10,
              borderRadius: 15
            }}>
            <Text style={{ color: Colors.white, textAlign: 'center', fontFamily: 'bold' }}>
              See your plan
            </Text>
          </TouchableOpacity>
        </View>

        {userTrips.map((trip, index) => (
          <UserTripCard trip={trip} key={index} />
        ))}
      </View>
    </View>
  );
}
