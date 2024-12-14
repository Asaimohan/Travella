// Import the necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUzBo5xuvjRI8eLT1ygQUZRInOXkwgdY0",
  authDomain: "travella-b2e16.firebaseapp.com",
  projectId: "travella-b2e16",
  storageBucket: "travella-b2e16.firebasestorage.app",
  messagingSenderId: "581497929369",
  appId: "1:581497929369:web:b4758083fdc127d259c208",
  measurementId: "G-56CXBDJZY9",
};

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Initialize Firebase Auth with AsyncStorage persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
