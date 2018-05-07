import React, { Component } from 'react';
import {  Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';



class ExpenseAUG extends Component {
    constructor(props) {
        super(props);
        this.state = {

         };
    }



    render() {
        return (
            <View><Text>Bedrag: </Text>
               <TextInput 
                  onChangeText={(text) => this.setState({amount : text})}
                  value={this.state.amount} //NAAR props.amount veranderen?
                />
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
          onAddExpense: (amount,description,whopaid,tripID) => { dispatch(addExpense(amount,description,whopaid,tripID)); },
          onAddExpenseObject: (expense,tripID) => { dispatch(addExpenseObject(expense,tripID)); }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ExpenseAUG);
