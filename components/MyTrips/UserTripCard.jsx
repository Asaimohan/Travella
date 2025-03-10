import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from './../../constants/Colors'
import { useRouter } from 'expo-router';

export default function UserTripCard({ trip, photoRef }) {
  const router = useRouter();

  const formatData = (data) => {
    try {
      return JSON.parse(data);
    } catch (error) {
      return {};
    }
  };

  const tripData = formatData(trip.tripData);

  return (
    <TouchableOpacity
      onPress={() => router.push({
        pathname: '/trip-details',
        params: { trip: JSON.stringify(trip) }
      })}
      style={{
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: Colors.white,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 3, // For Android shadow effect
      }}>
      {/* Trip Image */}
      <Image
        source={{
          uri: photoRef
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
            : 'https://via.placeholder.com/180x120',
        }}
        style={{
          width: 120,
          height: 80,
          borderRadius: 12,
          objectFit: 'cover',
        }} />

      {/* Trip Details */}
      <View style={{ flex: 1 }}>
        <Text style={{
          fontFamily: 'bold',
          fontSize: 20,
          color: Colors.primary,
        }}>
          {trip.tripPlan?.trip_details?.destination}
        </Text>
        <Text style={{
          fontSize: 14,
          color: Colors.gray,
          marginTop: 5,
        }}>
          {moment(tripData.startDate).format('DD MMM YYYY')}
        </Text>
        <Text style={{
          fontSize: 14,
          color: Colors.gray,
          marginTop: 3,
        }}>
          {tripData.traveler?.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
