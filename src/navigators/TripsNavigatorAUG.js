import { StackNavigator } from 'react-navigation';
import TripsOverviewPage from '../pages/TripsOverviewPage';
import TripDetailsAUG from '../pages/TripDetailsAUG';
import BillForm from '../components/BillForm';
import AddTrip from '../pages/AddTripPage';
import ExpensePage from '../pages/ExpensePageAUG';
import ItemAUG from '../components/ItemAUG';
import Totalen from '../components/Totalen';


const TripsNavigatorAUG = StackNavigator({
    Trips: {
        screen: TripsOverviewPage,
        navigationOptions: {
            title: 'Trips',
        },
    }, 
    TripDetails: {
        screen: TripDetailsAUG,
        navigationOptions: {
            title: 'Trip details',
        },
    },
    AddTrip: {
        screen: AddTrip
    },
    
    NewExpense: {
        screen: ExpensePage,
         navigationOptions: {
            title: 'Register Expense',
        },
    },
    EditExpense: {
        screen: ExpensePage,
         navigationOptions: {
            title: 'Edit Expense',
        },
    },

    NewItem: {
        screen: ItemAUG,
        navigationOptions: {
            title: 'Add Item',
        },
    },
    EditItem: {
        screen: ItemAUG,
        navigationOptions: {
            title: 'Edit Item',
        },
    },
    OverzichtExpense: {
        screen: Totalen,
        navigationOptions: {
            title: 'Overzicht Expense',
        },
    },
});

export default TripsNavigatorAUG;
