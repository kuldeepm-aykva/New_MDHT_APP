import {StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE, FONT_WEIGHT, RADIUS} from '../../../constants';
import {scale, SCREEN_HEIGHT, SCREEN_WIDTH, verticalScale} from '../../../constants/responsive';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    paddingHorizontal: verticalScale(15),
    paddingVertical: scale(15),
    marginVertical: 10,
    borderWidth: 0.4,
    borderColor: COLORS.borderSecondary,
  },
  sliderWrapper: {
    justifyContent: 'center',
    marginTop: verticalScale(70),
  },
  trackContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  gradientTrack: {
    width: '100%',
  },
  thumbContainer: {
    position: 'absolute',
    top: -scale(10),
    left: 0,
  },
  thumb: {
    borderWidth: scale(3),
  },
  valueBox: {
    position: 'absolute',
    top: -SCREEN_HEIGHT * 0.068,
    left: -SCREEN_WIDTH * 0.022,
    backgroundColor: COLORS.white,
    borderWidth: 1.2,
    borderRadius: scale(8),
    paddingHorizontal: verticalScale(14),
    paddingVertical: scale(8),
    alignItems: 'center',
    zIndex: 10,
    overflow: 'visible',
  },
  arrow: {
    position: 'absolute',
    bottom: -SCREEN_HEIGHT * 0.0053,
    left: SCREEN_WIDTH * 0.045,
    width: 8,
    height: 8,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1.2,
    borderRightWidth: 1.2,
    transform: [{rotate: '45deg'}],
  },
  labelRow: {
    marginTop: verticalScale(25),
    paddingHorizontal: 4,
  },
});
