import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import store from './src/redux';

export default class Karavaan extends Component {
    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
  }

AppRegistry.registerComponent('UCLL_Mobiele', () => Karavaan);
