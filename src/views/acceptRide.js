import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { withNavigation } from "react-navigation";
import { MapView } from '../components'

class AcceptRide extends React.Component {

    render = () => {
        const { navigation } = this.props
        const address = "4th Block, Sector 5, ABC Road, Koramangla" // replace with address from api
        const distance = 10;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ebc805' }}>
                {renderMap(distance)}
                {renderAcceptRide(address, navigation)}
            </SafeAreaView>
        )
    }
}

const renderMap = (distance) => {
    return (
        <View
            style={{ width: '70%', height: '40%', justifyContent: 'center', alignSelf: 'center', padding: '10%', marginTop: '30%' }}
        >
            <View style={{ borderRadius: 100, borderWidth: 4, borderColor: '#359486', height: '90%', }}>
                <MapView style={95} />
            </View>
            <Text style={{ textAlign: 'center', padding: '5%', fontWeight: 'bold', color: '#359486', fontSize: 18 }}>{`${distance}KM`}</Text>
        </View>
    )
}

const renderAcceptRide = (address, navigation) => {
    return (
        <View style={{ marginTop: '60%' }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 16 }}>Pickup</Text>
            <Text style={{ textAlign: 'center', fontWeight: '400', fontSize: 12, marginLeft: '20%', marginRight: '20%' }}>{address}</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('home')}
                style={{ padding: '3%', backgroundColor: '#359486', margin: '5%' }}
            >
                <Text style={{ textAlign: 'center', fontWeight: '600', color: '#ffffff' }}>Accept Ride</Text>
            </TouchableOpacity>
        </View>
    )
}

export default withNavigation(AcceptRide);