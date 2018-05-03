import React, { Component } from 'react';
import { Alert, Text, StyleSheet, FlatList, View, TouchableHighlight } from 'react-native';
import styles2 from '../styles/styles';

export default class BillList extends Component {
    render() {
        return (
            <View> 
                <Text style={styles.titleText}>A list of all the bills: </Text>   
                <FlatList
                data={dummyBills}
                renderItem={({ item }) => (
                    <TouchableHighlight 
                        onPress={() => Alert.alert('You tapped the button!')} 
                    >
                        <View style={styles2.container}>
                            <Text> {item.debtor} owes money to {item.creditor}:  {item.amount} {item.currency} </Text>
                        </View>
                    </TouchableHighlight> 
                )
                }
                />
            </View>
        );
    }
}

const dummyBills = [ 
        { id: 0, isPayed: false, creditor: 'Pieter', debtor: 'Tom', amount: '40.00', currency: 'EUR' },
        { id: 0, isPayed: false, creditor: 'Pieter', debtor: 'Michiel', amount: '15.00', currency: 'USD' },
        { id: 0, isPayed: false, creditor: 'Tom', debtor: 'Pieter', amount: '4.00', currency: 'GBP' },
];

const styles = StyleSheet.create({

    loginButton: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#841584',
    },
    titleText: {
        fontSize: 20, 
        fontWeight: 'bold',
    }
    
});
