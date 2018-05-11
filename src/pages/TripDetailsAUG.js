import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, TouchableHighlight, Button, View } from 'react-native';
import Totalen from '../components/Totalen';
class TripDetailsAUG extends Component {
    constructor(props) {
        super(props);
        this.state = {
           


        };
    }
    expenses(trip,nav) {
        console.log(this.props);
        return  this.props.expenses.map(function(key){
              if(trip.id===key.tripID){
                 
              return (
                  <TouchableHighlight key={key.expenseID}
                    onPress={() => nav.navigate('EditExpense', { expense:key,trip:trip })}
                  >
                    <Text > {key.description} : {key.amount} flappe</Text>
                  </TouchableHighlight>

               );
               
              }
          })
        }

   /*  trips() {

        const expensess = [];
        if (this.props.expenses!=null) {
            this.props.expenses.forEach(
                function (item) {
                    if (item.tripID === this.props.navigation.state.params.trip.id) {
                        expensess.push(item);
                    }
                }
            , this);
        }
        return Object.keys(expensess).map(key => expensess[key])
      }    
fix(trip,n){
    this.props.navigation.navigate('NewExpense', { trip })
    navigation={n};
}*/
    render() {
        const trip = this.props.navigation.state.params.trip;
        console.log(trip);
        return (
            <ScrollView style={{ padding: 20 }}>
                <Text>{trip.text}</Text>
              {/*   { this.trips().map((expense) => {
                    return (
                        <TouchableHighlight onPress={() => this.onTripPress(trip)}>
                          <Text key={expense.id}> {expense.description}</Text>
                        </TouchableHighlight>
                    );   
                })}
 */}
<Text >A list of all the expenses: </Text>
      { this.expenses(trip,this.props.navigation)}

                <Button 
                //    onPress={() => this.fix(trip,this.props.navigation)} 
                    onPress={() => this.props.navigation.navigate('NewExpense', { trip })} 
                
                    title='New Expense'
                    navigation={this.props.navigation}
                />
                <View>
<Totalen expense={this.props.expenses[0]}/>
</View>
            </ScrollView>
        );
    }
}



  
    
  
const mapStateToProps = (state) => {
    return {
      expenses: state.expenseAUG.expenses,
    };
};
 
export default connect(mapStateToProps)(TripDetailsAUG);
