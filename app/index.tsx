import { View } from "react-native";
import Login from "../components/Login";
import { auth } from "./../configs/FirebaseConfig";
import { Redirect } from "expo-router";
import StartNewTripCard from "./../components/MyTrips/StartNewTripCard";

export default function Index() {
  const user = auth.currentUser;

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {user ? <Redirect href={"/mytrip"} /> : <Login />}
    </View>
  );
}
