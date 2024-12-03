import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Colors } from '../../constants/Colors'
import FastImage from 'react-native-fast-image'
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT } from '../../constants/Options';

export default function generateTrip() {
    const { tripData, setTripData } = useContext(CreateTripContext);

    useEffect(() => {
        tripData&&GenerateAiTrip()
    }, [tripData])

    const GenerateAiTrip=()=>{
        const FINAL_PROMPT=AI_PROMPT
            .replace('{location}', tripData?.locationInfo?.name)
            .replace('{totalDays}', tripData?.totalNoOfDays)
            .replace('{totalNight}', tripData?.totalNoOfDays-1)
            .replace('{traveler}', tripData?.traveler?.title)
            .replace('{budget}', tripData?.budget)
            .replace('{totalDays}', tripData?.totalNoOfDays)
            .replace('{totalNight}', tripData?.totalNoOfDays-1)

        console.log(FINAL_PROMPT);


    }
    return (
        <View style={{
            padding: 25,
            paddingTop: 50,
            backgroundColor: Colors.white,
            height: '100%'
        }}>
            <Text style={{
                fontFamily: 'bold',
                fontSize: 40, textAlign: 'center'
            }}> Please Wait ...</Text>
            <Text style={{
                fontFamily: 'bold',
                fontSize: 15, textAlign: 'center'
            }}> We are working to generate your trip</Text>
            <Image
             source={require('./../../assets/images/loading.gif')}
                style={{
                    height: 200,
                    width: '100%'
                    , resizeMode: 'contain', marginTop:20
                }} />
            <Text style={{
                fontFamily: 'bold',
                color: Colors.gray,
                fontSize: 20, textAlign: 'center',marginTop:2
            }}>Do Not Go Back</Text>
        </View>
    )
}