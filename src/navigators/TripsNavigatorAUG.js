import { StackNavigator } from 'react-navigation';
import TripsOverviewPage from '../pages/TripsOverviewPage';
import TripDetailsAUG from '../pages/TripDetailsAUG';
import BillForm from '../components/BillForm';
import AddTrip from '../pages/AddTripPage';
import ExpensePage from '../pages/ExpensePageAUG';
import ItemAUG from '../components/ItemAUG';



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

    NewItem: {
        screen: ItemAUG,
        navigationOptions: {
            title: 'Add Item',
        },
    },
});

export default TripsNavigatorAUG;
