import {View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';
// component
import {
  Center,
  Container,
  Row,
  SafeArea,
} from '../../../../../../components/layout';
import {DynamicIcon} from '../../../../../../components/common/Icon';
import CustomTextInput from '../../../../../../components/forms/TextInput';
import CustomButton from '../../../../../../components/common/Button';
import CountryPickerModal from '../../../../../../components/common/CountryPickerModal';
import SocialLogin from '../../../../../../components/common/Social';
import ErrorMessage from '../../../../../../components/common/ErrorMessage';

// validation
import {SignUpValidation} from '../../../Signup/PhoneNumberVerification/validation';
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

const ForgetPhone = ({navigation}) => {
  // phone state
  const [phoneNumber, setPhoneNumber] = useState('');
  // error state
  const [Error, setError] = useState('');

  // country modal picker state
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [selectedCode, setSelectedCode] = useState({
    label: 'India',
    value: '+91',
    flag: '🇮🇳',
    iso_code: 'IN',
  });

  // button submit handler
  const handleSendOTP = () => {
    // errro
    const errors = SignUpValidation({
      phoneNumber,
      selectedCode,
    });

    if (Object.keys(errors).length > 0) {
      setError(errors.phoneNumber);
      return;
    }

    setError('');

    navigation.navigate(ROUTES.OTPVerification, {
      type: 'Phone',
      name: 'ForgetPhone',
      from: 'Forget',
    });
  };
  return (
    <SafeArea backgroundColor={COLORS.white} statusBarStyle="dark-content">
      <Container centered keyboardAware>
        <Center style={[CommonAuthStyles.img_container]}>
          <MDLogo width={scale(180)} height={verticalScale(120)} margin={5} />
        </Center>

        <Text style={[commonstyles.title]}>Forgot Password?</Text>
        <Text style={[commonstyles.subtitle]}>
          Don't worry! Reset your password {'\n'}and get back to your account.
        </Text>

        {/* text input  */}
        <View style={[CommonAuthStyles.form_container]}>
          <Row align="center" justify="center" spacing={6}>
            {/* Country Code Selector */}
            <TouchableOpacity
              style={[
                CommonAuthStyles.countryBox,
                {
                  backgroundColor:
                    selectedCode?.value && selectedCode.value.length > 0
                      ? COLORS.primary
                      : COLORS.white,
                },
              ]}
              onPress={() => setIsPickerVisible(true)}>
              <Row align="center" justify="center" spacing={3}>
                <Text style={CommonAuthStyles.flag}>{selectedCode.flag}</Text>
                <Text
                  style={[
                    CommonAuthStyles.code,
                    {
                      color:
                        selectedCode?.value && selectedCode.value.length > 0
                          ? COLORS.white
                          : COLORS.textPrimary,
                    },
                  ]}>
                  {selectedCode.value}
                </Text>
                <DynamicIcon
                  type="MaterialIcons"
                  name="keyboard-arrow-down"
                  size={20}
                  color={
                    selectedCode?.value && selectedCode.value.length > 0
                      ? COLORS.white
                      : COLORS.textPrimary
                  }
                />
              </Row>
            </TouchableOpacity>

            {/* Phone Input */}
            <CustomTextInput
              placeholder="Enter Your Phone Number *"
              keyboardType="number-pad"
              isRequired
              placeholderTextColor={COLORS.textPrimary}
              value={phoneNumber}
              maxLength={getMaxLengthForCountry(selectedCode.iso_code) || 15}
              onChangeText={setPhoneNumber}
            />
          </Row>
          {Error ? <ErrorMessage errorMessage={Error} /> : ''}
          <Row
            align="center"
            justify="flex-start"
            style={[CommonAuthStyles.login_email_phone_container]}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(ROUTES.ForgetEmail);
              }}>
              <Text
                style={[
                  commonstyles.primary,
                  commonstyles.fontSemiBold,
                  commonstyles.font12,
                ]}>
                Use Email Instead
              </Text>
            </TouchableOpacity>
          </Row>

          <CustomButton
            text="Continue"
            fullWidth
            variant={phoneNumber.length === 0 ? 'outline' : 'primary'}
            btnStyle={{
              marginTop: verticalScale(35),
            }}
            BorderColor={COLORS.borderSecondary}
            fontSize="sm"
            TextColor={
              phoneNumber.length === 0 ? COLORS.textPrimary : COLORS.white
            }
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

        {/* country modal picker  */}
        <CountryPickerModal
          isPickerVisible={isPickerVisible}
          setIsPickerVisible={setIsPickerVisible}
          selectedCode={selectedCode}
          setSelectedCode={setSelectedCode}
        />
        {/* country modal picker  */}
      </Container>
    </SafeArea>
  );
};

export default ForgetPhone;
