import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import SwipeButton from 'rn-swipe-button';
import { gps } from '../assets/images'



const Navigate = (props) => {
    console.log('--Navigate---', props)
    const {navigation} = props
    const address = "143/B, 60Feet Rd, KHB Block Koramangala, 5th Block, Koramanagala, Bengaluru, Karnataka, 560034"

    return (
        <View style={{ padding: '3%' }}>
            <Text style={{ fontWeight: '600' }}>Pickup Location</Text>
            <Text style={{ fontWeight: '400', fontSize: 12, marginTop: '1%' }}>{address}</Text>
            {renderNavigateButton(navigation)}
        </View>


    )
}


const renderNavigateButton = (navigation) => {
    console.log('-------_RENDERING END BUTTON------')
    return (
        <View style={{ marginLeft: '1%', marginRight: '1%', marginTop: '4%'}}>
            <TouchableOpacity
                onPress={() => { navigation.navigate('route') }}
                style={{ backgroundColor: '#ebc805', padding: '1%', borderRadius: 3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 37, width: 37, justifyContent: 'center', alignSelf: 'center' }}>
                    {renderIcon()}
                </View>
                <Text style={{ textAlign: 'center', fontWeight: '600', justifyContent: 'center', alignSelf: 'center' }}>Navigate</Text>

            </TouchableOpacity>
        </View>
    )
}
const renderIcon = () => {
    return (
        <Image source={gps} style={{ height: 20, width: 20, justifyContent: 'center', alignSelf: 'center' }} />
    )
}
export default Navigate;