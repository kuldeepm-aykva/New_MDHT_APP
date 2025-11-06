import {View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';
// component
import {
  Center,
  Container,
  Row,
  SafeArea,
} from '../../../../../../components/layout';
import CustomTextInput from '../../../../../../components/forms/TextInput';
import CustomButton from '../../../../../../components/common/Button';
import CountryPickerModal from '../../../../../../components/common/CountryPickerModal';
import ErrorMessage from '../../../../../../components/common/ErrorMessage';

// validation
import {getMaxLengthForCountry} from '../../../../../../utils/validation';

// icon
import {MDLogo} from '../../../../../../assets/svgImage';

// styles
import commonstyles from '../../../../../../constants/common';
import CommonAuthStyles from '../../../../styles';
import {COLORS, FONT_SIZE} from '../../../../../../constants';
import {scale, verticalScale} from '../../../../../../constants/responsive';

// routes
import {ROUTES} from '../../../../../../navigation/routes';
import {ForgetEmailValidation} from './validation';

const ForgetEmail = ({navigation}) => {
  // Email state
  const [Email, setEmail] = useState('');
  // error state
  const [Error, setError] = useState('');

  // button submit handler
  const handleSendOTP = () => {
    const errors = ForgetEmailValidation({Email});

    if (errors.EmailError) {
      setError(errors.EmailError);
      return;
    }

    setError('');
    navigation.navigate(ROUTES.OTPVerification, {
      type: 'Email',
      name: 'ForgetPhone',
      from: 'Forget',
    });
  };
  return (
    <SafeArea backgroundColor={COLORS.white} statusBarStyle="dark-content">
      <Container centered keyboardAware>
        <Center style={[CommonAuthStyles.img_container]}>
          <MDLogo width={scale(180)} height={verticalScale(120)} />
        </Center>

        <Text style={[commonstyles.title]}>Forgot Password?</Text>
        <Text style={[commonstyles.subtitle]}>
          Don't worry! Reset your password {'\n'}and get back to your account.
        </Text>

        {/* text input  */}
        <View style={[CommonAuthStyles.form_container]}>
          <Row align="center" justify="center" spacing={6}>
            {/* email Input */}
            <CustomTextInput
              placeholder="Enter Your Email Address *"
              keyboardType="number-pad"
              isRequired
              flex={0}
              placeholderTextColor={COLORS.textPrimary}
              value={Email}
              onChangeText={setEmail}
            />
          </Row>
          {Error ? <ErrorMessage errorMessage={Error} /> : ''}
          <Row
            align="center"
            justify="flex-start"
            style={[CommonAuthStyles.login_email_phone_container]}>
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
                Use Phone Number Instead
              </Text>
            </TouchableOpacity>
          </Row>

          <CustomButton
            text="Continue"
            fullWidth
            variant={Email.length === 0 ? 'outline' : 'primary'}
            btnStyle={{
              marginTop: verticalScale(35),
            }}
            BorderColor={COLORS.borderSecondary}
            fontSize="sm"
            TextColor={Email.length === 0 ? COLORS.textPrimary : COLORS.white}
            onPress={handleSendOTP}
          />
        </View>

        <Center style={[CommonAuthStyles.Already_acc_container]}>
          <Text style={[CommonAuthStyles.policy_text]}>
            Back to{' '}
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

export default ForgetEmail;
