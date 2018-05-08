import React, { Component } from 'react';
import {  Text, TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { createNewExpense } from '../redux/actions/expenseAUG';


class ExpenseAUG extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenseID: uid(),
amount : '0',
         };
    }
    onChange(text) {
        let newText = '';
        let numbers = '0123456789.';

        for (var i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            }
        }
        this.setState({ amount: newText })
    }

    createNewExpense(){
        this.props.onAddExpense(this.state.expenseID,this.state.amount,this.state.description,this.props.navigation.state.params.trip.id);
        this.props.navigation.navigate('NewItem',  this.state.expenseID );
    }

    render() {
        console.log(this.state.expenseID); //werkt
        console.log(this.props.navigation.state.params.trip.id);
        return (
            <View><Text>Totaal Bedrag: </Text>
               <TextInput 
                  onChangeText={(text) => this.onChange({ text})}
                  value={this.state.amount} //NAAR props.amount veranderen?
                />
                <Button onPress={() => //this.props.navigation.navigate('NewExpense', { trip })} 
               this.createNewExpense() }
                title='+'
                navigation={this.props.navigation}/>
                
           </View>
        );
    }
}
 const mapStateToProps = (state) => {
    return {
      items: state.expense.item,
      expense: state.expense,
      stateee: state
      //trips: state.trips.trips
    };
  };
 
  const mapDispatchToProps = (dispatch) => {
      return {
          onAddExpense: (expenseID,amount,description,tripID) => { dispatch(createNewExpense(expenseID,amount,description,tripID)); },
          onAddExpenseObject: (expense,tripID) => { dispatch(addExpenseObject(expense,tripID)); }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ExpenseAUG);

  const  uid = () => Math.random().toString(34).slice(2);
