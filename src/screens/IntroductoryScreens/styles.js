import {StyleSheet} from 'react-native';
import {moderateScale, scale, verticalScale} from '../../constants/responsive';
import {COLORS, FONT_FAMILY, FONT_SIZE, LINE_HEIGHT} from '../../constants';

export const styles = StyleSheet.create({
  img_container: {
    width: '100%',
    flex: 1,
  },
  mock_img: {
    width: scale(180),
    resizeMode: 'contain',
  },
  // bottom blue section
  bottom_container: {
    width: '100%',
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: scale(30),
    borderTopRightRadius: scale(30),
    bottom: 0,
    paddingVertical: verticalScale(25),
    paddingHorizontal: scale(24),
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: moderateScale(19),
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: verticalScale(8),
    fontFamily: FONT_FAMILY.bold,
  },
  subtext: {
    fontSize: moderateScale(14),
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: verticalScale(18),
    fontFamily: FONT_FAMILY.regular,
    opacity: 0.9,
    lineHeight: LINE_HEIGHT.md,
  },

  // dots
  dotsContainer: {
    marginBottom: verticalScale(70),
    backgroundColor: COLORS.white,
    borderRadius: scale(30),
    paddingVertical: verticalScale(3),
    paddingHorizontal: scale(6),
  },
  dot: {
    width: scale(5),
    height: scale(5),
    borderRadius: scale(5),
    backgroundColor: '#89C8F2',
  },
  active_dot: {
    backgroundColor: COLORS.primary,
  },
});
