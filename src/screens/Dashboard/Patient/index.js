import {
  Text,
  View,
  ImageBackground,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import {Column, Container, Row, SafeArea} from '../../../components/layout';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../constants';
import Header from '../../../components/layout/Header';
import {
  Appointment_Icon,
  CareTeam_Icon,
  HealthTracker_Icon,
} from '../../../assets/svgImage';
import styles from './styles';
import CarePlannerCard from '../common/CarePlanning';
import {scale, verticalScale} from '../../../constants/responsive';
import RecommendedDoctor from '../common/RecommededDoctor';
import CustomButton from '../../../components/common/Button';
import TabsCard from '../common/TabsCard';
import Footer from '../../../components/layout/Footer';
import OnBoardingScreens from '../../OnBoardingScreens';
import {ROUTES} from '../../../navigation/routes';
import CustomModal from '../../../components/common/Modal';
import commonstyles from '../../../constants/common';

const PatientDashboard = ({navigation}) => {
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);
  const [IsConditionModal, setIsConditionModal] = useState(false);

  const CarePlaner = [
    {
      title: 'Health Tracker',
      subtitle: `Today's\nRecords`,
      value: 3,
      Icon: HealthTracker_Icon,
      onPress: () => console.log('Health Tracker pressed'),
    },
    {
      title: 'Appointments',
      subtitle: `Upcoming\ndates`,
      value: 2,
      Icon: Appointment_Icon,
      onPress: () => console.log('Appointments pressed'),
    },
    {
      title: 'Care Team',
      subtitle: `Team\nmembers`,
      value: 6,
      Icon: CareTeam_Icon,
      onPress: () => console.log('Care Team pressed'),
    },
  ];
  const Doctordata = [
    {
      status: 'Available',
      name: 'Dr. Hillel Kashtan',
      rating: 2.0,
      specialist: 'Cardiologist',
      doctor_experience: '17',
      onPress: () => console.log('Dr. Hillel Kashtan'),
    },
    {
      status: 'Unavailable',
      name: 'Dr. Hillel Kashtan',
      rating: 5.0,
      specialist: 'Cardiologist',
      doctor_experience: '16',
      onPress: () => console.log('Dr. Kuldeep Mourya'),
    },
  ];
  const [activeTab, setactiveTab] = useState('Tracker');
  const [Islogin, setIslogin] = useState(false);
  const [OnBoardingSteps, setOnBoardingSteps] = useState(0);

  const handleCompleteProfileModal = () => {
    setIsProfileModalVisible(false);
    navigation.navigate(ROUTES.CompleteProfile);
  };

  const hanldeSkipBoarding = () => {
    setIslogin(!Islogin);
    navigation.navigate(ROUTES.PatientDashboard);
  };

  const handleHealthCondition = () => {
    setIsConditionModal(!IsConditionModal);
  };

  return (
    <>
      <Header
        user
        SearchPress={() => {
          navigation.navigate(ROUTES.DashboardSearch);
        }}
        NotificationPress
      />
      <SafeArea
        backgroundColor={COLORS.white}
        style={{paddingTop: scale(20)}}
        statusBarColor={COLORS.transparent}
        statusBarStyle="light-content">
        <Container padding="none" scrollable backgroundColor={COLORS.white}>
          {/* care planning and banner  */}
          <View style={[styles.care_conatiner]}>
            <View>
              <Text style={[styles.heading]}>My Care Planning</Text>
              <View style={styles.care_planer_container}>
                {CarePlaner.map((data, index) => (
                  <CarePlannerCard
                    key={index}
                    data={data}
                    onPress={data.onPress}
                  />
                ))}
              </View>
            </View>
            <ImageBackground
              source={require('../../../assets/images/patient/Dashboard/aibanner.png')}
              style={styles.background}
              resizeMode="contain">
              <View>
                <Text style={[styles.banner_text]}>
                  Track. Manage. Remind. Care.
                </Text>
                <Text style={[styles.banner_sub_text]}>
                  Ready for your {'\n'}AI Overview?
                </Text>
                <Pressable style={[styles.ai_btn]}>
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={[styles.ai_btn_text]}>
                    AI Overview
                  </Text>
                </Pressable>
              </View>
            </ImageBackground>
          </View>

          {/* tabs  */}
          <View style={[styles.tabs]}>
            <Row
              align="center"
              justify="space-around"
              style={[styles.tabs_btn_container]}>
              <Pressable
                style={[
                  styles.tabs_btn,
                  activeTab === 'Tracker' ? styles.active_btn : '',
                ]}
                onPress={() => {
                  setactiveTab('Tracker');
                }}>
                <Text
                  style={[
                    styles.tabs_text,
                    {
                      color:
                        activeTab === 'Tracker' ? COLORS.textDark : '#AEAEAE',
                    },
                  ]}>
                  Tracker
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.tabs_btn,
                  activeTab === 'Medicine' ? styles.active_btn : '',
                ]}
                onPress={() => {
                  setactiveTab('Medicine');
                }}>
                <Text
                  style={[
                    styles.tabs_text,
                    {
                      color:
                        activeTab === 'Medicine' ? COLORS.textDark : '#AEAEAE',
                    },
                  ]}>
                  Medicine
                </Text>
              </Pressable>
              <Pressable
                style={[
                  styles.tabs_btn,
                  activeTab === 'Meals' ? styles.active_btn : '',
                ]}
                onPress={() => {
                  setactiveTab('Meals');
                }}>
                <Text
                  style={[
                    styles.tabs_text,
                    {
                      color:
                        activeTab === 'Meals' ? COLORS.textDark : '#AEAEAE',
                    },
                  ]}>
                  Meals
                </Text>
              </Pressable>
            </Row>
            <View style={[styles.tab_cards_container]}>
              <Column
                align="center"
                justify="center"
                style={[styles.no_condition_added_container]}>
                <Text style={[styles.no_condition_added_title]}>
                  No Conditions Added Yet
                </Text>
                <Text style={[styles.no_condition_added_sub_title]}>
                  Add your conditions to have an {'\n'} up to date track of your
                  health.
                </Text>
                <CustomButton
                  text="+ Add New Condition"
                  onPress={handleHealthCondition}
                  size="small"
                  BorderColor={COLORS.transparent}
                  btnStyle={{
                    backgroundColor: 'rgba(20, 146, 230, 0.15)',
                    width: '65%',
                  }}
                  fontSize="sm"
                  TextColor={COLORS.primary}
                  textStyle={{
                    fontWeight: FONT_WEIGHT.medium,
                  }}
                />
              </Column>

              {/* <View>
                {activeTab === 'Tracker' && (
                  <>
                    <TabsCard
                      updatedAt="Updated: 02:55 pm | 28 September 2024"
                      title="Fever -"
                      subtitle="Symptom"
                      onPress={() => console.log('Tracker Card pressed')}
                    />
                    <TabsCard
                      updatedAt="Updated: 02:55 pm | 28 September 2024"
                      title="Fever -"
                      subtitle="Symptom"
                      onPress={() => console.log('Tracker Card pressed')}
                    />
                  </>
                )}

                {activeTab === 'Medicine' && (
                  <TabsCard
                    updatedAt="Updated: 02:55 pm | 28 September 2024"
                    title="Cough Syrup -"
                    subtitle="Medicine"
                    onPress={() => console.log('Medicine Card pressed')}
                  />
                )}

                {activeTab === 'Meals' && (
                  <TabsCard
                    updatedAt="Meals: 02:55 pm | 28 September 2024"
                    title="Lunch -"
                    subtitle="Healthy Diet"
                    onPress={() => console.log('Meals Card pressed')}
                  />
                )}
                <Row align="center" justify="center">
                  <CustomButton
                    text="View All"
                    size="small"
                    btnStyle={{
                      borderColor: COLORS.borderSecondary,
                      backgroundColor: 'rgba(20, 146, 230, 0.15)',
                      paddingHorizontal: verticalScale(25),
                    }}
                    textStyle={{
                      fontSize: FONT_SIZE.base,
                      color: COLORS.primary,
                      fontWeight: FONT_WEIGHT.regular,
                    }}
                  />
                </Row>
              </View> */}
            </View>
          </View>

          {/* consult a doctor  */}
          <View style={[styles.consult_doctor_container]}>
            <Row
              align="center"
              justify="space-between"
              style={[styles.consult_doctor_heading_container]}>
              <Text style={styles.heading}>Consult a Doctor</Text>
              <Pressable>
                <Text style={[styles.view_all_btn]}>View All</Text>
              </Pressable>
            </Row>
            {/* tabs  */}

            <View style={[styles.doctor_list]}>
              {Doctordata.map((data, index) => {
                return <RecommendedDoctor data={data} key={index} />;
              })}
            </View>
          </View>
        </Container>
      </SafeArea>
      <Footer style={{backgroundColor: COLORS.white}} />

      {!Islogin && !isProfileModalVisible && (
        <OnBoardingScreens
          onSkip={hanldeSkipBoarding}
          onStepsCountChange={setOnBoardingSteps}
          onOnboardingComplete={() => setIsProfileModalVisible(true)}
        />
      )}
      <CustomModal
        visible={isProfileModalVisible}
        onClose={() => setIsProfileModalVisible(false)}
        modalContainerStyle={{width: '80%'}}>
        <Text style={[styles.complete_profile_modal_title]}>
          Add your details to start tracking and {'\n'} managing your health.
        </Text>
        <CustomButton
          text="Complete My Profile"
          size="small"
          variant="primary"
          fullWidth
          onPress={handleCompleteProfileModal}
          fontSize="base"
        />
      </CustomModal>

      <CustomModal
        visible={IsConditionModal}
        onClose={() => setIsConditionModal(false)}
        modalContainerStyle={{width: '80%'}}>
        <Text style={[styles.complete_profile_modal_title]}>
          Begin with symptom tracking for healthier{'\n'} outcomes.
        </Text>
        <CustomButton
          text="Track My Symptoms"
          size="small"
          variant="primary"
          fullWidth
          onPress={handleCompleteProfileModal}
          fontSize="sm"
        />
        <Row align="center" justify="center" style={{marginTop: 10}}>
          <TouchableOpacity
            onPress={() => {
              setIsConditionModal(!IsConditionModal);
            }}>
            <Text style={[commonstyles.textPrimary, commonstyles.fontMedium]}>
              Skip
            </Text>
          </TouchableOpacity>
        </Row>
      </CustomModal>
    </>
  );
};

export default PatientDashboard;
