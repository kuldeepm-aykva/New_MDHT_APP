import {View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';

// components
import {
  Center,
  Column,
  Container,
  Row,
  SafeArea,
} from '../../../../../components/layout';
import CustomButton from '../../../../../components/common/Button';
import CustomTextInput from '../../../../../components/forms/TextInput';

// login with fb, apple ,google
import SocialLogin from '../../../../../components/common/Social';

// icon
import {PatientIcon} from '../../../../../assets/svgImage';

// styles
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
} from '../../../../../constants';
import CommonAuthStyles from '../../../styles';
import commonstyles from '../../../../../constants/common';
import {verticalScale} from '../../../../../constants/responsive';
import styles from './styles';

// validation
import {PasswordValidation} from './validation';
// routes
import {ROUTES} from '../../../../../navigation/routes';
import CustomText from '../../../../../components/common/CustomText/CustomText';

const PasswordVerification = ({navigation}) => {
  // state for password and ConfirmPassword
  const [Password, SetPassword] = useState({
    Password: '',
    ConfirmPassword: '',
  });

  // error state
  const [Error, SetError] = useState({
    PasswordError: '',
    ConfirmPasswordError: '',
  });

  // show and hide password
  const [showPassword, setShowPassword] = useState({
    PasswordShow: false,
    ConfirmPasswordShow: false,
  });

  // textinput handler
  const handleInputChange = (key, value) => {
    SetPassword(prev => ({...prev, [key]: value}));
  };

  // hide / show password handler
  const togglePasswordVisibility = key => {
    setShowPassword(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // handler for button
  const handleSetPassword = () => {
    // error
    SetError({PasswordError: '', ConfirmPasswordError: ''});
    const validationErrors = PasswordValidation({Password});
    SetError(validationErrors);

    if (
      !validationErrors.PasswordError &&
      !validationErrors.ConfirmPasswordError
    ) {
      navigation.navigate(ROUTES.ConsentTerms);
    }
  };

  const ButtonDisable = !Password.Password || !Password.ConfirmPassword;
  return (
    <SafeArea backgroundColor={COLORS.white} statusBarStyle="dark-content">
      <Container centered keyboardAware>
        <Center style={[CommonAuthStyles.img_container]}>
          <PatientIcon width={180} height={110} margin={5} />
        </Center>

        <CustomText
          TextColor={COLORS.primary}
          fontFamily={FONT_FAMILY.primary}
          fontSize={FONT_SIZE.xl}
          fontWeight={FONT_WEIGHT.bold}>
          Create Your Account
        </CustomText>
        <CustomText
          TextColor={COLORS.textPrimary}
          textAlign="center"
          my={SPACING.xs}
          fontFamily={FONT_FAMILY.primary}
          lineHeight={SPACING.xl}
          fontWeight={FONT_WEIGHT.regular}>
          Use 8+ characters with a capital letter, {'\n'} number, & special
          symbol
        </CustomText>

        <View style={[styles.form_container]}>
          <Column align="center" justify="center" spacing={12}>
            {/*  Password field */}
            <CustomTextInput
              flex={0}
              placeholder="Enter Password *"
              icon
              TextColor={COLORS.textDark}
              iconSource={showPassword.PasswordShow ? 'eye' : 'eye-off'}
              iconType="Feather"
              iconColor={
                showPassword.PasswordShow
                  ? COLORS.textPrimary
                  : COLORS.borderSecondary
              }
              secureTextEntry={!showPassword.PasswordShow}
              value={Password.Password}
              onChangeText={text => handleInputChange('Password', text)}
              handleIconClick={() => togglePasswordVisibility('PasswordShow')}
              error={Error.PasswordError}
            />

            {/*  Confirm Password field */}
            <CustomTextInput
              flex={0}
              TextColor={COLORS.textDark}
              placeholder="Confirm Password *"
              icon
              iconSource={showPassword.ConfirmPasswordShow ? 'eye' : 'eye-off'}
              iconType="Feather"
              iconColor={
                showPassword.ConfirmPasswordShow
                  ? COLORS.textPrimary
                  : COLORS.borderSecondary
              }
              secureTextEntry={!showPassword.ConfirmPasswordShow}
              value={Password.ConfirmPassword}
              onChangeText={text => handleInputChange('ConfirmPassword', text)}
              handleIconClick={() =>
                togglePasswordVisibility('ConfirmPasswordShow')
              }
              error={Error.ConfirmPasswordError}
            />
          </Column>
        </View>

        <CustomButton
          text="SIGN UP"
          fullWidth
          variant={ButtonDisable ? 'outline' : 'primary'}
          mt={SPACING.lg}
          BorderColor={COLORS.borderSecondary}
          TextColor={ButtonDisable ? COLORS.textPrimary : COLORS.white}
          fontSize="sm"
          onPress={handleSetPassword}
        />

        <Row align="center" justify="center" style={[styles.dividerContainer]}>
          <Text style={[styles.divider_text, commonstyles.textPrimary]}>
            OR
          </Text>
        </Row>

        {/* login in with fb , apple , google  */}
        <SocialLogin />

        <Center style={[styles.Already_acc_container]}>
          <CustomText
            TextColor={COLORS.textPrimary}
            fontSize={FONT_SIZE.sm}
            fontFamily={FONT_FAMILY.primary}>
            Already Have an Account?{' '}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(ROUTES.LoginPhoneNumber);
              }}>
              <CustomText
                style={{top: verticalScale(3)}}
                fontWeight={FONT_WEIGHT.semiBold}
                fontSize={FONT_SIZE.sm}
                TextColor={COLORS.primary}>
                Login
              </CustomText>
            </TouchableOpacity>
          </CustomText>
        </Center>
      </Container>
    </SafeArea>
  );
};

export default PasswordVerification;
