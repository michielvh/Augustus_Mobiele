import { TabNavigator } from 'react-navigation';
import OverviewPage from '../pages/OverviewPage';
import BillsPage from '../pages/BillsPage';
import TripStack from './TripsNavigator';
import ExpensePage from '../pages/ExpensePageAUG';
import TripStackAUG from './TripsNavigatorAUG';

const TripTabNavAUG = TabNavigator({
        Overview: {
            screen: OverviewPage
         },
      /*  Trips: {
            screen: TripStackAUG
        }, 
         Bills: {
            screen: BillsPage
        } */
      

});

export default TripTabNavAUG;
