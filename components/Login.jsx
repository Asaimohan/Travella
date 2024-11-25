import React from 'react';
import { View, Image, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import {useRouter} from 'expo-router';


const Login = () => {
  
    const router = useRouter();

  return (
    <View>
      
      
      <View style={styles.container}>
      <Image
        source={require('./../assets/images/logo.png')}
        style={{
          height:200,width:200,marginTop:110,right:-80
        }}/>    
        <Text style={styles.title}>TRAVELLA</Text>
        <Text
        style={{
          fontSize:15,color:Colors.gray,textAlign:'center',marginTop:-10
        }}>Plan,Explore,Experience</Text>
        
        <Text style={styles.paragaph}>Effortlessly plan your next trip with personalized itineraries for local areas of Bilaspur with AI-driven travel insights.</Text>
        <TouchableOpacity onPress={() => router.push('auth/sign-in')}
        style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    height: '100%',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:25
 
  },
  title: {
    fontFamily:'italic',
    fontSize: 70,
    textAlign:'center',
    marginTop:-50  },
  paragaph: {
   
    fontSize: 17,
    textAlign:'center',
    color:Colors.primary,
    marginTop:70
  },
  button: {
    padding: 15,
    backgroundColor: Colors.primary,
    borderRadius:99,
    marginTop:'55%'
  },
  buttonText:{
    
    textAlign:'center',
    color:Colors.white,
    fontSize:17
  },
});

export default Login;