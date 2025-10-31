import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './routes';
import PatientDashboard from '../screens/Dashboard/Patient';
import OnBoardingScreens from '../screens/OnBoardingScreens';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.OnBoardingScreens}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.PatientDashboard}
        component={PatientDashboard}></Stack.Screen>

      <Stack.Screen
        name={ROUTES.OnBoardingScreens}
        component={OnBoardingScreens}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainNavigator;
