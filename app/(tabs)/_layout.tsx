import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { Colors } from './../../constants/Colors';
export default function TabLayout() {
  return (
  <Tabs screenOptions={{
    headerShown:false,
    tabBarActiveTintColor:Colors.primary
  }}>
    <Tabs.Screen name="mytrip"
    options={{
      tabBarLabel:'My Trip',
      tabBarIcon:({color})=><Ionicons name="location-sharp" size={24} color={color} />
    }}/>
    <Tabs.Screen name="discover"
      options={{
        tabBarLabel:'Premium',
      tabBarIcon:({color})=><MaterialIcons name="workspace-premium" size={24} color={color} />
      }}/>
    <Tabs.Screen name="profile"
    options={{
        tabBarLabel:'Profile',
      tabBarIcon:({color})=><MaterialCommunityIcons name="card-account-details-outline" size={24} color={color} />
      }}
    />
  </Tabs>
  )
}
