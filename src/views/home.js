import React from "react";
import { SafeAreaView, View, Text } from 'react-native';
import MapView from "../components/MapView";
import { withNavigation } from "react-navigation";
import {Header, StartTrip, Navigate} from "../components";

class Home extends React.Component {

    render = () => {
        const { navigation } = this.props
        return (
            <View style={{height: '100%'}}>
                <Header />
                {renderMap()}
                 {/* <StartTrip/>  */}
                <Navigate navigation={navigation}/>

            </View>
        )
    }
}
const renderMap = () => {
    return (
        <View style={{height: '70%'}}>
            <MapView />
        </View>
    )
}

export default withNavigation(Home);