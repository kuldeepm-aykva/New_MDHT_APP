import {View, Text, Pressable, Image, ImageBackground} from 'react-native';
import {useState} from 'react';
import {Container, Row, SafeArea} from '../../../components/layout';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../constants';
import Header from '../../../components/layout/Header';
import {
  Appointment_Icon,
  CareTeam_Icon,
  HealthTracker_Icon,
} from '../../../assets/svgImage';
import styles from './styles';
import CarePlannerCard from '../common/CarePlanning';
import {
  moderateScale,
  scale,
  verticalScale,
} from '../../../constants/responsive';
import RecommendedDoctor from '../common/RecommededDoctor';
import CustomButton from '../../../components/common/Button';
import {DynamicIcon} from '../../../components/common/Icon';

const PatientDashboard = () => {
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

  return (
    <>
      <Header user />
      <SafeArea
        backgroundColor={COLORS.white}
        style={{paddingTop: scale(20)}}
        statusBarColor={COLORS.transparent}
        statusBarStyle="light-content">
        <Container padding="none" scrollable backgroundColor={COLORS.white}>
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

          <View style={[styles.tabs]}>
            <View style={[styles.tabs_btn_container]}>
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
            </View>
            <View style={[styles.tab_cards_container]}>
              {/* <View style={[styles.no_condition_added_container]}>
                <Text style={[styles.no_condition_added_title]}>
                  No Conditions Added Yet
                </Text>
                <Text style={[styles.no_condition_added_sub_title]}>
                  Add your conditions to have an {'\n'} up to date track of your
                  health.
                </Text>
                <CustomButton
                  text="+ Add New Condition"
                  btnstyle={{
                    backgroundColor: COLORS.primaryLight,
                    paddingVertical: verticalScale(10),
                    paddingHorizontal: scale(25),
                    // flex: 1,
                    marginBottom: scale(5),
                    width: '70%',
                  }}
                  textstyle={{
                    color: COLORS.primary,
                    //   fontFamily: theme.typography.fontFamily.medium,
                    fontSize: moderateScale(14),
                  }}
                  onPress={() => SetSymptomsModal(true)}
                />
              </View> */}

              <View>
                {activeTab === 'Tracker' ? (
                  <View style={[styles.tabs_cards]}>
                    <View>
                      <Text style={[styles.updated]}>
                        Updated: 02:55 pm | 28 September 2024
                      </Text>
                      <View style={[styles.symptom]}>
                        <Text style={[styles.disease]}>Fever - </Text>
                        <Text style={[styles.updated]}>Symptom</Text>
                      </View>
                    </View>
                    <DynamicIcon
                      type="Entypo"
                      size={18}
                      color={COLORS.textDark}
                      name="chevron-right"
                    />
                  </View>
                ) : (
                  ''
                )}
                {activeTab === 'Medicine' ? (
                  <View style={[styles.tabs_cards]}>
                    <View>
                      <Text style={[styles.updated]}>
                        Medicine: 02:55 pm | 28 September 2024
                      </Text>
                      <View style={[styles.symptom]}>
                        <Text style={[styles.disease]}>Fever - </Text>
                        <Text style={[styles.updated]}>Symptom</Text>
                      </View>
                    </View>
                    <DynamicIcon
                      type="Entypo"
                      size={18}
                      color={COLORS.textDark}
                      name="chevron-right"
                    />
                  </View>
                ) : (
                  ''
                )}
                {activeTab === 'Meals' ? (
                  <View style={[styles.tabs_cards]}>
                    <View>
                      <Text style={[styles.updated]}>
                        Meals: 02:55 pm | 28 September 2024
                      </Text>
                      <View style={[styles.symptom]}>
                        <Text style={[styles.disease]}>Fever - </Text>
                        <Text style={[styles.updated]}>Symptom</Text>
                      </View>
                    </View>
                    <DynamicIcon
                      type="Entypo"
                      size={18}
                      color={COLORS.textDark}
                      name="chevron-right"
                    />
                  </View>
                ) : (
                  ''
                )}
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <CustomButton
                    text="View All"
                    btnStyle={{
                      borderColor: COLORS.borderSecondary,
                      backgroundColor:"rgba(20, 146, 230, 0.15)",
                    }}
                    textStyle={{
                      fontSize: FONT_SIZE.base,
                      color: COLORS.primary,
                      fontWeight:FONT_WEIGHT.medium,
                    }}
                  />
                </View>
              </View>
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
    </>
  );
};

export default PatientDashboard;
