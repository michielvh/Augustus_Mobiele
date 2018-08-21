import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import TripTabNavAUG from '../navigators/TripTabNavAUG';

class BillsPage extends Component {
    
    render() {
        return (
            <ScrollView>
                <TripTabNavAUG />
            </ScrollView>
        );
    }
}

export default BillsPage;
