import React, { Component } from 'react';
import {  Text, TextInput, View, Button,Picker,TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { createNewExpense,updateExpense } from '../redux/actions/expenseAUG';


class ExpenseAUG extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expenseID: uid(),
amount : '',
description:'',
categorie:'Overige',
date:today(new Date()),
items:[/*1*/],
created: false,
currency:this.props.navigation.state.params.trip.currency
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
    updateExpense(){
        if(this.props.navigation.state.params.expense){
            this.props.onUpdateExpense(this.state.expenseID,this.state.amount,this.state.description,this.props.navigation.state.params.trip.id,this.state.categorie,this.state.date,this.state.items,this.state.currency);

        }
        if(this.state.created===true){
            this.props.navigation.goBack(null);
        }
       
    }

    createNewExpense(){
       if(this.state.created===false){ 
        this.props.onAddExpense(this.state.expenseID,this.state.amount,this.state.description,this.props.navigation.state.params.trip.id,this.state.categorie,this.state.date,this.state.items,this.state.currency);
       
               }        this.setState({created: true});
        this.props.navigation.navigate('NewItem',  this.state.expenseID );
    }

    bereken(lala){
       var xoxox=0;
       console.log(lala);
        for(let x of this.props.items){
            //lala is tripObject, nog wegwerken!
            xoxox+=x.amount; //nog beter, net nog expenseID check toevoegen & check of items al bestaat
        }
       return xoxox;
    }
//OF
    bereken2(expenseID){
          var bedragsken=0;
          this.props.items.map(function(key,val,array){
            //  var x=0;
               if(key.expenseID){  
                   if(key.expenseID===expenseID){
                  bedragsken+= key.amount;
                   }
   
               }});
               return bedragsken;
    }

    naarItem(item){
        this.props.navigation.navigate('NewItem',  {item} );
    }

    fixLijst(xoxo,nav){
      return  this.props.items.map(function(key,val,array){
            if(key.expenseID){
                if(key.expenseID===xoxo){
            //    if(key.expenseID=  this.props.navigation.state.params){
                        //
                        //DIT IS OPLOSSING!!!
                        //CHECK OF EXPENSEID BESTAAT!!
                        //
                        return <TouchableHighlight key={key.itemID} onPress={() => nav.navigate('EditItem',  {item:key} )}> 
                            <Text>{key.description} : {key.amount}</Text>
                            </TouchableHighlight>
        
                }    }//}
        
            /* if(key.expenseID===this.state.expenseID){
             x+=key.amount;
         }
             return x; */
            
         })}
        
         componentDidMount(){
             if(this.props.navigation.state.params.expense){
            var expense=this.props.navigation.state.params.expense;
            
                console.log('eee'); //werkt
                this.setState({expenseID: expense.expenseID});
                this.setState({created: true});
                this.setState({amount: expense.amount.toString()});
                this.setState({items: expense.items});
                this.setState({description: expense.description});
                this.setState({date: expense.date});
                this.setState({categorie: expense.categorie});
                this.setState({currency: expense.currency});

               // this.props.screenProps.setTitle('Dashboard');
            }
         }

    render() {
    //  this.checkIfExpenseExists(this.props.navigation.state.params.expense);
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
                <Text>Currency:</Text>
                <Picker selectedValue={this.state.currency}
                    onValueChange={(itemValue, itemIndex) => this.setState({currency: itemValue })}>
 {this.props.navigation.state.params.trip.currencies.map((currency)=>{
        
    
            
        return  <Picker.Item key={currency} label={currency} value={currency} />})}
                    </Picker>
                
                <Text>Al afgerekend: {this.bereken2(this.state.expenseID)} </Text> 
                <Text>Resterend: {double(this.state.amount) - this.bereken2(this.state.expenseID)} </Text>
                {this.fixLijst(this.state.expenseID,this.props.navigation) /*MOET IN APARTE FUNCTIONCALL,ZEGT ANDERS DAT STATEEXPENSE UNDEFINED IS=>ERROR*/}

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

                <Button  onPress={() => //this.props.navigation.navigate('NewExpense', { trip })} 
               this.createNewExpense() }
                title='+ onderverdeling'
                navigation={this.props.navigation}/>
               <Button  onPress={() => //this.props.navigation.navigate('NewExpense', { trip })} 
               this.updateExpense() }
                title='rond rekening ad'
                navigation={this.props.navigation}/>
               {/*  <Totalen expense/> */}
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
      trips: state.trips.trips
    };
  };
 
  const mapDispatchToProps = (dispatch) => {
      return {
          onAddExpense: (expenseID,amount,description,tripID,categorie,date,items,currency) => { dispatch(createNewExpense(expenseID,amount,description,tripID,categorie,date,items,currency)); },
          onAddExpenseObject: (expense,tripID) => { dispatch(addExpenseObject(expense,tripID)); },
          onUpdateExpense: (expenseID,amount,description,tripID,categorie,date,items,currency) => { dispatch(updateExpense(expenseID,amount,description,tripID,categorie,date,items,currency)); },

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
  const double=(x) => Number.parseFloat(x);