import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';

 class Trips extends Component {
    constructor(props) {
        super(props);
        this.state = { location: '' };
    }

  trips() {
      return Object.keys(this.props.trips).map(key => this.props.trips[key]);
    }
  
  render() {
      console.log(this.props);
    
      
    return (
      <View>
       <Text style={{textAlign:'center',fontWeight:'bold',textDecorationLine:'underline',fontSize:20}} >A list of all the trips: </Text>
        { this.trips().map((trip) => {
          return (
            <TouchableHighlight key={trip.id} 
              onPress={() => this.props.navigation.navigate('TripDetails', { trip })}
            >
              <Text style={{padding:15,textAlign:'center'}} > {trip.text}</Text>
            </TouchableHighlight>
         );
        })}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trips: state.trips.trips
  };
};

export default connect(mapStateToProps)(Trips);

const styles = StyleSheet.create({

  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#841584',
  },
  titleText: {
    fontSize: 20, 
    fontWeight: 'bold',
  }
  
});
