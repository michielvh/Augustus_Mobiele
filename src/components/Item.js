import React, { Component } from 'react';
import { Text, TextInput, TouchableHighlight, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { addItem } from '../redux/actions/expense';
import { addBetaling } from '../redux/actions/expense';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
 class Item extends Component {
    constructor(props) {
        super(props);
        this.state = { description: '',
                      amount: 1, 
                      user: '',
                      betalingamount: 1,
                      betalinguser: '' };
    }

    onChange(text) {
      let newText = '';
      let numbers = '0123456789';
  
      for (var i = 0; i < text.length; i++) {
          if ( numbers.indexOf(text[i]) > -1 ) {
              newText = newText + text[i];
          }
      }   
      this.setState({amount: newText})
  }
  onChange2(text) {
    let newText = '';
    let numbers = '0123456789';

    for (var i = 0; i < text.length; i++) {
        if ( numbers.indexOf(text[i]) > -1 ) {
            newText = newText + text[i];
        }
    }   
    this.setState({betalingamount: newText})
}

additem() {
  this.props.onAddItem(this.state.amount,this.state.description,this.state.user);
  
// this.props.navigation.goBack(null);
}

addbetaling() {
  this.props.onAddBetaling(this.state.betalingamount,this.state.betalinguser);
  
// this.props.navigation.goBack(null);
}

  personen() {
    
   
     return Object.keys(this.props.personen).map(key => this.props.personen[key])
   }
    render() {
        console.log(this.props);
      
        
      return (
          <View>
              <View><Text>Beschrijving item</Text>
                  <TextInput 
                    onChangeText={(text) => this.setState({description : text})}
                    value={this.state.description}
                  />
                  <Text>Kostprijs item</Text>
                  <TextInput 
                    onChangeText={(text) => this.onChange( text)}
                    value={this.state.amount}
                  />

                  <Picker
                    selectedValue={this.state.user}
                    onValueChange={(itemValue, itemIndex) => this.setState({user: itemValue})}>
                  <Picker.Item label="Alle" value="alle" />
                    { this.personen().map((personen) => {return <Picker.Item key={personen.naam} label={personen.naam} value={personen.naam}/> })}
                  </Picker>
              
              <TouchableHighlight onPress={() => this.additem()}>
                <Text>Add item</Text>
              </TouchableHighlight>
                
              </View>
              <View>
                <Text>Betaald bedrag</Text>
              <TextInput 
                  onChangeText={(text) => this.onChange2( text)}
                  value={this.state.betalingamount}
                 
                  />

                  <Picker
  selectedValue={this.state.betalinguser}
  onValueChange={(itemValue, itemIndex) => this.setState({betalinguser: itemValue})}>
  <Picker.Item label="Alle" value="alle" />
  { this.personen().map((personen) => {return <Picker.Item key={personen.naam} label={personen.naam} value={personen.naam}/> })}
</Picker>
              
              <TouchableHighlight onPress={() => this.addbetaling()}>
                <Text>Add betaling</Text>
              </TouchableHighlight>
                </View>
        </View>
        );
      }
    }
    const mapStateToProps = (state) => {
      return {
        personen: state.personen.personen
      };
    }
   
    const mapDispatchToProps = (dispatch) => {
        return {
            onAddItem: (amount,description,user) => { dispatch(addItem(amount,description,user)); },
            onAddBetaling: (amount,user) => { dispatch(addBetaling(amount,user)); }
          }
      }
      
    export default connect(mapStateToProps, mapDispatchToProps)(Item);
