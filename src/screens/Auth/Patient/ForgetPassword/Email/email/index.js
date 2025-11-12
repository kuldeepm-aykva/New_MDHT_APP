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
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
} from '../../../../../../constants';
import {scale, verticalScale} from '../../../../../../constants/responsive';

// routes
import {ROUTES} from '../../../../../../navigation/routes';
import {ForgetEmailValidation} from './validation';
import CustomText from '../../../../../../components/common/CustomText/CustomText';

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

        <CustomText
          TextColor={COLORS.primary}
          fontFamily={FONT_FAMILY.primary}
          fontSize={FONT_SIZE.xl}
          fontWeight={FONT_WEIGHT.bold}>
          Forgot Password?
        </CustomText>
        <CustomText
          TextColor={COLORS.textPrimary}
          textAlign="center"
          my={SPACING.xs}
          fontFamily={FONT_FAMILY.primary}
          lineHeight={SPACING.xl}
          fontWeight={FONT_WEIGHT.light}>
          Don't worry! Reset your password {'\n'}and get back to your account.
        </CustomText>

        {/* text input  */}
        <View style={[CommonAuthStyles.form_container]}>
          <Row align="center" justify="center" spacing={6}>
            {/* email Input */}
            <CustomTextInput
              placeholder="Enter Your Email Address *"
              keyboardType="number-pad"
              isRequired
              TextColor={COLORS.textDark}
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
              <CustomText
                fontWeight={FONT_WEIGHT.semiBold}
                fontSize={FONT_SIZE.sm}
                TextColor={COLORS.primary}>
                Use Phone Number Instead
              </CustomText>
            </TouchableOpacity>
          </Row>

          <CustomButton
            text="Continue"
            fullWidth
            variant={Email.length === 0 ? 'outline' : 'primary'}
            mt={SPACING.xl}
            BorderColor={COLORS.borderSecondary}
            fontSize="sm"
            TextColor={Email.length === 0 ? COLORS.textPrimary : COLORS.white}
            onPress={handleSendOTP}
          />
        </View>

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

export default ForgetEmail;
