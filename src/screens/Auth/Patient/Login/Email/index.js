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
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
} from '../../../../../constants';
import styles from './styles';
import CustomText from '../../../../../components/common/CustomText/CustomText';

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

        <CustomText
          TextColor={COLORS.primary}
          fontFamily={FONT_FAMILY.primary}
          fontSize={FONT_SIZE.xl}
          fontWeight={FONT_WEIGHT.bold}>
          Login To Your Account
        </CustomText>
        <CustomText
          TextColor={COLORS.textPrimary}
          textAlign="center"
          my={SPACING.xs}
          fontFamily={FONT_FAMILY.primary}
          lineHeight={SPACING.xl}
          fontWeight={FONT_WEIGHT.regular}>
          Login with your details or with your{'\n'} Facebook, Google or Apple
          account.
        </CustomText>

        {/* textinput  */}
        <View style={[styles.form_container]}>
          <Column align="center" justify="center" spacing={12}>
            {/*  Email field */}
            <CustomTextInput
              flex={0}
              placeholder="Enter Your Email Address *"
              value={Data.Email}
              TextColor={COLORS.textDark}
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
              TextColor={COLORS.textDark}
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
              <CustomText
                style={{top: verticalScale(3)}}
                fontWeight={FONT_WEIGHT.semiBold}
                fontSize={FONT_SIZE.sm}
                TextColor={COLORS.primary}>
                Use Phone Number Instead
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(ROUTES.ForgetPhone);
              }}>
              <CustomText
                style={{top: verticalScale(3)}}
                fontWeight={FONT_WEIGHT.semiBold}
                fontSize={FONT_SIZE.sm}
                TextColor={COLORS.primary}>
                Forget Password ?
              </CustomText>
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
            mt={SPACING.xxl}
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
          <CustomText
            TextColor={COLORS.textPrimary}
            fontSize={FONT_SIZE.sm}
            fontFamily={FONT_FAMILY.primary}>
            New to MDHealthTrak?{' '}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(ROUTES.RolSelection);
              }}>
              <CustomText
                style={{top: verticalScale(3)}}
                fontWeight={FONT_WEIGHT.semiBold}
                fontSize={FONT_SIZE.sm}
                TextColor={COLORS.primary}>
                Sign Up
              </CustomText>
            </TouchableOpacity>
          </CustomText>
        </Center>
      </Container>
    </SafeArea>
  );
};

export default EmailLogin;
