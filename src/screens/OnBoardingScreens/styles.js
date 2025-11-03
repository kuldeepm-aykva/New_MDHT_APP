import {Platform, StyleSheet} from 'react-native';
import {scale, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/responsive';
import {COLORS, RADIUS} from '../../constants';

export default OnBoardingStyles = StyleSheet.create({
  overlayLayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(7, 82, 132, 0.8)',
    zIndex: 10,
    elevation: 0,
    width: '100%',
    height: '100%',
    flex: 1,
  },
  Zindex: {
    position: 'absolute',
    zIndex: 10,
  },
  Health_Tracker: {
    left: Platform.OS === 'ios' ? SCREEN_WIDTH * 0.05 : SCREEN_WIDTH * 0.05,
    top: Platform.OS === 'ios' ? SCREEN_HEIGHT * 0.27 : SCREEN_HEIGHT * 0.29,
  },
  Appointment: {
    left: Platform.OS === 'ios' ? SCREEN_WIDTH * 0.37 : SCREEN_WIDTH * 0.36,
    top: Platform.OS === 'ios' ? SCREEN_HEIGHT * 0.27 : SCREEN_HEIGHT * 0.29,
  },
  Care_Team: {
    left: Platform.OS === 'ios' ? SCREEN_WIDTH * 0.69 : SCREEN_WIDTH * 0.65,
    top: Platform.OS === 'ios' ? SCREEN_HEIGHT * 0.27 : SCREEN_HEIGHT * 0.29,
  },
  AI: {
    width: '100%',
    top: Platform.OS === 'ios' ? SCREEN_HEIGHT * 0.42 : SCREEN_HEIGHT * 0.43,
    paddingHorizontal: scale(14),
    borderRadius: 12,
    shadowColor: COLORS.white,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 0,
  },
  Health_Medicine_Meal_Tracker: {
    top: Platform.OS === 'ios' ? SCREEN_HEIGHT * 0.35 : SCREEN_HEIGHT * 0.35,
    width: '100%',
  },
  consult_doctor: {
    width: '100%',
    top: Platform.OS === 'ios' ? SCREEN_HEIGHT * 0.35 : SCREEN_HEIGHT * 0.35,
  },
});
