import {View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';

// components
import {
  Center,
  Column,
  Container,
  Row,
  SafeArea,
} from '../../../../../../components/layout';
import CustomTextInput from '../../../../../../components/forms/TextInput';
import CustomButton from '../../../../../../components/common/Button';

// icon
import {PatientIcon} from '../../../../../../assets/svgImage';

// styles
import {COLORS, FONT_SIZE} from '../../../../../../constants/index';
import CommonAuthStyles from '../../../../styles';
import commonstyles from '../../../../../../constants/common';
import {verticalScale} from '../../../../../../constants/responsive';

// validation
import {PasswordValidation} from '../../../Signup/PasswordVerification/validation';
import {ROUTES} from '../../../../../../navigation/routes';

// routes

const ResetPassword = ({navigation}) => {
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
      navigation.navigate(ROUTES.LoginPhoneNumber);
    }
  };

  return (
    <SafeArea backgroundColor={COLORS.white} statusBarStyle="dark-content">
      <Container centered keyboardAware>
        <Center style={[CommonAuthStyles.img_container]}>
          <PatientIcon width={180} height={110} margin={5} />
        </Center>

        <Text style={[commonstyles.title]}>Reset Password</Text>
        <Text style={[commonstyles.subtitle]}>
          Use 8+ characters with a capital letter,{'\n'} number, & special
          symbol
        </Text>

        <View style={[styles.form_container]}>
          <Column align="center" justify="center" spacing={12}>
            {/*  Password field */}
            <CustomTextInput
              flex={0}
              placeholder="Enter New Password *"
              icon
              iconSource={showPassword.PasswordShow ? 'eye' : 'eye-off'}
              iconType="Feather"
              secureTextEntry={!showPassword.PasswordShow}
              value={Password.Password}
              onChangeText={text => handleInputChange('Password', text)}
              handleIconClick={() => togglePasswordVisibility('PasswordShow')}
              error={Error.PasswordError}
            />

            {/*  Confirm Password field */}
            <CustomTextInput
              flex={0}
              placeholder="Confirm New Password *"
              icon
              iconSource={showPassword.ConfirmPasswordShow ? 'eye' : 'eye-off'}
              iconType="Feather"
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
          text="Reset Password"
          fullWidth
          variant={
            Password.Password.length === 0 ||
            Password.ConfirmPassword.length === 0
              ? 'outline'
              : 'primary'
          }
          btnStyle={{
            borderColor: COLORS.borderSecondary,
            marginTop: verticalScale(20),
          }}
          textStyle={{
            fontSize: FONT_SIZE.sm,
            color:
              Password.Password.length === 0 ||
              Password.ConfirmPassword.length === 0
                ? COLORS.textPrimary
                : COLORS.white,
          }}
          onPress={handleSetPassword}
        />

        <Center style={[CommonAuthStyles.Already_acc_container]}>
          <Text style={[CommonAuthStyles.policy_text]}>
            Back to{" "}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(ROUTES.LoginPhoneNumber);
              }}>
              <Text
                style={[
                  CommonAuthStyles.policy_text,
                  commonstyles.primary,
                  commonstyles.fontSemiBold,
                  {top: verticalScale(4)},
                ]}>
                Login
              </Text>
            </TouchableOpacity>
          </Text>
        </Center>
      </Container>
    </SafeArea>
  );
};

export default ResetPassword;
