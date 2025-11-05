import {
  View,
  Text,
  Image,
  Pressable,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import {useState} from 'react';
import {Column, Container, Row, SafeArea} from '../../../../components/layout';
import {COLORS, FONT_SIZE, FONT_WEIGHT, RADIUS} from '../../../../constants';
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

const CompleteProfile = ({navigation}) => {
  const [ImageModal, setImageModal] = useState(false);

  const [Profiledata, setProfiledata] = useState({
    UserProfile: '',
    fname: '',
    mname: '',
    lname: '',
    phone: '',
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
      Alert.alert('Success', 'Profile submitted successfully!');
    }
  };

  const ButtonDisable =
    Object.keys(CompleteProfileValidation(Profiledata)).length === 0 &&
    Profiledata.UserProfile &&
    Profiledata.fname &&
    Profiledata.mname &&
    Profiledata.lname &&
    Profiledata.gender &&
    Profiledata.DOB &&
    Profiledata.email &&
    Profiledata.country;

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
        <Container scrollable backgroundColor={COLORS.white}>
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
                    onPress={() => setImageModal(!ImageModal)}>
                    <DynamicIcon
                      name="edit"
                      type="Entypo"
                      color={COLORS.white}
                      size={scale(15)}
                    />
                  </Pressable>
                </View>
              </Row>
              <Row align="center" justify="center" style={{marginTop:verticalScale(12)}}>
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
                placeholderTextColor={COLORS.textPrimaryLight}
                placeholder="Enter Your First Name * "
                textInputStyle={[styles.textInput]}
                labelContainerStyle={[styles.lablestyle]}
                labelStyle={[styles.labeltextstyle]}
                keyboardType="default"
                value={Profiledata.fname}
                onChangeText={text =>
                  setProfiledata(prev => ({...prev, fname: text}))
                }
                error={errors.fname}
              />
              <CustomTextInput
                label="Middle Name"
                containerStyle={[styles.TextInputcontainerStyle]}
                isRequired
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
                value={Profiledata.DOB}
                onChangeText={text =>
                  setProfiledata(prev => ({...prev, DOB: text}))
                }
              />
              <CustomTextInput
                label="Active Email Address"
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
              onPress={handleSubmit}
              fullWidth
              variant={ButtonDisable ? 'outline' : 'primary'}
              btnStyle={{
                borderColor: 'rgba(110, 110, 110, 0.25)',
                borderRadius: RADIUS.lg,
                borderWidth: 1,
              }}
              textStyle={{
                // fontSize: FONT_SIZE.base,
                color: ButtonDisable ? COLORS.white : COLORS.primary,
                fontWeight: FONT_WEIGHT.semiBold,
              }}
            />
          </Column>
        </Container>
      </SafeArea>
    </>
  );
};

export default CompleteProfile;
