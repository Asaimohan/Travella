import { View, Text, ActivityIndicator,ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "./../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { auth, db } from './../../configs/FirebaseConfig'
import { collection, getDocs, query, where } from "firebase/firestore";
import UserTripList  from './../../components/MyTrips/UserTripList'

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);
  const user = auth.currentUser;
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    user && GetMyTrips()
  }, [user])
  

  const GetMyTrips = async () => {
    setLoading(true);
    setUserTrips([]);
    const q = query(collection(db, 'UserTrips'),where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setUserTrips(prev => [...prev, doc.data()])
    });
    
    setLoading(false);
  }
  return (
    <ScrollView
      style={{
        padding: 25,
        paddingTop: 25,
        backgroundColor: "white",
        height: "100%",
      }}
    >

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 35,

            fontFamily: "bold",
          }}
        >
          My Trips
        </Text>
        <Ionicons name="add-circle" size={40} color="black" />
      </View>
      {loading && <ActivityIndicator size={'large'} color={'#FA812F'} />}
      {userTrips?.length === 0 ? 
      <StartNewTripCard /> : 
    <UserTripList userTrips={userTrips}/>
      
      }
    </ScrollView>
  );
}
