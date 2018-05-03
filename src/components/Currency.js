import React, { Component } from 'react';
import Modal from 'react-native-modal';
import { Text, TouchableHighlight, View, StyleSheet, NetInfo, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { selectCurrency } from '../redux/actions/currencies';

class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '1',
            rates: {},
            modalVisibility: false,
            overrideModalVisibility: false

        }
    }
 getRates() {
    NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                fetch('https://api.fixer.io/latest?base=' + this.props.base, {method: 'GET' })
                .then((response) => response.json())
                .then((responseData) => {
                    this.setState({ rates: responseData.rates });
                })
                .done();  
            }
        });
    }

    createConversionRateList() {
        const arrayOfRates = Object.entries(this.state.rates);
        return arrayOfRates.map((item) =>
        (
            <Text>{item[0]} : {item[1]}</Text>
        ));
    }

    createConversionRateOverride() {
        /*var USDtemp = {...this.state.rates.USD};
        var EURtemp = {...this.state.rates.EUR};
        var GBPtemp = {...this.state.rates.GBP};
        var JPYtemp = {...this.state.rates.JPY}; */
        return (
            <View>
                <Text style={{ fontSize: 20, marginBottom: 10 }}>Change the values to override</Text>
                <TextInput 
                    onChangeText={(text) => this.setState({ USDtemp: text })} 
                    value={this.state.rates.USD} 
                    placeholder={String(this.state.rates.USD)} 
                />
                <TextInput 
                    onChangeText={(text) => this.setState({ EURtemp: text })} 
                    value={this.state.rates.EUR} 
                    placeholder={String(this.state.rates.EUR)} 
                />
                <TextInput 
                    onChangeText={(text) => this.setState({ GBPtemp: text })} 
                    value={this.state.rates.GBP} 
                    placeholder={String(this.state.rates.GBP)} 
                />
                <TextInput 
                    onChangeText={(text) => this.setState({ JPYtemp: text })} 
                    value={this.state.rates.JPY} 
                    placeholder={String(this.state.rates.JPY)} 
                />
                <TouchableHighlight onPress={() => { this.setState({ overrideModalVisibility: false }); }}>
                    <View style={styles.button}>
                        <Text>Close</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
    render() {        
        console.log(this.props);
        //console.log(this.props.selectCurrency(this.props.base));
        
        return (
            <View>
                    <TouchableHighlight onPress={() => { this.getRates(); this.setState({ modalVisibility: true }); }}>
                        <Text>{this.props.amount} {this.props.base} </Text>
                    </TouchableHighlight>

                    <Modal isVisible={this.state.modalVisibility}>
                        <View style={styles.modalContent}>
                            <Text style={{ fontSize: 20, marginBottom: 10 }}>Currency conversion!</Text>  
                            {
                               this.createConversionRateList()
                            }
                            <TouchableHighlight onPress={() => { this.setState({ modalVisibility: false }); }}>
                                <View style={styles.button}>
                                    <Text>Close</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => { this.setState({overrideModalVisibility: true }); }}>
                                <View style={styles.button}>
                                    <Text>Override Rates</Text>
                                </View>
                            </TouchableHighlight>
                            <Modal isVisible={this.state.overrideModalVisibility}>
                                <View style={styles.modalContent}>
                                    {this.createConversionRateOverride()}
                                </View>
                            </Modal>
                        </View>
                    </Modal>
                    
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        currencies: state.allCurrencies
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectCurrency: (base) => { dispatch(selectCurrency(base)); }
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Currency);

const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        button: {
          backgroundColor: 'lightblue',
          padding: 12,
          margin: 16,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          borderColor: 'rgba(0, 0, 0, 0.1)',
        },
        modalContent: {
          backgroundColor: 'white',
          padding: 22,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
          borderColor: 'rgba(0, 0, 0, 0.1)',
        }
});
