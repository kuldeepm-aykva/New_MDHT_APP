import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import React from 'react';

// component
import {
  Center,
  Column,
  Container,
  Row,
  SafeArea,
} from '../../../../../components/layout';
import OtpInput from '../../../../../components/forms/Otp';
import CustomButton from '../../../../../components/common/Button';
import ErrorMessage from '../../../../../components/common/ErrorMessage';

// style
import {COLORS, FONT_SIZE} from '../../../../../constants';
import CommonAuthStyles from '../../../styles';
import commonstyles from '../../../../../constants/common';
import {verticalScale} from '../../../../../constants/responsive';
import {styles} from './styles';

// icon
import {PatientIcon} from '../../../../../assets/svgImage';

// validation
import {OTpValidation} from './validation';

// routes
import {ROUTES} from '../../../../../navigation/routes';
import {useRoute} from '@react-navigation/native';

const OTPVerification = ({navigation}) => {
  const route = useRoute();
  const {name, type} = route.params || {};

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

    navigation.navigate(ROUTES.PasswordVerification);
  };
  return (
    <SafeArea backgroundColor={COLORS.white} statusBarStyle="dark-content">
      <Container centered keyboardAware>
        <Center style={[CommonAuthStyles.img_container]}>
          <PatientIcon width={180} height={110} margin={5} />
        </Center>

        <Text style={[commonstyles.title]}>Verify Your Number</Text>
        <Text style={[commonstyles.subtitle]}>
          We have sent a verification code to your {'\n'} registered mobile
          number{' '}
          <Text style={[commonstyles.fontSemiBold, commonstyles.textPrimary]}>
            {type === 'Phone' ? '+91 1234567890' : 'karandesai@gmail.com'}
          </Text>
        </Text>

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

        <Center style={[styles.otp_nt_receive_container]}>
          <Text style={[CommonAuthStyles.policy_text]}>
            Did not receive OTP?{' '}
            <TouchableOpacity>
              <Text
                style={[
                  CommonAuthStyles.policy_text,
                  commonstyles.primary,
                  commonstyles.fontSemiBold,
                  {top: verticalScale(4)},
                ]}>
                Resend
              </Text>
            </TouchableOpacity>
          </Text>
        </Center>
        <CustomButton
          text="Verify OTP"
          fullWidth
          variant={otp.length === 0 ? 'outline' : 'primary'}
          btnStyle={{
            borderColor: COLORS.borderSecondary,
            marginTop: verticalScale(20),
          }}
          textStyle={{
            fontSize: FONT_SIZE.base,
            color: otp.length === 0 ? COLORS.textPrimary : COLORS.white,
          }}
          onPress={handleVerify}
        />
        <Center style={[styles.Already_acc_container]}>
          <Text style={[CommonAuthStyles.policy_text]}>
            Already Have an Account?{' '}
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

export default OTPVerification;
