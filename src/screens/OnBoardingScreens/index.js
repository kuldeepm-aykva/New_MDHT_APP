import {View, Text, ImageBackground, Pressable, Image} from 'react-native';
import {useState, useEffect, useRef} from 'react';
import styles from '../Dashboard/Patient/styles';
import OnBoardingStyles from './styles';
import {Container, Row} from '../../components/layout';
import {COLORS, FONT_SIZE, FONT_WEIGHT, RADIUS} from '../../constants';
import {verticalScale} from '../../constants/responsive';
import CarePlannerCard from '../Dashboard/common/CarePlanning';
import {
  Appointment_Icon,
  CareTeam_Icon,
  HealthTracker_Icon,
} from '../../assets/svgImage';
import TabsCard from '../Dashboard/common/TabsCard';
import CustomButton from '../../components/common/Button';
import RecommendedDoctor from '../Dashboard/common/RecommededDoctor';
import LinearGradient from 'react-native-linear-gradient';
import InfoCards from './InfoCards';
import {useNavigation} from '@react-navigation/native';

const OnBoardingScreens = ({onStepsCountChange, onOnboardingComplete,onSkip}) => {
  const navigation = useNavigation();
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

  const onboardingSteps = [
    {
      id: 'HealthTracker',
      title: 'Health Tracker',
      subtitle:
        'The Health Tracker gives you a clear view of your health progress. Easily log symptoms and daily vitals, track patterns, and add new health issues as they come up. It’s your personal health journal that is designed to keep you informed, & in control of your health.',
    },
    {
      id: 'Appointment',
      title: 'Appointments',
      subtitle:
        'My Appointment section helps you stay on top of your health visits. View all upcoming appointments at a glance; see the date, time, doctor’s name, and whether it’s online or in-person. Plus, get timely reminders so you never miss a consultation. It’s everything you need to stay prepared and on track.',
    },
    {
      id: 'CareTeam',
      title: 'Care Team',
      subtitle:
        'My Care Team section lets you build a strong support system. Add trusted family members, doctors, and caregivers to stay connected. Your care team will receive important health updates, so everyone stays informed and involved. With your care team, you will feel supported, in managing your health journey.',
    },
    {
      id: 'AIOverview',
      title: 'AI Overview',
      subtitle:
        'AI Overview gives you smart insights based on your health updates. From symptoms and vitals to progress over time, it analyzes your data to highlight changes and patterns. These insights help you understand your health better and support more informed care decisions with your doctor.',
    },
    {
      id: 'Health_Medicine_Meal_Tracker',
      title: 'Health, Medicine & Meal Tracker',
      subtitle:
        'Manage your conditions, medications, and meals all in one place. Track health issues and monitor progress, set timely reminders for daily medicines, and log meals to build lasting healthy habits. These trackers keep you organized, consistent, and supported in improving your overall well-being.',
    },
    {
      id: 'Consult_Doctor',
      title: 'Consult a Doctor',
      subtitle:
        'This section connects you with qualified doctors for your care. View their specialty, years of experience, and patient ratings to make an informed choice. You can browse the complete list of available doctors and easily book an appointment with the one who best suits your needs.',
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

  if (onStepsCountChange) {
    useEffect(() => {
      onStepsCountChange(onboardingSteps.length);
    }, []);
  }

  const [activeTab, setactiveTab] = useState('Tracker');
  const [currentStep, setCurrentStep] = useState(0);

  const handleSkip = () => {
    navigation.navigate('PatientDashboard');
  };

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      if (onOnboardingComplete) {
        onOnboardingComplete();
      }
    }
  };

  const handleDotPress = index => {
    setCurrentStep(index);
  };

  return (
    <>
      <LinearGradient
        colors={[
          'rgba(7,82,132,1)',
          'rgba(7,82,132,1)',
          'rgba(7,82,132,0.7)',
          'rgba(7,82,132,0.7)',
          'rgba(7,82,132,0.4)',
        ]}
        start={{x: 1, y: 1}}
        end={{x: 1, y: 0}}
        style={OnBoardingStyles.gradientOverlay}
        pointerEvents="none"
      />

      <InfoCards
        title={onboardingSteps[currentStep].title}
        subtitle={onboardingSteps[currentStep].subtitle}
        currentStep={currentStep}
        totalSteps={onboardingSteps.length}
        onSkip={onSkip}
        onNext={handleNext}
        onDotPress={handleDotPress}
      />

      <View style={[OnBoardingStyles.Zindex]}>
        {currentStep === 0 && (
          <View style={[OnBoardingStyles.Health_Tracker]}>
            {CarePlaner.slice(0, 1).map((data, index) => (
              <CarePlannerCard key={index} data={data} onPress={data.onPress} />
            ))}
          </View>
        )}
        {currentStep === 1 && (
          <View style={[OnBoardingStyles.Appointment]}>
            {CarePlaner.slice(1, 2).map((data, index) => (
              <CarePlannerCard key={index} data={data} onPress={data.onPress} />
            ))}
          </View>
        )}
        {currentStep === 2 && (
          <View style={[OnBoardingStyles.Care_Team]}>
            {CarePlaner.slice(2, 3).map((data, index) => (
              <CarePlannerCard key={index} data={data} onPress={data.onPress} />
            ))}
          </View>
        )}
      </View>

      {currentStep === 3 && (
        <View style={[OnBoardingStyles.Zindex, OnBoardingStyles.AI]}>
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
      )}

      {currentStep === 4 && (
        <Container
          style={[
            OnBoardingStyles.Zindex,
            OnBoardingStyles.Health_Medicine_Meal_Tracker,
          ]}>
          <View style={[styles.tabs, {borderRadius: RADIUS.lg}]}>
            <Row
              align="center"
              justify="space-around"
              style={[
                styles.tabs_btn_container,
                {backgroundColor: COLORS.white},
              ]}>
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
            <View
              style={[
                styles.tab_cards_container,
                {backgroundColor: COLORS.transparent},
              ]}>
              <View>
                {activeTab === 'Tracker' && (
                  <>
                    <TabsCard
                      containerStyle={{backgroundColor: COLORS.transparent}}
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
        </Container>
      )}

      {currentStep === 5 && (
        <Container
          style={[OnBoardingStyles.Zindex, OnBoardingStyles.consult_doctor]}>
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
              {Doctordata.slice(0, 1).map((data, index) => {
                return <RecommendedDoctor data={data} key={index} />;
              })}
            </View>
          </View>
        </Container>
      )}
    </>
  );
};

export default OnBoardingScreens;
