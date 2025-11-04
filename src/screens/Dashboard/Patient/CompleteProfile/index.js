import {View, Text, Pressable, Image, Alert} from 'react-native';
import {useState} from 'react';
import {Container, Row, SafeArea} from '../../../../components/layout';
import {COLORS} from '../../../../constants';
import {scale, verticalScale} from '../../../../constants/responsive';
import Header from '../../../../components/layout/Header';
import {ROUTES} from '../../../../navigation/routes';
import styles from './styles';
import {DynamicIcon} from '../../../../components/common/Icon';
import CustomTextInput from '../../../../components/forms/TextInput';
const CompleteProfile = ({navigation}) => {
  const [ImageModal, setImageModal] = useState(false);

  const [Profiledata, setProfiledata] = useState({
    UserProfile: '',
    fname: '',
    mname: '',
    lname: '',
    gender: '',
    email: '',
    DOB: '',
  });
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
              {/* {errors.UserProfile ? (
                <ErrorMessage
                  error_container_style={{
                    justifyContent: 'center',
                    marginTop: verticalScale(20),
                  }}
                  errorMessage={errors.UserProfile}
                />
              ) : null} */}
            </View>
            <View style={[styles.form]}>
              <CustomTextInput
                label="First Name"
                isRequired
                placeholderTextColor={COLORS.textPrimaryLight}
                placeholder="Enter Your First Name * "
                textInputStyle={[styles.textInput]}
                labelContainerStyle={[styles.lablestyle]}
                labelStyle={[styles.labeltextstyle]}
                keyboardType="default"
              />
              <CustomTextInput
                label="Middle Name"
                isRequired
                placeholderTextColor={COLORS.textPrimaryLight}
                placeholder="Enter Your Middle Name * "
                textInputStyle={[styles.textInput]}
                labelContainerStyle={[styles.lablestyle]}
                labelStyle={[styles.labeltextstyle]}
                keyboardType="default"
              />
              <CustomTextInput
                label="Last Name"
                isRequired
                placeholderTextColor={COLORS.textPrimaryLight}
                placeholder="Enter Your Last Name * "
                textInputStyle={[styles.textInput]}
                labelContainerStyle={[styles.lablestyle]}
                labelStyle={[styles.labeltextstyle]}
                keyboardType="default"
              />
              <CustomTextInput
                label="Active Phone Number*"
                isRequired
                placeholderTextColor={COLORS.textPrimaryLight}
                placeholder="+91 9664546699"
                textInputStyle={[styles.textInput]}
                labelContainerStyle={[styles.lablestyle]}
                labelStyle={[styles.labeltextstyle]}
                keyboardType="default"
                readonly
              />
            </View>
          </View>
        </Container>
      </SafeArea>
    </>
  );
};

export default CompleteProfile;
