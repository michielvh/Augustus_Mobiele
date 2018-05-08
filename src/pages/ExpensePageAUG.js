import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import ExpenseAUG from '../components/ExpenseAUG';
import ItemAUG from '../components/ItemAUG';
import { connect } from 'react-redux';


class ExpensePage extends Component {
   constructor(props){
    super(props)
   }

    render() {
       const trip = this.props.navigation.state.params.trip;
        console.log(trip);
        console.log(this.props);

        return (
            <ScrollView>
                <ExpenseAUG navigation={this.props.navigation}/>
                {/* <ItemAUG navigation={this.props.navigation} /> */}
            </ScrollView>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      expenses: state.expenses.expenses,
    };
};
 
export default connect(mapStateToProps)(ExpensePage);
//export default ExpensePage;
