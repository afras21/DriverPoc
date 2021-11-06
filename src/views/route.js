import React from "react";
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";
import { MapView } from "../components";
import {call, cancel} from '../assets/images'

class Home extends React.Component {

    render = () => {
        const { navigation } = this.props
        return (
            <View style={{ height: '100%' }}>
                {renderMap()}
                {renderEta()}

            </View>
        )
    }
}
const renderMap = () => {
    return (
        <View style={{ height: '90%' }}>
            <MapView />
        </View>
    )
}

const renderEta = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopRightRadius: 10, borderTopLeftRadius: 10, padding: '2%' }}>
            <View style={{ padding: '2%' }}>
                <Text style={{ fontWeight: '800', fontSize: 18 }}> 10 MIN  </Text>
                <Text> 10KM . 6:00PM  </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: '2%', padding: '2%' }}>

                <TouchableOpacity 
                    style={{backgroundColor: '#ebc805', padding: '5%', borderRadius: 30, height: 32, width: 32, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={call} style={{height: 20, width: 20}}/>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{backgroundColor: '#d42828', padding: '5%', borderRadius: 30, height: 32, width: 32, justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={cancel} style={{height: 20, width: 20}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default withNavigation(Home);