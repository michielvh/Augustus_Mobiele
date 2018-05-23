import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighlight, View, Button,FlatList,ScrollView } from 'react-native';
import { connect } from 'react-redux';

 class Totalen extends Component {
    constructor(props) {
        super(props);
        this.state = { location: '' };
    }
    bereken2(tripID,items){
        /* 2 mappen maken, elke persoon is een key
        1 schuld
        1 betaald */
    
    
    
        var betaaldMap = new Map();
        var schuldMap = new Map();
       
        this.props.expenses.forEach(function(expense) {
            if(tripID===expense.tripID){
    
        items.forEach(function(e) {
            if(e.expenseID===expense.expenseID){
            //checken of expenseID overeenkomt
           
    
    
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
        }})
    
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
    }

bereken(expense){
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
}


 totalen(params){

//return l;
if(params.id){
    console.log("2");

    return this.bereken2(params.id,this.props.items);
}else if(params.expenseID){
    console.log("1");
return this.bereken(params);
}

    
 }
  
  render() {
      console.log(this.totalen);
    var params;
     if(this.props.trip){
        params=this.props.trip;
    }
    if(this.props.navigation){
         params=this.props.navigation.state.params.expense;
    }
   
    console.log(params);
    return (
<FlatList
  data={this.totalen( params,this.props.items)}
  
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
   expenses: state.expenseAUG.expenses,
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
