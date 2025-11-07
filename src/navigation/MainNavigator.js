import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './routes';
import PatientDashboard from '../screens/Dashboard/Patient';
import OnBoardingScreens from '../screens/OnBoardingScreens';
import DashboardSearch from '../screens/Dashboard/Patient/Search';
import CompleteProfile from '../screens/Dashboard/Patient/CompleteProfile';
import AddHealthTrackerCondition from '../screens/HealthTracker/AddCondition';
import SearchHealthTracker from '../screens/HealthTracker/Search';
import SingleHealthTracker from '../screens/HealthTracker/SingleHealthTracker';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.CompleteProfile}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.PatientDashboard}
        component={PatientDashboard}></Stack.Screen>
      <Stack.Screen
        name={ROUTES.DashboardSearch}
        component={DashboardSearch}></Stack.Screen>
      <Stack.Screen
        name={ROUTES.CompleteProfile}
        component={CompleteProfile}></Stack.Screen>
      <Stack.Screen
        name={ROUTES.AddHealthTrackerCondition}
        component={AddHealthTrackerCondition}></Stack.Screen>
      <Stack.Screen
        name={ROUTES.SearchHealthTracker}
        component={SearchHealthTracker}></Stack.Screen>
      <Stack.Screen
        name={ROUTES.SingleHealthTracker}
        component={SingleHealthTracker}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainNavigator;
