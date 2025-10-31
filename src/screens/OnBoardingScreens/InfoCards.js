import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import CustomButton from '../../components/common/Button';
import {moderateScale, scale, verticalScale} from '../../constants/responsive';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../constants';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import LinearGradient from 'react-native-linear-gradient';

const onboardingScreens = [
  'OnBoardingHealthTracker',
  'OnBoardingAppointments',
  'OnBoardingCareTeam',
  'OnBoardingAIOverview',
  'OnBoardingHealthMedicineMeals',
  'OnBoardingConsultDoctor',
];

const InfoCards = ({title, subtitle}) => {
  const navigation = useNavigation();
  const route = useRoute();
  const currentScreenName = route.name;

  const handleNext = () => {
    const currentIndex = onboardingScreens.indexOf(currentScreenName);
    if (currentIndex < onboardingScreens.length - 1) {
      navigation.navigate(onboardingScreens[currentIndex + 1]);
    } else {
      navigation.navigate('PatientDashboard');
    }
  };

  const handleDotPress = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={[Styles.info_container]}>
      <View style={Styles.info_cards}>
        <Text style={Styles.info_cards_title}>{title}</Text>
        <Text style={Styles.info_cards_Subtitle}>{subtitle}</Text>
      </View>

      <View style={Styles.dotsContainer}>
        {onboardingScreens.map((screen, index) => (
          <TouchableOpacity key={index} onPress={() => handleDotPress(screen)}>
            <View
              style={[
                Styles.dot,
                currentScreenName === screen ? Styles.active_dot : null,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>

      <View style={Styles.btn_container}>
        <CustomButton
          text="Skip"
          size="small"
          btnStyle={{
            backgroundColor: COLORS.secondary,
            borderRadius: 13,
            paddingHorizontal: scale(30),
            borderWidth: 1,
            borderColor: COLORS.white,
          }}
        />
        <CustomButton
          text="Next"
          size="small"
          btnStyle={{
            backgroundColor: COLORS.white,
            borderRadius: 13,
            paddingHorizontal: scale(30),
            borderWidth: 1,
            borderColor: COLORS.white,
          }}
          textStyle={{color: COLORS.primary}}
        />
      </View>
    </View>
  );
};

export default InfoCards;

const Styles = StyleSheet.create({
  info_container: {
    zIndex: 10,
    position: 'absolute',
    justifyContent: 'center',
    paddingHorizontal: scale(13),
    paddingVertical: verticalScale(30),
    alignItems: 'center',
    bottom: 0,
    // backgroundColor: COLORS.primary,
  },
  info_cards: {
    backgroundColor: COLORS.white,
    borderRadius: scale(16),
    padding: scale(20),
  },
  info_cards_title: {
    // fontFamily: theme.typography.fontFamily.medium,
    fontSize: FONT_SIZE.sm,
    color: COLORS.textDark,
    marginBottom: verticalScale(10),
    fontWeight:FONT_WEIGHT.semiBold,
  },
  info_cards_Subtitle: {
    // fontFamily: theme.typography.fontFamily.regular,
    fontSize: FONT_SIZE.xs,
    color: COLORS.textPrimary,
    fontWeight:FONT_WEIGHT.regular,
  },
  btn_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 40,
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: scale(20),
    paddingVertical: verticalScale(4),
    paddingHorizontal: scale(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  dot: {
    width: scale(5),
    height: scale(5),
    borderRadius: scale(5),
    marginHorizontal: scale(3),
    backgroundColor: '#AFAFAF',
  },
  active_dot: {
    backgroundColor: COLORS.primary,
  },
});
