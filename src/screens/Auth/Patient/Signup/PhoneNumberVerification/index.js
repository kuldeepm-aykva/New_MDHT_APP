import {View, Text, TouchableOpacity, Modal} from 'react-native';
import {useState} from 'react';
// icon
import {PatientIcon} from '../../../../../assets/svgImage';

// components
import {
  Center,
  Container,
  Row,
  SafeArea,
} from '../../../../../components/layout';
import CustomButton from '../../../../../components/common/Button';
import CustomTextInput from '../../../../../components/forms/TextInput';
import {DynamicIcon} from '../../../../../components/common/Icon';
import CountryPickerModal from '../../../../../components/common/CountryPickerModal';
import ErrorMessage from '../../../../../components/common/ErrorMessage';

// styles
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  SPACING,
} from '../../../../../constants';
import commonstyles from '../../../../../constants/common';
import CommonAuthStyles from '../../../styles';
import {scale, verticalScale} from '../../../../../constants/responsive';
import styles from './styles';

// validation
import {getMaxLengthForCountry} from '../../../../../utils/validation';
import {SignUpValidation} from './validation';

// routes
import {ROUTES} from '../../../../../navigation/routes';
import CustomText from '../../../../../components/common/CustomText/CustomText';

const PhoneNumberVerification = ({navigation}) => {
  // phone state
  const [phoneNumber, setPhoneNumber] = useState('');
  // error state
  const [Error, setError] = useState('');
  // country picker modal state
  const [isPickerVisible, setIsPickerVisible] = useState(false);
  const [selectedCode, setSelectedCode] = useState({
    label: 'India',
    value: '+91',
    flag: '🇮🇳',
    iso_code: 'IN',
  });

  // otp handler
  const handleSendOTP = () => {
    // error
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
      from: 'signup',
    });
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
          Create Your Account
        </CustomText>
        <CustomText
          TextColor={COLORS.textPrimary}
          textAlign="center"
          my={SPACING.xs}
          fontFamily={FONT_FAMILY.primary}
          lineHeight={SPACING.xl}
          fontWeight={FONT_WEIGHT.regular}>
          Verify your phone number to ensure {'\n'} secure access to health
          data.
        </CustomText>

        {/* textinput  */}
        <View style={[styles.form_container]}>
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
              TextColor={COLORS.textDark}
              placeholderTextColor={COLORS.textPrimary}
              value={phoneNumber}
              maxLength={getMaxLengthForCountry(selectedCode.iso_code) || 15}
              onChangeText={setPhoneNumber}
            />
          </Row>
          {Error ? <ErrorMessage errorMessage={Error} /> : ''}

          <CustomButton
            text="Send OTP"
            fullWidth
            variant={phoneNumber.length === 0 ? 'outline' : 'primary'}
            mt={SPACING.lg}
            BorderColor={COLORS.borderSecondary}
            fontSize="sm"
            TextColor={
              phoneNumber.length === 0 ? COLORS.textPrimary : COLORS.white
            }
            onPress={handleSendOTP}
          />
        </View>

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

export default PhoneNumberVerification;
