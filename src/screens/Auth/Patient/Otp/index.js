import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {useState} from 'react';
import React from 'react';

// component
import {
  Center,
  Column,
  Container,
  Row,
  SafeArea,
} from '../../../../components/layout';
import CustomButton from '../../../../components/common/Button';
import ErrorMessage from '../../../../components/common/ErrorMessage';
import OtpInput from '../../../../components/forms/Otp';

// style
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
} from '../../../../constants';
import CommonAuthStyles from '../../styles';
import commonstyles from '../../../../constants/common';
import {verticalScale} from '../../../../constants/responsive';

// icon
import {PatientIcon} from '../../../../assets/svgImage';

// validation

// routes
import {ROUTES} from '../../../../navigation/routes';
import {useRoute} from '@react-navigation/native';
import {OTpValidation} from './validation';
import CustomText from '../../../../components/common/CustomText/CustomText';

const OTPVerification = ({navigation}) => {
  const route = useRoute();
  const {name, type, from} = route.params || {};

  // otp state
  const [otp, setotp] = useState('');
  // error state
  const [error, seterror] = useState('');

  // otp handler
  const handleOtpChange = value => {
    setotp(value);
  };

  // handle button handler
  const handleVerify = () => {
    // error
    const errors = OTpValidation({
      otp,
    });

    if (Object.keys(errors).length > 0) {
      seterror(errors.otp);
      return;
    }
    seterror('');

    if (from === 'Forget') {
      seterror('');
      navigation.navigate(ROUTES.ResetPassword);
    }
    if (from === 'login') {
      seterror('');
      navigation.navigate(ROUTES.PatientDashboard);
      // Alert.alert('Dashboard');
    }
    if (from === 'signup') {
      seterror('');
      navigation.navigate(ROUTES.PasswordVerification);
    }

    // navigation.navigate(ROUTES.PasswordVerification);
  };
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
          Verify Your Number
        </CustomText>
        <CustomText
          TextColor={COLORS.textPrimary}
          textAlign="center"
          my={SPACING.xs}
          fontFamily={FONT_FAMILY.primary}
          lineHeight={SPACING.xl}
          fontWeight={FONT_WEIGHT.regular}>
          We have sent a verification code to your {'\n'} registered mobile
          number{' '}
          <CustomText
            fontWeight={FONT_WEIGHT.semiBold}
            TextColor={COLORS.textPrimary}>
            {type === 'Phone'
              ? '+91 9004991231'
              : type === 'Email'
              ? 'karandesai@gmail.com'
              : ''}
          </CustomText>
        </CustomText>

        {/* otp textinput  */}
        <Column align="center" justify="center">
          <OtpInput
            length={4}
            onOtpChange={handleOtpChange}
            mainConatinerStyle={{
              marginTop: verticalScale(30),
            }}
          />
          {error ? <ErrorMessage errorMessage={error} /> : ''}
        </Column>

        <Center style={[CommonAuthStyles.dividerContainer]}>
          <CustomText
            TextColor={COLORS.textPrimary}
            fontSize={FONT_SIZE.sm}
            fontFamily={FONT_FAMILY.primary}>
            Did not receive OTP?{' '}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(ROUTES.LoginPhoneNumber);
              }}>
              <CustomText
                style={{top: verticalScale(3)}}
                fontWeight={FONT_WEIGHT.semiBold}
                fontSize={FONT_SIZE.sm}
                TextColor={COLORS.primary}>
                Resend
              </CustomText>
            </TouchableOpacity>
          </CustomText>
        </Center>
        <CustomButton
          text="Verify OTP"
          fullWidth
          variant={otp.length === 0 ? 'outline' : 'primary'}
          BorderColor={COLORS.borderSecondary}
          fontSize="sm"
          TextColor={otp.length === 0 ? COLORS.textPrimary : COLORS.white}
          onPress={handleVerify}
        />
        {name === 'ForgetPhone' ? (
          ''
        ) : (
          <Center style={[CommonAuthStyles.Already_acc_container]}>
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
        )}
      </Container>
    </SafeArea>
  );
};

export default OTPVerification;
