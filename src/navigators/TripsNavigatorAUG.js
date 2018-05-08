import { StackNavigator } from 'react-navigation';
import TripsOverviewPage from '../pages/TripsOverviewPage';
import TripDetailsAUG from '../pages/TripDetailsAUG';
import BillForm from '../components/BillForm';
import AddTrip from '../pages/AddTripPage';
import ExpensePage from '../pages/ExpensePageAUG';


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
        screen: ExpensePage
    },
});

export default TripsNavigatorAUG;
