import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Bills from '../components/BillList';

class BillsPage extends Component {
    
    render() {
        return (
            <ScrollView>
                <Bills />
            </ScrollView>
        );
    }
}

export default BillsPage;
