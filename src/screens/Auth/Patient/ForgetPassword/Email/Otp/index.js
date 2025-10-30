import {View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';
// icon
import {MDLogo} from '../../../../../../assets/svgImage';

// components
import {
  Center,
  Column,
  Container,
  SafeArea,
} from '../../../../../../components/layout';
import OtpInput from '../../../../../../components/forms/Otp';
import ErrorMessage from '../../../../../../components/common/ErrorMessage';
import CustomButton from '../../../../../../components/common/Button';

// styles
import CommonAuthStyles from '../../../../styles';
import commonstyles from '../../../../../../constants/common';
import {COLORS, FONT_SIZE} from '../../../../../../constants';
import {verticalScale} from '../../../../../../constants/responsive';

// validation
import {OTpValidation} from '../../../Signup/OtpVerification/validation';
import { ROUTES } from '../../../../../../navigation/routes';
const ForgetEmailOTP = ({navigation}) => {
  // otp state
  const [otp, setotp] = useState('');
  // error state
  const [error, seterror] = useState('');

  // textinput hanlder for otp
  const handleOtpChange = value => {
    setotp(value);
  };
  // button submit handler
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

    navigation.navigate(ROUTES.ResetPassword);
  };
  return (
    <SafeArea backgroundColor={COLORS.white} statusBarStyle="dark-content">
      <Container centered keyboardAware>
        <Center style={[CommonAuthStyles.img_container]}>
          <MDLogo width={180} height={110} margin={5} />
        </Center>

        <Text style={[commonstyles.title]}>Verify Your Number</Text>
        <Text style={[commonstyles.subtitle]}>
          We have sent a verification code to your {'\n'} registered mobile
          number{' '}
          <Text style={[commonstyles.fontSemiBold, commonstyles.textPrimary]}>
            karandesai@gmail.com
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

        <Center style={[CommonAuthStyles.dividerContainer]}>
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
          }}
          textStyle={{
            fontSize: FONT_SIZE.sm,
            color: otp.length === 0 ? COLORS.textPrimary : COLORS.white,
          }}
          onPress={handleVerify}
        />
      </Container>
    </SafeArea>
  );
};

export default ForgetEmailOTP;
