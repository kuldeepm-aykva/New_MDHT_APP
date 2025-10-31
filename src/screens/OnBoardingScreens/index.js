import {
  Pressable,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import styles from '../Dashboard/Patient/styles';
import OnBoardingStyles from './styles';
import {Container, Row, SafeArea} from '../../components/layout';
import Header from '../../components/layout/Header';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../constants';
import {scale, verticalScale} from '../../constants/responsive';
import CarePlannerCard from '../Dashboard/common/CarePlanning';
import {
  Appointment_Icon,
  CareTeam_Icon,
  HealthTracker_Icon,
} from '../../assets/svgImage';
import TabsCard from '../Dashboard/common/TabsCard';
import CustomButton from '../../components/common/Button';
import RecommendedDoctor from '../Dashboard/common/RecommededDoctor';
import Footer from '../../components/layout/Footer';
import LinearGradient from 'react-native-linear-gradient';
import InfoCards from './InfoCards';

const OnBoardingScreens = () => {
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
      <LinearGradient
        colors={[
          'rgba(7,82,132,0.1)',
          'rgba(7,82,132,0.5)',
          'rgba(7,82,132,0.1)',
          'transparent',
        ]}
        start={{x: 0.5, y: 1}}
        end={{x: 0.5, y: 0}}
        style={OnBoardingStyles.overlayLayer}>
        <View style={OnBoardingStyles.overlayLayer} pointerEvents="none" />

        <Header user />
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
                source={require('../../assets/images/patient/Dashboard/aibanner.png')}
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
                          activeTab === 'Medicine'
                            ? COLORS.textDark
                            : '#AEAEAE',
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
                <View>
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
        {/* <Footer /> */}
      </LinearGradient>
      <InfoCards
        title="CareTeam"
        subtitle="My Care Team section lets you build a strong support system. Add trusted family members, doctors, and caregivers to stay connected. Your care team will receive important health updates, so everyone stays informed and involved. With your care team, you will feel supported, in managing your health journey."
      />
    </>
  );
};

export default OnBoardingScreens;
