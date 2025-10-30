import {View, Text, Button, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {
  Center,
  Column,
  Container,
  Row,
  SafeArea,
} from '../../components/layout';
import {COLORS, FONT_SIZE} from '../../constants';
import Styles from './styles';
import commonstyles from '../../constants/common';
import {Doctor, FamilyIcon, MDLogo, PatientIcon} from '../../assets/svgImage';
import {isTablet, scale, verticalScale} from '../../constants/responsive';
import CustomButton from '../../components/common/Button';
import styles from './styles';
import {DynamicIcon} from '../../components/common/Icon';
import { ROUTES } from '../../navigation/routes';

const RoleSelection = ({navigation}) => {
  const [selectedRole, setselectedRole] = useState('');

  const handleNavigate = () => {
    if (selectedRole === 'patient') {
      navigation.navigate('PhoneNumberVerification');
    } else if (selectedRole === 'doctor') {
      navigation.navigate('DoctorSignup');
    } else if (selectedRole === 'family') {
      navigation.navigate('familySignUpAccount');
    }
  };

  return (
    <SafeArea backgroundColor={COLORS.white} statusBarStyle="dark-content">
      <Container padding="large" centered>
        <Text style={[commonstyles.title]}>Welcome!</Text>
        <Text style={[commonstyles.subtitle]}>Pick a role to get started</Text>

        <Row align="center" justify="center" style={styles.logo_container}>
          {selectedRole === 'patient' ? (
            <PatientIcon width={scale(251)} height={verticalScale(120)} />
          ) : selectedRole === 'doctor' ? (
            <Doctor width={scale(251)} height={verticalScale(120)} />
          ) : selectedRole === 'family' ? (
            <FamilyIcon width={scale(251)} height={verticalScale(120)} />
          ) : (
            <MDLogo width={scale(251)} height={verticalScale(169)} />
          )}
        </Row>

        <Column
          align="center"
          justify="center"
          spacing={scale(15)}
          style={[styles.btnContainer]}>
          {/* Patient */}
          <CustomButton
            text="I’m a Patient"
            fullWidth={true}
            variant="outline"
            selected={selectedRole === 'patient'}
            btnStyle={{
              borderColor: COLORS.borderSecondary,
            }}
            textStyle={{
              fontSize: FONT_SIZE.sm,
              color:
                selectedRole === 'patient' ? COLORS.white : COLORS.textPrimary,
            }}
            onPress={() => {
              setselectedRole('patient');
              handleNavigate();
            }}
          />

          {/* Doctor */}
          <CustomButton
            text="I’m a Doctor"
            fullWidth={true}
            variant="outline"
            selected={selectedRole === 'doctor'}
            btnStyle={{
              borderColor: COLORS.borderSecondary,
            }}
            textStyle={{
              fontSize: FONT_SIZE.sm,
              color:
                selectedRole === 'doctor' ? COLORS.white : COLORS.textPrimary,
            }}
            onPress={() => {
              setselectedRole('doctor');
              handleNavigate();
            }}
          />

          {/* Family */}
          <CustomButton
            text="I’m a Family"
            fullWidth={true}
            variant="outline"
            selected={selectedRole === 'family'}
            btnStyle={{
              borderColor: COLORS.borderSecondary,
            }}
            textStyle={{
              fontSize: FONT_SIZE.sm,
              color:
                selectedRole === 'family' ? COLORS.white : COLORS.textPrimary,
            }}
            onPress={() => {
              setselectedRole('family');
              handleNavigate();
            }}
          />
        </Column>

        <Center>
          <TouchableOpacity
            style={[
              styles.arrow,
              {
                backgroundColor: selectedRole ? COLORS.primary : COLORS.white,
              },
            ]}
            onPress={handleNavigate}
            disabled={!selectedRole}>
            <DynamicIcon
              type="Feather"
              name="arrow-right"
              size={18}
              color={selectedRole ? COLORS.white : COLORS.textPrimary}
            />
          </TouchableOpacity>

          <View style={[styles.login_container]}>
            <Text style={[styles.policy_text]}>
              Already Have an Account ?
              <TouchableOpacity
              onPress={()=>{
                navigation.navigate(ROUTES.LoginPhoneNumber)
              }}
                style={[commonstyles.paddingzero, commonstyles.marginZero]}>
                <Text
                  style={[
                    styles.policy_text,
                    commonstyles.primary,
                    commonstyles.fontSemiBold,
                    {
                      top: verticalScale(4),
                    },
                  ]}>
                  {' '}
                  Login
                </Text>
              </TouchableOpacity>
            </Text>
          </View>

          <View style={[styles.policy_terms]}>
            <Text style={[styles.policy_text]}>
              By continuing you agree to our{' '}
            </Text>
            <Text style={[styles.login_text]}>
              <TouchableOpacity
                style={[commonstyles.paddingzero, commonstyles.marginZero]}>
                <Text
                  style={[
                    styles.policy_text,
                    commonstyles.primary,
                    commonstyles.fontSemiBold,
                    {
                      top: verticalScale(4),
                    },
                  ]}>
                  Terms of Use{' '}
                </Text>
              </TouchableOpacity>
              and{' '}
              <TouchableOpacity
                style={[commonstyles.paddingzero, commonstyles.marginZero]}>
                <Text
                  style={[
                    styles.policy_text,
                    commonstyles.primary,
                    commonstyles.fontSemiBold,
                    {
                      top: verticalScale(4),
                    },
                  ]}>
                  Privacy Policy
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
        </Center>
      </Container>
    </SafeArea>
  );
};

export default RoleSelection;
