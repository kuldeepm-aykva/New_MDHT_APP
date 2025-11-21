import {Text, View, Pressable, TouchableOpacity, Image} from 'react-native';
import {useState} from 'react';
import {
  Center,
  Column,
  Container,
  Row,
  SafeArea,
} from '../../../../components/layout';
import {COLORS} from '../../../../constants';
import {scale, verticalScale} from '../../../../constants/responsive';
import Header from '../../../../components/layout/Header';
import {ROUTES} from '../../../../navigation/routes';
import styles from './styles';
import {DynamicIcon} from '../../../../components/common/Icon';
import CustomTextInput from '../../../../components/forms/TextInput';
import CustomButton from '../../../../components/common/Button';
import {CompleteProfileValidation} from './validation';
import ErrorMessage from '../../../../components/common/ErrorMessage';
import OptionSelector from '../../../../components/common/OptionSelector';
import CustomModal from '../../../../components/common/Modal';
import OtpInput from '../../../../components/forms/Otp';
import commonstyles from '../../../../constants/common';
import CommonAuthStyles from '../../../Auth/styles';
import {OTpValidation} from '../../../Auth/Patient/Otp/validation';
import {formatDate} from '../../../../utils/validation';
import DatePickerModal from '../../../../components/common/DatePickerModal';
import BottomModal from '../../../../components/common/BottomModal';
import {
  handleTakePhoto,
  handleUploadFromGallery,
} from '../../../../utils/imagePicker';

