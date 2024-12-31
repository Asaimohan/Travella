import { View, Text, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import moment from 'moment';
import Flightinfo from '../../components/TripDetails/FlightInfo';
import HotelList from '../../components/TripDetails/HotelList';
import PlannedTrip from '../../components/TripDetails/PlannedTrip';
import { GetPhotoRef } from '../../services/GooglePlaceApi';

export default function TripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState(null);
const [photoRef, setPhotoRef] = useState(null);
   useEffect(() => {
    GetGooglePhotoRef();
  }, []);

  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef(tripDetails?.tripPlan?.trip_details?.destination);
    if (result.results?.length > 0 && result.results[0].photos?.length > 0) {
      setPhotoRef(result.results[0].photos[0].photo_reference);
    }
  };
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: ''
    });

    if (trip && typeof trip === 'string') {
      try {
        setTripDetails(JSON.parse(trip));
      } catch (error) {
        console.error('Error parsing trip details:', error);
      }
    }
  }, [trip]);

  if (!tripDetails) {
    return (
      <View>
        <Text style={{ textAlign: 'center', marginTop: 20 }}>
          No trip details available
        </Text>
      </View>
    );
  }

  const tripData = tripDetails.tripData ? JSON.parse(tripDetails.tripData) : {};
  const startDate = tripData?.startDate || null;
  const formattedDate = startDate ? moment(startDate).format('DD.MM.YYYY') : 'N/A';
  const title = tripData?.traveler?.title;

  const renderContent = () => (
    <>
      <Image
        source={{
          uri: photoRef
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
            : 'https://via.placeholder.com/180x120', // Placeholder URL
        }}
        style={{
          height: 330,
          width: '100%',
        }}
      />
      <View
        style={{
          padding: 15,
          backgroundColor: Colors.white,
          marginTop: -30,
          borderRadius: 30,
        }}
      >
        <Text
          style={{
            fontFamily: 'bold',
            fontSize: 30,
            textAlign: 'center',
            marginTop: -10,
          }}
        >
          {tripDetails?.tripPlan?.trip_details?.destination || 'Unknown Destination'}
        </Text>
        <View style={{ gap: 4 }}>
          <Text style={{ fontFamily: 'bold', fontSize: 20 }}>
            Budget: {tripDetails?.tripPlan?.trip_details?.budget || 'Unknown Budget'}
          </Text>
          <Text style={{ fontFamily: 'bold', fontSize: 20 }}>
            Date: {formattedDate}
          </Text>
          <Text style={{ fontFamily: 'bold', fontSize: 20 }}>
            Travelers: {title}
          </Text>
        </View>
        {/* Flight Details */}
        <Flightinfo flightData={tripDetails?.tripPlan?.flights?.flight_details} />
        {/* Hotel Details */}
        <HotelList hotelList={tripDetails?.tripPlan?.hotels} />
        {/* Day Plans */}
        <PlannedTrip daydetails={tripDetails?.tripPlan?.day_plans} />
      </View>
    </>
  );

  return (
    <FlatList
      data={[{ key: 'content' }]} // Single item to wrap the scrollable content
      renderItem={renderContent}
      keyExtractor={(item) => item.key}
    />
  );
}
