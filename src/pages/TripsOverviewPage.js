import React, { Component } from 'react';
import { ScrollView, Button } from 'react-native';
import Trips from '../components/Trips';

class TripsOverviewPage extends Component {
    render() {
        return (
            <ScrollView>
                <Trips navigation={this.props.navigation} />
                <Button 
                    title='Add a new trip' 
                    onPress={() => this.props.navigation.navigate('AddTrip')} 
                    navigation={this.props.navigation}
                />
            </ScrollView>
        );
    }
}

export default TripsOverviewPage;
