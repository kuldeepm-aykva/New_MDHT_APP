import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './routes';
import PatientDashboard from '../screens/Dashboard/Patient';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={ROUTES.PatientDashboard}
        component={PatientDashboard}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainNavigator;
