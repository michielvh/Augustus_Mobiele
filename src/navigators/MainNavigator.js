import { TabNavigator } from 'react-navigation';
import OverviewPage from '../pages/OverviewPage';
import BillsPage from '../pages/BillsPage';
import TripStack from './TripsNavigator';
import ExpensePage from '../pages/ExpensePageAUG';
import TripStackAUG from './TripsNavigatorAUG';

const MainNavigator = TabNavigator({
        Overview: {
            screen: OverviewPage
         },
        Trips: {
            screen: TripStack
        }, 
        Bills: {
            screen: BillsPage
        },
       /*  ExpensePage: {
            screen: ExpensePage
        }, */
        TripStackAUG: {
            screen: TripStackAUG
        },

});

export default MainNavigator;
