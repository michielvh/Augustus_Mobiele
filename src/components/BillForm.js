import React, { Component } from 'react';
import { Text, TextInput, ScrollView, TouchableHighlight, View, } from 'react-native';
import { connect } from 'react-redux';
import { addExpense, addExpenseObject } from '../redux/actions/expenses';
import Item from '../components/Item';

 class BillForm extends Component {
    constructor(props) {
        super(props);
        this.state = { description: '',
                      amount: '',
                      whopaid: '' };
    }

    addexpense() {
        this.props.onAddExpense(this.state.amount, this.state.description, this.state.whopaid, this.props.navigation.state.params.trip.id);
        this.props.navigation.goBack(null);
    }
    addexpenseobject() {
      this.props.onAddExpenseObject(this.props.expense, this.props.navigation.state.params.trip.id);
      this.props.navigation.goBack(null);
  }
    items() {
      return Object.keys(this.props.items).map(key => this.props.items[key]);
    }

  render() {
      console.log(this.props);
     
    return (
        <ScrollView>
          
          <View>
          <Text>{this.props.expense.amount}</Text>

            <Item />
            
            { this.items().map((expense) => { return <Text key={expense.description}> {expense.description}</Text>})}
            <TouchableHighlight onPress={() => this.addexpenseobject()}>
              <Text>Add expenseobject</Text>
            </TouchableHighlight>
          </View>
            <View>
                <TextInput 
                  onChangeText={(text) => this.setState({description : text})}
                  value={this.state.description}
                />
                <TextInput 
                  onChangeText={(text) => this.setState({amount : text})}
                  value={this.state.amount}
                />
                <TextInput 
                  onChangeText={(text) => this.setState({whopaid : text})}
                  value={this.state.whopaid}
                />
            
            <TouchableHighlight onPress={() => this.addexpense()}>
              <Text>Add trip</Text>
            </TouchableHighlight>
              
            </View>
            
      </ScrollView>
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
  export default connect(mapStateToProps, mapDispatchToProps)(BillForm);