const CompleteProfile = ({navigation}) => {
  const [ImageModal, setImageModal] = useState(false);
  const [EmailVerfied, setEmailVerfied] = useState(false);
  const [modalDatePicker, setModalDatePicker] = useState(false);
  const [ProfileSubmitted, setProfileSubmitted] = useState(false);

  // otp state
  const [otp, setOtp] = useState('');
  // error state
  const [otpError, setotpError] = useState('');

  // otp handler
  const handleOtpChange = value => {
    setOtp(value);
  };

  // handle button handler
  const handleVerify = () => {
    // error
    const errors = OTpValidation({
      otp,
    });

    if (Object.keys(errors).length > 0) {
      setotpError(errors.otp);
      return;
    }
    setotpError('');
    setEmailVerfied(!EmailVerfied);
  };

  const [Profiledata, setProfiledata] = useState({
    UserProfile: '',
    fname: '',
    mname: '',
    lname: '',
    phone: '+91 9004991391',
    gender: '',
    DOB: '',
    email: '',
    country: 'India',
  });

  const [errors, seterrors] = useState({
    UserProfile: '',
    fname: '',
    mname: '',
    lname: '',
    phone: '',
    gender: '',
    DOB: '',
    email: '',
    country: '',
  });

  const handleSubmit = () => {
    const validationErrors = CompleteProfileValidation(Profiledata);
    seterrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setProfileSubmitted(!ProfileSubmitted);
    }
  };

  const handleGallery = () => {
    handleUploadFromGallery({
      setImage: setProfiledata,
      setErrors: seterrors,
      setModal: setImageModal,
      key: 'UserProfile',
    });
  };

  const handleCamera = () => {
    handleTakePhoto({
      setImage: setProfiledata,
      setErrors: seterrors,
      setModal: setImageModal,
      key: 'UserProfile',
    });
  };
  const allFieldsFilled =
    Profiledata.UserProfile &&
    Profiledata.fname &&
    Profiledata.mname &&
    Profiledata.lname &&
    Profiledata.phone &&
    Profiledata.gender &&
    Profiledata.DOB &&
    Profiledata.email &&
    Profiledata.country;

  const ButtonDisable = !allFieldsFilled;

  return (
    <>
      <Header
        title="My Profile"
        SearchPress={() => {
          navigation.navigate(ROUTES.DashboardSearch);
        }}
        NotificationPress
      />
      <SafeArea
        backgroundColor={COLORS.white}
        style={{paddingTop: scale(5)}}
        statusBarColor={COLORS.transparent}
        statusBarStyle="light-content">
        <Container scrollable keyboardAware backgroundColor={COLORS.white}>
          <View style={[styles.main_card]}>
            {/* Profile Picture */}
            <View>
              <Text style={styles.heading}>Profile</Text>
              <Row align="center" justify="center">
                <View
                  style={[
                    styles.user_icon,
                    {backgroundColor: Profiledata.UserProfile ? '#898989' : ''},
                  ]}>
                  {Profiledata.UserProfile ? (
                    <Image
                      source={{uri: Profiledata.UserProfile}}
                      style={styles.avatar}
                    />
                  ) : (
                    <Image
                      style={styles.avatar}
                      resizeMode="contain"
                      source={require('../../../../assets/images/patient/Dashboard/default_user.png')}
                    />
                  )}
                  <Pressable
                    style={[styles.profile_upload_icon]}
                    onPress={() => setImageModal(true)}>
                    <DynamicIcon
                      name="edit"
                      type="Entypo"
                      color={COLORS.white}
                      size={scale(15)}
                    />
                  </Pressable>
                </View>
              </Row>
              <Row
                align="center"
                justify="center"
                style={{marginTop: verticalScale(12)}}>
                {errors.UserProfile ? (
                  <ErrorMessage errorMessage={errors.UserProfile} />
                ) : null}
              </Row>
            </View>
            <View style={[styles.form]}>
              <CustomTextInput
                label="First Name"
                containerStyle={[styles.TextInputcontainerStyle]}
                isRequired
                BorderColor={COLORS.borderSecondary}
                variant="outline"
                placeholderTextColor={COLORS.textPrimaryLight}
                placeholder="Enter Your First Name * "
                textInputStyle={[styles.textInput]}
                labelContainerStyle={[styles.lablestyle]}
                labelStyle={[styles.labeltextstyle]}
                keyboardType="default"
                value={Profiledata.fname}
                Radius="lg"
                onChangeText={text =>
                  setProfiledata(prev => ({...prev, fname: text}))
                }
                error={errors.fname}
              />
              <CustomTextInput
                label="Middle Name"
                containerStyle={[styles.TextInputcontainerStyle]}
                isRequired
                BorderColor={COLORS.borderSecondary}
                variant="outline"
                placeholderTextColor={COLORS.textPrimaryLight}
                placeholder="Enter Your Middle Name * "
                textInputStyle={[styles.textInput]}
                labelContainerStyle={[styles.lablestyle]}
                labelStyle={[styles.labeltextstyle]}
                keyboardType="default"
                value={Profiledata.mname}
                onChangeText={text =>
                  setProfiledata(prev => ({...prev, mname: text}))
                }
                error={errors.mname}
              />
              <CustomTextInput
                label="Last Name"
                containerStyle={[styles.TextInputcontainerStyle]}
                isRequired
                BorderColor={COLORS.borderSecondary}
                variant="outline"
                placeholderTextColor={COLORS.textPrimaryLight}
                placeholder="Enter Your Last Name * "
                textInputStyle={[styles.textInput]}
                labelContainerStyle={[styles.lablestyle]}
                labelStyle={[styles.labeltextstyle]}
                keyboardType="default"
                value={Profiledata.lname}
                onChangeText={text =>
                  setProfiledata(prev => ({...prev, lname: text}))
                }
                error={errors.lname}
              />
              <CustomTextInput
                BorderColor={COLORS.borderSecondary}
                variant="outline"
                label="Active Phone Number"
                containerStyle={[styles.TextInputcontainerStyle]}
                isRequired
                placeholderTextColor={COLORS.textPrimaryLight}
                placeholder="+91 9664546699"
                textInputStyle={[styles.textInput]}
                labelContainerStyle={[styles.lablestyle]}
                labelStyle={[styles.labeltextstyle]}
                readonly
                verifiedConfirm="Verified"
                verifiedConfirmColor
                confirmIcon="verified"
                editable={false}
                verifiedIcontype="MaterialIcons"
                verifiedIconSize={12}
                verifiedConfirmContainerStyle={{flexDirection: 'row-reverse'}}
                value={Profiledata.phone}
                onChangeText={text =>
                  setProfiledata(prev => ({...prev, phone: text}))
                }
                error={errors.phone}
              />
              <View style={styles.genderContainer}>
                <OptionSelector
                  label="Select Your Gender *"
                  options={['Male', 'Female', 'Other']}
                  selected={Profiledata.gender}
                  onSelect={gender =>
                    setProfiledata(prev => ({...prev, gender}))
                  }
                  error={errors.gender}
                />
              </View>

              <CustomTextInput
                BorderColor={COLORS.borderSecondary}
                variant="outline"
                label="Date of Birth"
                containerStyle={[styles.TextInputcontainerStyle]}
                isRequired
                placeholderTextColor={COLORS.textPrimaryLight}
                placeholder="Select Your DOB"
                textInputStyle={[styles.textInput]}
                labelContainerStyle={[styles.lablestyle]}
                labelStyle={[styles.labeltextstyle]}
                icon
                iconSource="date"
                iconType="Fontisto"
                RightIconContainerStyle={{
                  top: 14,
                }}
                iconColor={COLORS.primary}
                error={errors.DOB}
                handleIconClick={() => setModalDatePicker(true)}
                value={formatDate(Profiledata.DOB)}
              />
              <CustomTextInput
                label="Active Email Address"
                BorderColor={COLORS.borderSecondary}
                variant="outline"
                isRequired
                containerStyle={[styles.TextInputcontainerStyle]}
                placeholderTextColor={COLORS.textPrimaryLight}
                placeholder="Enter Your Email Address"
                textInputStyle={[styles.textInput]}
                labelContainerStyle={[styles.lablestyle]}
                labelStyle={[styles.labeltextstyle]}
                verifiedConfirm="Verify"
                verifiedConfirmStyle={{
                  color: COLORS.textPrimary,
                }}
                verifyOnPress={() => {
                  setEmailVerfied(!EmailVerfied);
                }}
                value={Profiledata.email}
                onChangeText={text =>
                  setProfiledata(prev => ({...prev, email: text}))
                }
                error={errors.email}
              />
              <CustomTextInput
                label="Country"
                containerStyle={[styles.TextInputcontainerStyle]}
                isRequired
                BorderColor={COLORS.borderSecondary}
                variant="outline"
                placeholderTextColor={COLORS.textPrimary}
                placeholder="India"
                textInputStyle={[styles.textInput]}
                labelContainerStyle={[styles.lablestyle]}
                labelStyle={[styles.labeltextstyle]}
                readonly
                verifiedConfirm="Auto Detected"
                verifiedConfirmStyle={{
                  color: COLORS.primary,
                }}
                editable={false}
                verifiedIcontype="MaterialIcons"
                verifiedIconSize={12}
                verifiedConfirmContainerStyle={{flexDirection: 'row-reverse'}}
                value={Profiledata.country}
                onChangeText={text =>
                  setProfiledata(prev => ({...prev, country: text}))
                }
                error={errors.country}
              />
            </View>
          </View>
          <Column align="center" justify="center">
            <CustomButton
              text="Submit"
              variant={ButtonDisable ? 'outline' : 'primary'}
              fullWidth
              Radius="lg"
              fontSize="md"
              onPress={handleSubmit}
            />
          </Column>
        </Container>
      </SafeArea>

      {/* emnail otp verfication modal  */}
      <CustomModal
        visible={EmailVerfied}
        onClose={() => setEmailVerfied(false)}
        modalContainerStyle={[styles.EmailVerfiedModalStyle]}>
        <View>
          <Column align="center" justify="center">
            <Text style={styles.modal_title}>Verify Your Email</Text>
            <Text style={styles.modal_subtitle}>
              We have sent a verification code to
            </Text>
            <Text
              style={[
                commonstyles.fontSemiBold,
                commonstyles.font14,
                commonstyles.textPrimary,
              ]}>
              {Profiledata.email || 'abc@gmail.com'}
            </Text>
          </Column>
          <View>
            <OtpInput
              length={4}
              onOtpChange={handleOtpChange}
              OtpInputStyle={{
                width: scale(50),
                height: verticalScale(50),
                marginTop: verticalScale(35),
                borderRadius: scale(10),
              }}
            />

            {otpError ? (
              <ErrorMessage
                error_container_style={{
                  marginTop: verticalScale(10),
                  paddingRight: scale(33),
                }}
                errorMessage={otpError}
              />
            ) : null}
          </View>

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
            size="medium"
            variant={otp.length === 0 ? 'outline' : 'primary'}
            BorderColor={COLORS.borderSecondary}
            fontSize="sm"
            TextColor={otp.length === 0 ? COLORS.textPrimary : COLORS.white}
            onPress={handleVerify}
          />
        </View>
      </CustomModal>
      {/* email otp verfication modal  */}

      {/* Date Picker Modal */}
      <DatePickerModal
        visible={modalDatePicker}
        onClose={() => setModalDatePicker(false)}
        date={Profiledata.DOB}
        onDateChange={date => setProfiledata(prev => ({...prev, DOB: date}))}
      />

      {/* profile updated modal  */}
      <CustomModal
        visible={ProfileSubmitted}
        onClose={() => setProfileSubmitted(false)}
        modalContainerStyle={[styles.EmailVerfiedModalStyle]}>
        <Column align="center" justify="center">
          <Row align="center" justify="center" spacing={10}>
            <DynamicIcon
              type="Ionicons"
              name="checkmark-circle"
              size={scale(22)}
              color={COLORS.success}
            />
            <Text style={styles.profile_modal_title}>Profile Updated!</Text>
          </Row>
          <Text
            style={[
              commonstyles.fontRegular,
              commonstyles.textPrimary,
              commonstyles.font12,
              styles.profile_modal_subtitle,
              {textAlign: 'center'},
            ]}>
            Thanks for updating your details. You are now a {'\n'}Verified
            MDHealthTrak User!
          </Text>
        </Column>
      </CustomModal>
      {/* profile updated modal  */}

      <BottomModal visible={ImageModal} onClose={() => setImageModal(false)}>
        <>
          <TouchableOpacity
            style={[styles.BottomModal_btn]}
            onPress={handleCamera}>
            <Text style={[styles.BottomModal_btn_text]}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleGallery}
            style={[styles.BottomModal_btn]}>
            <Text style={[styles.BottomModal_btn_text]}>
              Upload from Gallery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.BottomModal_btn]}
            onPress={() => setImageModal(false)}>
            <Text style={[styles.BottomModal_btn_text]}>Cancel</Text>
          </TouchableOpacity>
        </>
      </BottomModal>
    </>
  );
};

export default CompleteProfile;
