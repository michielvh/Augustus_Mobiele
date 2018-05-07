import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ExpenseAUG from '../components/ExpenseAUG';
import ItemAUG from '../components/ItemAUG';


class ExpensePage extends Component {
    
    render() {
        return (
            <ScrollView>
                <ExpenseAUG />
                <ItemAUG />
            </ScrollView>
        );
    }
}

export default ExpensePage;
