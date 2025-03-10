import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Colors } from './../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Discover() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: Colors.white, padding: 20 }}>
      {/* Header */}
      <View style={{ alignItems: 'center', marginTop: 40 }}>
        <Ionicons name="diamond" size={80} color="#FFD700" />
        <Text style={{ fontSize: 27, fontWeight: 'bold', marginVertical: 10 }}>
          Unlock Premium Features ✨
        </Text>
        <Text style={{ fontSize: 16, textAlign: 'center', color: '#555' }}>
          Enjoy exclusive benefits, priority access, and special discounts!
        </Text>
      </View>
      
      {/* Features */}
      <View style={{ marginTop: 30 }}>
        <FeatureCard icon="star" title="Exclusive Discounts" desc="Save up to 50% on premium deals and offers." />
        <FeatureCard icon="flash" title="Priority Support" desc="Get 24/7 priority support from our team." />
        <FeatureCard icon="infinite" title="Unlimited Access" desc="Enjoy all premium features without limits." />
        <FeatureCard icon="gift" title="Special Rewards" desc="Receive surprise rewards and premium perks." />
      </View>
      
      {/* Upgrade Button */}
      <TouchableOpacity
        style={{
          backgroundColor: '#FA812F',
          paddingVertical: 15,
          borderRadius: 10,
          alignItems: 'center',
          marginTop: 40,
        }}
        onPress={() => router.push("Payment/PremiumPayment")}
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Upgrade to Premium</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const FeatureCard = ({ icon, title, desc }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 15 }}>
    <Ionicons name={icon} size={30} color="#FA812F" style={{ marginRight: 15 }} />
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
      <Text style={{ fontSize: 14, color: '#555' }}>{desc}</Text>
    </View>
  </View>
);
