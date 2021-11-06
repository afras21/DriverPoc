import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import { SafeAreaView } from "react-navigation";

const SECTIONS = [
    {
        title: 'Second',
    },
];


class Header extends React.Component {
    state = {
        activeSections: [],
    };

    _renderSectionTitle = (section) => {
        return (
            <View>
                <Text>{section.content}</Text>
            </View>
        );
    };

    _renderHeader = (section) => {
        return (
            <View>
                <Text style={{ textAlign: 'center', fontWeight: '600' }}>Jhon Linclon</Text>
            </View>
        );
    };

    _renderContent = (section) => {
        return (
            <View >
                <TouchableOpacity 
                style={{ justifyContent: 'center', alignContent: 'center', backgroundColor: '#ffffff', width: '80%', marginLeft: '10%', marginRight: '10%', padding: '2%', marginTop: '2%' }}>
                    <Text style={{ textAlign: 'center', fontWeight: '600' }}>Call +9192929290989</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{ justifyContent: 'center', alignContent: 'center', backgroundColor: '#d42828', width: '80%', marginLeft: '10%', marginRight: '10%', padding: '2%', marginTop: '2%' }}>
                    <Text style={{ textAlign: 'center', color: '#ffffff', fontWeight: '600' }}>Cancel Booking</Text>
                </TouchableOpacity>
            </View>
        );
    };

    _updateSections = (activeSections) => {
        this.setState({ activeSections });
    };

    render() {
        return (
            <View style={{ backgroundColor: '#ebc805', paddingTop: '10%', paddingBottom: '5%' }}>
                <Accordion
                    sections={SECTIONS}
                    activeSections={this.state.activeSections}
                    renderSectionTitle={this._renderSectionTitle}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                />
            </View>

        );
    }
}

export default Header;