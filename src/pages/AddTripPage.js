import React, { Component } from 'react';
import { View,ScrollView, Text, TextInput, TouchableHighlight,Picker } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { addTrip } from '../redux/actions/trips';
import CustomMultiPicker from "react-native-multiple-select-list";
import {PropTypes} from 'prop-types';
import {getCurrencyLijst,getCurrencyLijstEntries} from '../redux/reducers/currenciesAUG';


   
export class AddTripPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency:'EUR',
            userList : {
                "123":"Tom",
                "124":"Michael",
                "125":"Christin"
              },
              currencies:[]
              
        };
    }
    addtrip() {
      //  if(!this.state.currencies.(this.state.currency)){
        //    this.state.currencies.push(this.state.currency);
        //}
        var check=false;
        for(var x in this.state.currencies){
            if(x===this.state.currency){
                check=true;
            }
        }
        if(check===false){
            this.state.currencies.push(this.state.currency);
        }
        this.props.onAddTrip(this.state.location,this.state.currency,this.state.currencies);
        this.props.navigation.dispatch(NavigationActions.back());
    }
     componentDidMount(){
         let x=getCurrencyLijst();
         this.setState({userList: x});
     }
    render() {
        return (
            /* <View>
                <TextInput 
                  placeholder='Enter Location'
                  onChangeText={(text) => this.setState({ location: text })}
                /> */
                <ScrollView>
                <TextInput 
                  placeholder='Enter Location'
                  onChangeText={(text) => this.setState({ location: text })}
                />
                <Text>Default Currency:</Text>
                <Picker
                    selectedValue={this.state.currency}
                    onValueChange={(itemValue,itemIndex) => this.setState({ currency:itemValue} )}>
                    {getCurrencyLijst().map((currency) => { return <Picker.Item key={currency} label={currency} value={currency} /> })}
                </Picker>
            <CustomMultiPicker
                          options={this.state.userList}
              search={false} // should show search bar?
              multiple={true} //
              placeholder={"Search"}
              placeholderTextColor={'#757575'}
              returnValue={"label"} // label or value
           //   callback={(res)=>{ console.log(res) }} // callback, array of selected items
             
              callback={(res)=>{ this.setState({currencies:res}) }} // callback, array of selected items
              
              rowBackgroundColor={"#eee"}
              rowHeight={40}
              rowRadius={5}
              iconColor={"#00a2dd"}
              iconSize={30}
              selectedIconName={"ios-checkmark-circle-outline"}
              unselectedIconName={"ios-radio-button-off-outline"}
              scrollViewHeight={130}
              selected={[]} // list of options which are selected by default
            />
            
                <TouchableHighlight onPress={() => this.addtrip()}>
                  <Text>Add trip</Text>
                </TouchableHighlight>
            </ScrollView> 
 
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
      trips: state.trips.trips
    };
};

const mapDispatchToProps = (dispatch) => { 
    return {
          onAddTrip: (location,currency,currencies) => { dispatch(addTrip(location,currency,currencies)); }
    };
};
    
    
export default connect(mapStateToProps, mapDispatchToProps)(AddTripPage);
