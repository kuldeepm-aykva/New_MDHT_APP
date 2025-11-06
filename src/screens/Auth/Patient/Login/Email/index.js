import {View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';

// icon
import {MDLogo} from '../../../../../assets/svgImage';

// components
import {
  Center,
  Column,
  Container,
  Row,
  SafeArea,
} from '../../../../../components/layout';
import CustomTextInput from '../../../../../components/forms/TextInput';
import CustomButton from '../../../../../components/common/Button';
import SocialLogin from '../../../../../components/common/Social';

// ROUTES
import {ROUTES} from '../../../../../navigation/routes';
// validation
import {EmailLoginValidation} from './validation';

// styles
import CommonAuthStyles from '../../../styles';
import commonstyles from '../../../../../constants/common';
import {scale, verticalScale} from '../../../../../constants/responsive';
import {COLORS, FONT_SIZE} from '../../../../../constants';
import styles from './styles';

const EmailLogin = ({navigation}) => {
  // email / password data store usestate
  const [Data, SetData] = useState({
    Email: '',
    Password: '',
  });

  //  error usestate
  const [Error, SetError] = useState({
    EmailError: '',
    PasswordError: '',
  });

  // show and hide password state
  const [showPassword, setShowPassword] = useState({
    PasswordShow: false,
  });

  // textinput handler
  const handleInputChange = (key, value) => {
    SetData(prev => ({...prev, [key]: value}));
  };

  // password hide /show handler
  const togglePasswordVisibility = key => {
    setShowPassword(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // button submit  handler
  const handleSetPassword = () => {
    SetError({EmailError: '', PasswordError: ''});
    const validationErrors = EmailLoginValidation({Data});
    SetError(validationErrors);

    if (!validationErrors.EmailError && !validationErrors.PasswordError) {
      navigation.navigate(ROUTES.PatientDashboard);
    }
  };

  return (
    <SafeArea backgroundColor={COLORS.white} statusBarStyle="dark-content">
      <Container centered keyboardAware>
        <Center style={[CommonAuthStyles.img_container]}>
          <MDLogo width={scale(180)} height={verticalScale(120)} />
        </Center>

        <Text style={[commonstyles.title]}>Login To Your Account</Text>
        <Text style={[commonstyles.subtitle]}>
          Login with your details or with your{'\n'} Facebook, Google or Apple
          account.
        </Text>

        {/* textinput  */}
        <View style={[styles.form_container]}>
          <Column align="center" justify="center" spacing={12}>
            {/*  Email field */}
            <CustomTextInput
              flex={0}
              placeholder="Enter Your Email Address *"
              value={Data.Email}
              onChangeText={text => handleInputChange('Email', text)}
              handleIconClick={() => togglePasswordVisibility('PasswordShow')}
              error={Error.EmailError}
            />

            {/*  Confirm Password field */}
            <CustomTextInput
              flex={0}
              placeholder="Enter Password *"
              icon
              iconSource={showPassword.PasswordShow ? 'eye' : 'eye-off'}
              iconType="Feather"
              secureTextEntry={!showPassword.PasswordShow}
              value={Data.Password}
              onChangeText={text => handleInputChange('Password', text)}
              handleIconClick={() => togglePasswordVisibility('PasswordShow')}
              error={Error.PasswordError}
              iconColor={
                showPassword.PasswordShow
                  ? COLORS.textPrimary
                  : COLORS.borderSecondary
              }
            />
          </Column>
          <Row
            align="center"
            justify="space-between"
            style={[CommonAuthStyles.login_email_phone_container]}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(ROUTES.LoginPhoneNumber);
              }}>
              <Text
                style={[
                  commonstyles.primary,
                  commonstyles.fontSemiBold,
                  commonstyles.font12,
                ]}>
                Use Phone Number Instead
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(ROUTES.ForgetPhone);
              }}>
              <Text
                style={[
                  commonstyles.primary,
                  commonstyles.fontSemiBold,
                  commonstyles.font12,
                ]}>
                Forget Password ?
              </Text>
            </TouchableOpacity>
          </Row>
          <CustomButton
            text="SIGN UP"
            fullWidth
            variant={
              Data.Email.length === 0 || Data.Password.length === 0
                ? 'outline'
                : 'primary'
            }
            btnStyle={{
              marginTop: verticalScale(40),
            }}
            BorderColor={COLORS.borderSecondary}
            fontSize="sm"
            TextColor={
              Data.Email.length === 0 || Data.Password.length === 0
                ? COLORS.textPrimary
                : COLORS.white
            }
            onPress={handleSetPassword}
          />
        </View>

        <Row
          align="center"
          justify="center"
          style={CommonAuthStyles.dividerContainer}>
          <View style={CommonAuthStyles.line} />
          <Text style={CommonAuthStyles.divider_text}>Or log in with</Text>
          <View style={CommonAuthStyles.line} />
        </Row>

        {/* login with fb , google , apple . */}
        <SocialLogin />

        <Center style={[CommonAuthStyles.Already_acc_container]}>
          <Text style={[CommonAuthStyles.policy_text]}>
            New to MDHealthTrak?{' '}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(ROUTES.PhoneNumberVerification);
              }}>
              <Text
                style={[
                  CommonAuthStyles.policy_text,
                  commonstyles.primary,
                  commonstyles.fontSemiBold,
                  {top: verticalScale(4)},
                ]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </Text>
        </Center>
      </Container>
    </SafeArea>
  );
};

export default EmailLogin;
