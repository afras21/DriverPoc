import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps'
import { marker } from "../assets/images";


const MapViewHelper = (props) => {
    console.log('----------PROPS.STYLE---------', props.style)
    return (
            <MapView
                style={[styles.map, {borderRadius: props?.style || 0}]}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                >
                    <Image source={marker} style={{ height: 60, width: 60 }} />
                </Marker>
            </MapView>
    )
}
const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        // borderRadius: 100
    },
});
export default MapViewHelper;