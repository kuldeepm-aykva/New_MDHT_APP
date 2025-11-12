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
import {MDLogo, PatientIcon} from '../../../../../../assets/svgImage';

// styles
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
} from '../../../../../../constants/index';
import CommonAuthStyles from '../../../../styles';
import commonstyles from '../../../../../../constants/common';
import {scale, verticalScale} from '../../../../../../constants/responsive';

// validation
import {PasswordValidation} from '../../../Signup/PasswordVerification/validation';
import {ROUTES} from '../../../../../../navigation/routes';
import CustomText from '../../../../../../components/common/CustomText/CustomText';

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

  const ButttonDisable = !Password.Password || !Password.ConfirmPassword;

  return (
    <SafeArea backgroundColor={COLORS.white} statusBarStyle="dark-content">
      <Container centered keyboardAware>
        <Center style={[CommonAuthStyles.img_container]}>
          <MDLogo width={scale(180)} height={verticalScale(120)} margin={5} />
        </Center>

        <CustomText
          TextColor={COLORS.primary}
          fontFamily={FONT_FAMILY.primary}
          fontSize={FONT_SIZE.xl}
          fontWeight={FONT_WEIGHT.bold}>
          Reset Password
        </CustomText>
        <CustomText
          TextColor={COLORS.textPrimary}
          textAlign="center"
          my={SPACING.xs}
          fontFamily={FONT_FAMILY.primary}
          lineHeight={SPACING.xl}
          fontWeight={FONT_WEIGHT.light}>
          Use 8+ characters with a capital letter,{'\n'} number, & special
          symbol.
        </CustomText>

        <View style={[CommonAuthStyles.form_container]}>
          <Column align="center" justify="center" spacing={12}>
            {/*  Password field */}
            <CustomTextInput
              flex={0}
              placeholder="Enter New Password *"
              icon
              TextColor={COLORS.textDark}
              iconSource={showPassword.PasswordShow ? 'eye' : 'eye-off'}
              iconType="Feather"
              secureTextEntry={!showPassword.PasswordShow}
              value={Password.Password}
              onChangeText={text => handleInputChange('Password', text)}
              handleIconClick={() => togglePasswordVisibility('PasswordShow')}
              error={Error.PasswordError}
              iconColor={
                showPassword.PasswordShow
                  ? COLORS.textPrimary
                  : COLORS.borderSecondary
              }
            />

            {/*  Confirm Password field */}
            <CustomTextInput
              flex={0}
              placeholder="Confirm New Password *"
              icon
              TextColor={COLORS.textDark}
              iconSource={showPassword.ConfirmPasswordShow ? 'eye' : 'eye-off'}
              iconType="Feather"
              secureTextEntry={!showPassword.ConfirmPasswordShow}
              value={Password.ConfirmPassword}
              onChangeText={text => handleInputChange('ConfirmPassword', text)}
              handleIconClick={() =>
                togglePasswordVisibility('ConfirmPasswordShow')
              }
              error={Error.ConfirmPasswordError}
              iconColor={
                showPassword.ConfirmPasswordShow
                  ? COLORS.textPrimary
                  : COLORS.borderSecondary
              }
            />
          </Column>
        </View>

        <CustomButton
          text="Reset Password"
          fullWidth
          variant={ButttonDisable ? 'outline' : 'primary'}
          mt={SPACING.lg}
          BorderColor={COLORS.borderSecondary}
          fontSize="sm"
          TextColor={ButttonDisable ? COLORS.textPrimary : COLORS.white}
          onPress={handleSetPassword}
        />

        <Center style={[CommonAuthStyles.Already_acc_container]}>
          <CustomText
            TextColor={COLORS.textPrimary}
            fontSize={FONT_SIZE.sm}
            fontFamily={FONT_FAMILY.primary}>
            Back to {''}
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

export default ResetPassword;
