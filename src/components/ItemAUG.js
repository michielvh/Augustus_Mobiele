import React, { Component } from 'react';
import { Text, TextInput, TouchableHighlight, View, Picker, Button } from 'react-native';
import { connect } from 'react-redux';
import { addItem, addItemToExpense } from '../redux/actions/expenseAUG';
import { addBetaling } from '../redux/actions/expense';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
class ItemAUG extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kostItemId: 0,
            description: '',
            amount: '',
            betaaldDoor: 'jan',
            betaaldVoor: 'alle',
            eventueelExpenseID: '',
            betaaldVoorPersonen: []


        };
    }
    verwijderPersoonVanBetalingen(e){
        var personen=this.state.betaaldVoorPersonen;
        var x=personen.indexOf(e);
        if(personen.length===1){
            personen.pop();
        }else{
        personen[x]=personen.pop(); //index van overbodige waarde wordt vervangen met laatste waarde
        }
        this.setState({ betaaldVoorPersonen: personen });
    }
    betalingVoorPersonen(text) {
        var personen=this.state.betaaldVoorPersonen;
        if(text==='alle'){
            personen=[];
        }
        if(personen.indexOf(text)>=0){}else{
        personen.push(text);
        this.setState({ betaaldVoorPersonen: personen });
        }
    
        this.setState({ betaaldVoor: text });

        //betaaldvoorpersonen aflopen in render(),met touchable om weg te doen

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
    additem() {
        var personen2=[];
        if(this.state.betaaldVoor==='alle'){
            
            this.personen().map((e) => { personen2.push(e.naam) });
            this.props.onAddItem(this.state.kostItemId,this.state.amount, this.state.description, this.state.betaaldDoor,personen2,this.state.eventueelExpenseID);
        }else{
        this.props.onAddItem(this.state.kostItemId,this.state.amount, this.state.description, this.state.betaaldDoor,this.state.betaaldVoorPersonen,this.state.eventueelExpenseID);
        }
     //   this.props.onAddItem(this.state.kostItemId,this.state.amount, this.state.description, this.state.betaaldDoor, this.state.betaaldVoor,this.state.eventueelExpenseID);

        //  this.props.onAddItemToExpense(this.state.kostItemId,this.state.eventueelExpenseID);
        // this.props.navigation.goBack(null);
        this.props.navigation.dispatch(NavigationActions.back());
  
    }
    personen() {


        return Object.keys(this.props.personen).map(key => this.props.personen[key])
    }
    render() {
        console.log(this.props);
       

        return (
            <View><Text>Beschrijving item</Text>
                <TextInput
                    onChangeText={(text) => this.setState({ description: text })}
                    value={this.state.description}
                />
                <Text>Kostprijs item</Text>
                <TextInput
                    onChangeText={(text) => this.onChange(text)}
                    value={this.state.amount}
                />
                <Text>betaald door:</Text>
                <Picker
                    selectedValue={this.state.betaaldDoor}
                    onValueChange={(itemValue, itemIndex) => this.setState({ betaaldDoor: itemValue })}>

                    {this.personen().map((personen) => { return <Picker.Item key={personen.naam} label={personen.naam} value={personen.naam} /> })}
                </Picker>

                <Text> betaald voor:</Text>
                <Picker
                    selectedValue={this.state.betaaldVoor}
                    onValueChange={(itemValue, itemIndex) => this.betalingVoorPersonen( itemValue )}>
                    <Picker.Item label="Alle" value="alle" />
                    {this.personen().map((personen) => { return <Picker.Item key={personen.naam} label={personen.naam} value={personen.naam} /> })}
                </Picker>
                {/* <Picker
                    selectedValue={this.state.betaaldVoor}
                    onValueChange={(itemValue, itemIndex) => this.setState({ betaaldVoor: itemValue })}>
                    <Picker.Item label="Alle" value="alle" />
                    {this.personen().map((personen) => { return <Picker.Item key={personen.naam} label={personen.naam} value={personen.naam} /> })}
                </Picker> */}
        {this.state.betaaldVoorPersonen.map(e =>{
            
        return ( <TouchableHighlight key={e} onPress={() => this.verwijderPersoonVanBetalingen(e)}>
<Text>{e}                  - verwijder -</Text>
      </TouchableHighlight>
         );
            

        })}
                <Button
                    onPress={() => this.additem()}
                    title="Add Kost" />



                {/* <TouchableHighlight onPress={() => this.additem()}>
                    <Text>Add item</Text>
                </TouchableHighlight> */}
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        personen: state.personen.personen,
        items:state.kostItemAUG.items
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddItem: (kostItemId,amount, description, betaaldDoor, betaaldVoor,eventueelExpenseID) => { dispatch(addItem(kostItemId,amount, description, betaaldDoor, betaaldVoor,eventueelExpenseID)); },
   
        onAddItemToExpense: (itemID,expenseID) => { dispatch(addItemToExpense(itemID,expenseID));}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemAUG);