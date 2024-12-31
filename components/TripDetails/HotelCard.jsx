import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GetPhotoRef } from '../../services/GooglePlaceApi';

export default function Hotelcard({ item }) {
  const [photoRef, setPhotoRef] = useState(null);

  useEffect(() => {
    GetGooglePhotoRef();
  }, []);

  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef(item.HotelName);
    if (result.results?.length > 0 && result.results[0].photos?.length > 0) {
      setPhotoRef(result.results[0].photos[0].photo_reference);
    }
  };

  return (
    <View style={{ marginRight: 15, width: 180 }}>
      <Image
        source={{
          uri: photoRef
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`
            : 'https://via.placeholder.com/180x120', // Placeholder URL
        }}
        style={{
          width: 180,
          height: 120,
          borderRadius: 15,
        }}
      />
      <View>
        <Text
          style={{
            fontFamily: 'bold',
            fontSize: 15,
            textAlign: 'center',
          }}
        >
          {item.HotelName}
        </Text>
        <View style={{ gap: 5 }}>
          <Text>⭐ {item.rating}</Text>
          <Text>💰 {item.Price}</Text>
        </View>
      </View>
    </View>
  );
}
