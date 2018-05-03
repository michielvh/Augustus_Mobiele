import { TabNavigator } from 'react-navigation';
import OverviewPage from '../pages/OverviewPage';
import BillsPage from '../pages/BillsPage';
import TripStack from './TripsNavigator';

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
});

export default MainNavigator;
