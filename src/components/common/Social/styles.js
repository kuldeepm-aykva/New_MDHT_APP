import {StyleSheet} from 'react-native';
import {
  scale,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  verticalScale,
} from '../../../constants/responsive';
import {COLORS, RADIUS} from '../../../constants';

export default styles = StyleSheet.create({
  socialBtn: {
    borderRadius: RADIUS.full,
    width: SCREEN_WIDTH * 0.26,
    height:SCREEN_HEIGHT * 0.048,
  },
  googleBtn: {
    backgroundColor: COLORS.white,
    borderRadius: scale(25),
    height: verticalScale(55),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
