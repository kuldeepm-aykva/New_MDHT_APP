import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './routes';
import SplashScreen from '../screens/splash/index';
import INFOSCREEN1 from '../screens/IntroductoryScreens/index';
import RoleSelection from '../screens/RoleSelection';
import PhoneNumberVerification from '../screens/Auth/Patient/Signup/PhoneNumberVerification';
import PasswordVerification from '../screens/Auth/Patient/Signup/PasswordVerification';
import ConsentTerms from '../screens/Auth/Patient/Signup/Terms';
import AccountCreated from '../screens/Auth/Patient/Signup/Terms/index1';
import LoginPhoneNumber from '../screens/Auth/Patient/Login/Phone/PhoneNumber';
import EmailLogin from '../screens/Auth/Patient/Login/Email';
import ForgetPhone from '../screens/Auth/Patient/ForgetPassword/Phone/PhoneNumber';
import ResetPassword from '../screens/Auth/Patient/ForgetPassword/Phone/ResetPassword';
import ForgetEmail from '../screens/Auth/Patient/ForgetPassword/Email/email';
import OTPVerification1 from '../screens/Auth/Patient/Otp';
import OTPVerification from '../screens/Auth/Patient/Otp';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.SPLASH}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        // initialRouteName={ROUTES.SPLASH}
        name={ROUTES.SPLASH}
        component={SplashScreen}
      />
      <Stack.Screen name={ROUTES.INFOSCREEN1} component={INFOSCREEN1} />
      <Stack.Screen
        name={ROUTES.RolSelection}
        component={RoleSelection}></Stack.Screen>
      <Stack.Screen
        name={ROUTES.PhoneNumberVerification}
        component={PhoneNumberVerification}></Stack.Screen>
      <Stack.Screen
        name={ROUTES.PasswordVerification}
        component={PasswordVerification}></Stack.Screen>
      <Stack.Screen
        name={ROUTES.ConsentTerms}
        component={ConsentTerms}></Stack.Screen>
      <Stack.Screen
        name={ROUTES.AccountCreated}
        component={AccountCreated}></Stack.Screen>
      <Stack.Screen
        name={ROUTES.LoginPhoneNumber}
        component={LoginPhoneNumber}></Stack.Screen>
      <Stack.Screen
        name={ROUTES.EmailLogin}
        component={EmailLogin}></Stack.Screen>
      <Stack.Screen
        name={ROUTES.ForgetPhone}
        component={ForgetPhone}></Stack.Screen>
      <Stack.Screen
        name={ROUTES.ResetPassword}
        component={ResetPassword}></Stack.Screen>
      <Stack.Screen
        name={ROUTES.ForgetEmail}
        component={ForgetEmail}></Stack.Screen>



      <Stack.Screen
        name={ROUTES.OTPVerification}
        component={OTPVerification}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthNavigator;
