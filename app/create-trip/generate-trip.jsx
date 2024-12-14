import { View, Text, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { CreateTripContext } from '../../context/CreateTripContext';
import { AI_PROMPT } from '../../constants/Options';
import { chatSession } from '../../configs/AiModel';
import { useRouter } from 'expo-router';
import { auth, db } from './../../configs/FirebaseConfig'
import { doc, setDoc } from 'firebase/firestore';

export default function generateTrip() {
    const { tripData, setTripData } = useContext(CreateTripContext);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const user = auth.currentUser;
    useEffect(() => {
        GenerateAiTrip();
    }, [])

    const GenerateAiTrip = async () => {
        setLoading(true);
        const FINAL_PROMPT = AI_PROMPT
            .replace('{location}', tripData?.locationInfo?.name)
            .replace('{totalDays}', tripData?.totalNoOfDays)
            .replace('{totalNight}', tripData?.totalNoOfDays - 1)
            .replace('{traveler}', tripData?.traveler?.title)
            .replace('{budget}', tripData?.budget)
            .replace('{totalDays}', tripData?.totalNoOfDays)
            .replace('{totalNight}', tripData?.totalNoOfDays - 1)
            ;

        console.log(FINAL_PROMPT);

        const result = await chatSession.sendMessage(FINAL_PROMPT);
        console.log(result.response.text());
        const tripResp = JSON.parse(result.response.text());
        setLoading(false)
        const docId = (Date.now()).toString();
        const result_ = await setDoc(doc(db, "UserTrips", docId), {
            userEmail: user.email,
            tripPlan: tripResp,
             tripData:JSON.stringify(tripData),
             docId:docId
        })
        router.push('/mytrip')
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
                source={require('./../../assets/images/plane.gif')}
                style={{
                    height: 200,
                    width: '100%',
                    resizeMode: "contain"
                }} />
            <Text style={{
                fontFamily: 'bold',
                color: Colors.gray,
                fontSize: 20, textAlign: 'center', marginTop: 2
            }}>Do Not Go Back</Text>
        </View>
    )
}