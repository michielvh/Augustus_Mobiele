import React, { Component } from 'react';
import {  Text, TextInput, View, Button,Picker } from 'react-native';
import { connect } from 'react-redux';
import { createNewExpense } from '../redux/actions/expenseAUG';


class ExpenseAUG extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenseID: uid(),
amount : '',
description:'',
categorie:'Overige',
date:today(new Date()),
items:[1],
created: false,
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
       if(this.state.created===false){ 
        this.props.onAddExpense(this.state.expenseID,this.state.amount,this.state.description,this.props.navigation.state.params.trip.id,this.state.categorie,this.state.date,this.state.items);
       
               }        this.setState({created: true});
        this.props.navigation.navigate('NewItem',  this.state.expenseID );
    }

    bereken(){
        
    }
    render() {
        var bedragske=0;
    /*     var x=0;
        var xxx=this.props.items.map(function(key,val,array){
            
            if(key.expenseID===this.state.expenseID){
             x+=key.amount;
         }
             return x;
            
         }) */
        // console.log(xxx);
        console.log(this.props.navigation.state.params);
        console.log(this.props.categories);
        console.log(this.state.categorie);
        console.log(this.state.date);
        console.log(this.state.expenseID); //werkt
      //  console.log(this.props.navigation.state.params.trip.id);
        return (
            <View><Text>Totaal Bedrag: </Text>
               <TextInput 
                  onChangeText={(text) => this.onChange(text)}
                  value={this.state.amount} //NAAR props.amount veranderen?
                />
                
                <Text>Currencylijst adden</Text>
                <Text>Al afgerekend:</Text>
                <Text>Resterend:</Text>
{this.props.items.map(function(key,val,array){
            if(key.expenseID){  
                bedragske+=key.amount;
                //
                //DIT IS OPLOSSING!!!
                //CHECK OF EXPENSEID BESTAAT!!
                //
                return <Text>{key.expenseID} : {bedragske}</Text>

            }
    /* if(key.expenseID===this.state.expenseID){
     x+=key.amount;
 }
     return x; */
    
 })}
                <Text>Omschrijving: </Text>
               <TextInput 
                  onChangeText={(text) => this.setState({ description:text})}
                  value={this.state.description} //NAAR props.amount veranderen?
                />
 <Picker
                    selectedValue={this.state.categorie}
                    onValueChange={(itemValue, itemIndex) => this.setState({categorie: itemValue })}>
                    
                    {this.props.categories.map(function(key, val, array){
        
    
            
            return  <Picker.Item key={key} label={key} value={key} />
             
                
    
            })}
                </Picker>

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
     // items: state.expense.item,
      //expense: state.expense,
      stateee: state,
      categories: state.categories.categories,
      expenses: state.expenseAUG.expenses,
        items: state.kostItemAUG.items,
      //trips: state.trips.trips
    };
  };
 
  const mapDispatchToProps = (dispatch) => {
      return {
          onAddExpense: (expenseID,amount,description,tripID,categorie,date,items) => { dispatch(createNewExpense(expenseID,amount,description,tripID,categorie,date,items)); },
          onAddExpenseObject: (expense,tripID) => { dispatch(addExpenseObject(expense,tripID)); }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ExpenseAUG);

  const  uid = () => Math.random().toString(34).slice(2);
  //const today = () => new Date();
  const today = (x) => {
    var dd = x.getDate();
    var mm = x.getMonth()+1; //January is 0!
    var yyyy = x.getFullYear();
    
    if(dd<10) {
        dd = '0'+dd
    } 
    
    if(mm<10) {
        mm = '0'+mm
    } 
    
    return dd + '/' + mm + '/' + yyyy;
  } ;