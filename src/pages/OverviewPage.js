import React, { Component } from 'react';
import { ScrollView, Text, View, } from 'react-native';
import Logo from '../components/Logo';
import Currency from '../components/Currency';

class OverviewPage extends Component {
    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }
    render() {
        return (
            <View>
                <ScrollView>
                    <Text style={{ fontSize: 24 }}>
                        Welkom op de Karavaan VZW app!
                    </Text>
                    <Text>
                        Currencytest : 
                    </Text>
                    <Currency base={'USD'} amount={'2'} /> 
                </ScrollView>
            </View>
        );
    }
}
 
export default OverviewPage;
