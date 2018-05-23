import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight, View, Button,FlatList,ScrollView } from 'react-native';
import { connect } from 'react-redux';

 class Totalen extends Component {
    constructor(props) {
        super(props);
        this.state = { location: '' };
    }

 totalen(expense){
/* 2 mappen maken, elke persoon is een key
    1 schuld
    1 betaald */

    var betaaldMap = new Map();
    var schuldMap = new Map();

    this.props.items.forEach(function(e) {
        //checken of expenseID overeenkomt
        if(e.expenseID===expense.expenseID){


//map vullen wie betaald heeft
        if(betaaldMap.has(e.betaaldDoor)){
            betaaldMap.set(e.betaaldDoor,(betaaldMap.get(e.betaaldDoor)+e.amount));
        }else{
            betaaldMap.set(e.betaaldDoor,e.amount);
        }

 //map vullen hoeveel ieder moet       
        var aantalPersonen=e.betaaldVoor.length;

        for(var persoon of e.betaaldVoor){
            if(schuldMap.has(persoon)){
                schuldMap.set(persoon,(schuldMap.get(persoon)+e.amount/aantalPersonen));
            }else{
                schuldMap.set(persoon,e.amount/aantalPersonen);
            }
        }
     } })

// totalen maken
var name='';
var betaald=0;
var owes=0;
var lijst=[]
/* var lll={naam: 'NAME',owesamount: 'OWES', paidamount: 'PAYED', total:'TOTAL'};
    lijst.push(lll); */
for(let e of betaaldMap){
    name=e[0];
    betaald=e[1];
    var lll={naam: name,owesamount: owes, paidamount: betaald, total:0};
    lijst.push(lll);
}



for (var [key, value] of schuldMap) {
    var boo=false;
    for(var x of lijst){
        if(x.naam===key){
            x.owesamount=value;
            boo=true;
        }
    }
    if(boo===false){
        var lll={naam: key,owesamount: value, paidamount: 0, total:0};
        lijst.push(lll);
    }
}
//totaalberekening
for (var x of lijst){
    x.total=x.paidamount-x.owesamount;
}
var l=[{naam: 'NAME',owesamount: 'OWES', paidamount: 'PAYED', total:'TOTAL'}];
return l.concat(lijst);
//return l;
console.log(lijst);



    
 }
  
  render() {
      console.log(this.totalen);
    
      
    return (
<FlatList
  data={this.totalen( this.props.navigation.state.params.expense)}
  
  renderItem={({item}) => 
  <View style={{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    }}>
       <Text>{item.naam}</Text> 
       <Text> {item.owesamount} </Text>
       <Text>{item.paidamount}</Text> 
  <Text> {item.total}</Text>
  </View> }
/>

       
  /*       <TouchableHighlight onPress={() => this.totalen(this.props.expense)}>
        <Text>check totalen</Text>
      </TouchableHighlight>
    */ );
  }
}

const mapStateToProps = (state) => {
  return {
   items: state.kostItemAUG.items,
  };
};

export default connect(mapStateToProps)(Totalen);

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
