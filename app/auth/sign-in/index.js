import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { useEffect } from 'react';
import { Colors } from './../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./../../../configs/FirebaseConfig";

export default function Signin() {
  const navigation = useNavigation();
  const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, []);

  const onSignIn = () => {
    if (!email && !password) {
      ToastAndroid.show("Please Enter Email & Password", ToastAndroid.LONG)
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        router.replace('/mytrip')
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        if (errorCode === 'auth/invalid-credential') {
          ToastAndroid.show("Invalid Credential", ToastAndroid.LONG)
        }
      });
  }

  return (
    <View style={{
      paddingTop: 20,
      padding: 35,
      backgroundColor: Colors.white,
      height: '100%'
    }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontSize: 40, marginTop: 30
      }}>Let's Sign You In</Text>
      <Text style={{
        fontSize: 30,
        color: Colors.gray, marginTop: 50
      }}>Welcome Back
      </Text>
      <View style={{
        marginTop: 50
      }}>
        <Text style={{
          fontSize: 20, marginLeft: 10,
        }}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setEmail(value)}
          placeholder='Enter Email' />
      </View>
      <View style={{
        marginTop: 20
      }}>
        <Text style={{
          fontSize: 20, marginLeft: 10,
        }}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            secureTextEntry={!showPassword}
            style={[styles.input, styles.passwordInput]}
            onChangeText={(value) => setPassword(value)}
            placeholder='Enter Password'
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={27} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={onSignIn} style={{
        padding: 20,
        backgroundColor: Colors.primary,
        borderRadius: 15, marginTop: 40
      }}>
        <Text style={{
          color: Colors.white,
          textAlign: 'center'
        }}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace('auth/sign-up')}
        style={{
          padding: 9
        }}>
        <Text style={{
          color: Colors.blue,
          textAlign: 'center'
        }}>Don't have account? Create Account </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 2,
    height: 60,
    borderRadius: 20,
    borderColor: Colors.gray,
    marginTop: 10
  },
  passwordContainer: {
    position: 'relative'
  },
  passwordInput: {
    paddingRight: 50 // Add padding to the right to accommodate the eye button
  },
  eyeButton: {
    position: 'absolute',
    right: 15,
    top: 26, // Center the icon vertically
  }
})
