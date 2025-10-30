import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from './routes';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} /> */}
    </Stack.Navigator>
  );
};

export default MainNavigator;
