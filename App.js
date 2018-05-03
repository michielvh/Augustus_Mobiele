/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import Logo from './src/components/Logo';
import MainNavigator from './src/navigators/MainNavigator';


class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Logo />
        <MainNavigator />
    </View>
    );
  }
}

export default App;
