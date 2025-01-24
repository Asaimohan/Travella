import {View,Text,TextInput,StyleSheet,TouchableOpacity,ToastAndroid,} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "./../../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../configs/FirebaseConfig";

export default function Signup() {
  const navigation = useNavigation();
  const router = useRouter();

  // State initialization
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onCreateAccount = () => {
    // Validation
    if (!fullname || !email || !password) {
      ToastAndroid.show("Please enter all details", ToastAndroid.BOTTOM);
      return;
    }

    // Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        router.replace("/mytrip");
        ToastAndroid.show("Account Created Successfully!", ToastAndroid.BOTTOM);
        // Navigate to sign-in page
        router.replace("auth/sign-in");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        ToastAndroid.show(errorMessage, ToastAndroid.BOTTOM);
      });
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Create New Account</Text>

      {/* Full Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
          value={fullname}
          onChangeText={setFullName}
        />
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, styles.passwordInput]}
            placeholder="Enter Password"
            value={password}
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeButton}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={28}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Create Account Button */}
      <TouchableOpacity style={styles.createAccountButton} onPress={onCreateAccount}>
        <Text style={styles.createAccountButtonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Navigate to Sign-In Page */}
      <TouchableOpacity onPress={() => router.replace("auth/sign-in")} style={styles.goBackButton}>
        <Text style={styles.goBackButtonText}>Go back to Sign in page</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 20,
    backgroundColor: Colors.white,
    height: "100%",
  },
  title: {
    fontSize: 30,
    marginTop: 30,
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 20,
    marginLeft: 10,
  },
  input: {
    padding: 15,
    borderWidth: 2,
    height: 60,
    borderRadius: 20,
    borderColor: Colors.gray,
    marginTop: 10,
  },
  passwordContainer: {
    position: "relative",
  },
  passwordInput: {
    paddingRight: 50, // Add padding to accommodate the eye button
  },
  eyeButton: {
    position: "absolute",
    right: 15,
    top: 25, // Vertically center the icon in the input field
  },
  createAccountButton: {
    padding: 15,
    backgroundColor: Colors.primary,
    borderRadius: 15,
    marginTop: 40,
    alignItems: "center",
  },
  createAccountButtonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  goBackButton: {
    padding: 10,
    marginTop: 20,
  },
  goBackButtonText: {
    color: Colors.primary,
    textAlign: "center",
    fontSize: 20,
  },
});
