import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

/**
 * Screens
 */

import { AcceptRide, Home, Route } from '../views'

const HomeNavigator = () => {
    return (
        <MainNavigator.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={'acceptRide'}
        >
            <MainNavigator.Screen name="home" component={Home}/>
            <MainNavigator.Screen name="acceptRide" component={AcceptRide}/>
            <MainNavigator.Screen name="route" component={Route}/>

        </MainNavigator.Navigator>
    )
}
export const MainNavigator = createStackNavigator();

export default HomeNavigator