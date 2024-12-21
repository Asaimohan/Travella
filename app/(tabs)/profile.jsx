import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native';
import { useRouter } from 'expo-router';
import { signOut, updateEmail, updatePassword } from 'firebase/auth';
import { auth } from '../../configs/FirebaseConfig';
import { Colors } from '../../constants/Colors';

export default function Profile() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState(auth?.currentUser?.email || '');
  const [password, setPassword] = useState('');

  const handleUpdateProfile = () => {
    if (!email && !password) {
      ToastAndroid.show('Please enter email or password to update', ToastAndroid.LONG);
      return;
    }

    // Update email
    if (email && email !== auth.currentUser.email) {
      updateEmail(auth.currentUser, email)
        .then(() => ToastAndroid.show('Email updated successfully', ToastAndroid.LONG))
        .catch((error) => {
          console.error(error.message);
          ToastAndroid.show('Failed to update email', ToastAndroid.LONG);
        });
    }

    // Update password
    if (password) {
      updatePassword(auth.currentUser, password)
        .then(() => ToastAndroid.show('Password updated successfully', ToastAndroid.LONG))
        .catch((error) => {
          console.error(error.message);
          ToastAndroid.show('Failed to update password', ToastAndroid.LONG);
        });
    }
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        ToastAndroid.show('Signed out successfully', ToastAndroid.LONG);
        router.replace('/auth/sign-in');
      })
      .catch((error) => {
        console.error(error.message);
        ToastAndroid.show('Failed to sign out', ToastAndroid.LONG);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          placeholder="Enter new password"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleUpdateProfile}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity  onPress={handleSignOut}>
        <View style={{ marginTop:15}}>
        <Text style={{color:Colors.blue,textAlign:'center',fontFamily:'bold'}}>Sign Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    color: Colors.gray,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.gray,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    backgroundColor: Colors.lightGray,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  // signOutButton: {
  //   backgroundColor: Colors.blue,
  // },
});
