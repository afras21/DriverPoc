import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import SwipeButton from 'rn-swipe-button';
import { right } from '../assets/images'



const StartTrip = (props) => {
    const [isStarted, setStarted] = useState(false)
    const address = "143/B, 60Feet Rd, KHB Block Koramangala, 5th Block, Koramanagala, Bengaluru, Karnataka, 560034"

    const updateState = (status) => {
        setStarted(status);
    }
    return (
        <View style={{ padding: '3%' }}>
            <Text style={{ fontWeight: '600' }}>Pickup Location</Text>
            <Text style={{ fontWeight: '400', fontSize: 12, marginTop: '1%' }}>{address}</Text>
            {!isStarted ? renderStartButton(updateState) : renderEndButton()}

        </View>


    )
}
const renderStartButton = (updateState) => {
    return (
        <View style={{ marginLeft: '1%', marginRight: '1%', marginTop: '4%' }}>

            <SwipeButton
                disableResetOnTap
                railBackgroundColor="#ebc805"
                railBorderColor="#ffffff"
                railStyles={{
                    backgroundColor: '#d42828',
                    borderColor: '#d42828',
                    fontSize: 14
                }}
                thumbIconImageSource={right}
                thumbIconComponent={renderIcon}
                thumbIconBackgroundColor="#d42828"
                thumbIconBorderColor="#FFFFFF"
                title="Start Trip"
                titleColor='#000000'
                onSwipeSuccess={() => { updateState(true) }}
            />
        </View>
    )
}

const renderEndButton = () => {
    console.log('-------_RENDERING END BUTTON------')
    return (
        <View style={{ marginLeft: '5%', marginRight: '5%', marginTop: '2%', backgroundColor: '#ebc805', padding: '1%', borderRadius: 30 }}>
            <TouchableOpacity
                onPress={() => { alert('End Trip') }}
                style={{ backgroundColor: '#d42828', padding: '1%', borderRadius: 30, flexDirection: 'row' }}>
                <Text style={{ textAlign: 'center', width: '88%', color: '#ffffff', fontWeight: '600', justifyContent: 'center', alignSelf: 'center' }}>End Trip</Text>
                <View style={{ borderColor: '#ffffff', borderWidth: 2, borderRadius: 30, height: 37, width: 37, backgroundColor: '#ffffff', justifyContent: 'center', alignSelf: 'center' }}>
                    {renderIcon()}
                </View>
            </TouchableOpacity>
        </View>
    )
}
const renderIcon = () => {
    return (
        <Image source={right} style={{ height: 20, width: 20, justifyContent: 'center', alignSelf: 'center' }} />
    )
}
export default StartTrip;