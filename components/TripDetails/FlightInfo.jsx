import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/Colors';

export default function Flightinfo({ flightData = [] }) {
  const openWebsite = (url) => {
    Linking.openURL(url).catch(() => alert('Failed to open link'));
  };

  return (
    <View style={{ marginTop: 5, padding: 10 }}>
      <Text style={{ fontFamily: 'bold', fontSize: 25 }}>✈️ Flight details</Text>
      <FlatList
        data={flightData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View >
            <Text style={{ fontFamily: 'bold', marginLeft: 10 }}>🛬 {item.flight_name}</Text>
            <Text style={{ fontFamily: 'bold', marginLeft: 10 }}>💰 {item.price}</Text>

            <TouchableOpacity >
              <Text style={{ marginLeft: 10, color: Colors.blue }}>🔗 {item.booking_url}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => openWebsite('https://www.goibibo.com/flights/')}
              style={{
                padding: 10,
                backgroundColor: Colors.primary,
                borderRadius: 20,
                marginTop: 10,
                alignSelf: 'flex-end',
              }}
            >
              <Text style={{ color: Colors.white, textAlign: 'center' }}>Book Here</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
