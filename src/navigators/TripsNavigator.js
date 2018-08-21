import { StackNavigator } from 'react-navigation';
import TripsOverviewPage from '../pages/TripsOverviewPage';
import TripDetails from '../pages/TripDetails';
import BillForm from '../components/BillForm';
import AddTrip from '../pages/AddTripPage';
import TripTabNavAUG from './TripTabNavAUG';
const TripsNavigator = StackNavigator({
   /*  Trips: {
        screen: TripsOverviewPage,
        navigationOptions: {
            title: 'Trips',
        },
    },  */
   /*  TripsTab: {
        screen: TripTabNavAUG,
        navigationOptions: {
            title: 'TripTab',
        },
    },  */
    TripDetails: {
        screen: TripDetails,
        navigationOptions: {
            title: 'Trip details',
        },
    },
    AddTrip: {
        screen: AddTrip
    },
    NewExpense: {
        screen: BillForm
    }
});

export default TripsNavigator;
