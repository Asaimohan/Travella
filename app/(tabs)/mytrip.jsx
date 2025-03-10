import { 
  View, Text, ActivityIndicator, ScrollView, 
  TouchableOpacity, Modal, StyleSheet 
} from "react-native";
import React, { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";
import { auth, db } from './../../configs/FirebaseConfig';
import { collection, getDocs, query, where } from "firebase/firestore";
import UserTripList from './../../components/MyTrips/UserTripList';
import { useRouter } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const user = auth.currentUser;
  const router = useRouter();

  useEffect(() => {
    if (user) {
      GetMyTrips();
    }
  }, [user]);

  const GetMyTrips = async () => {
    setLoading(true);
    setUserTrips([]);
    const q = query(collection(db, 'UserTrips'), where('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);

    const trips = [];
    querySnapshot.forEach((doc) => {
      trips.push(doc.data());
    });

    setUserTrips(trips);
    setLoading(false);

    // Show custom modal after loading trips
    setShowPopup(true);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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
          <TouchableOpacity onPress={() => router.push("create-trip/searchplace")}>
            <Ionicons name="add-circle" size={40} color="black" />
          </TouchableOpacity>
        </View>
        {loading && <ActivityIndicator size={'large'} color={'#FA812F'} />}
        {userTrips?.length === 0 ? <StartNewTripCard /> : <UserTripList userTrips={userTrips} />}

        {/* Custom Premium Membership Modal */}
        <Modal transparent={true} animationType="slide" visible={showPopup}>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Ionicons name="star" size={50} color="#FFD700" />
      <Text style={styles.modalTitle}>Go Premium ✨</Text>
      <Text style={styles.modalText}>
        Unlock exclusive features with our premium membership. Enjoy priority bookings, discounts, and more!
      </Text>
      <TouchableOpacity 
        style={styles.modalButton} 
        onPress={() => {
          setShowPopup(false);
          router.push("discover"); // Navigate to discover.jsx
        }}
      >
        <Text style={styles.modalButtonText}>Upgrade Now</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowPopup(false)}>
        <Text style={styles.closeText}>Maybe Later</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  modalButton: {
    backgroundColor: "#FA812F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  closeText: {
    marginTop: 10,
    color: "#888",
    fontSize: 14,
  },
});

