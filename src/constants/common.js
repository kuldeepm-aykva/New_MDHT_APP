import {StyleSheet} from 'react-native';
import {COLORS} from './colors';
import {scale, verticalScale} from './responsive';
import {FONT_FAMILY, FONT_SIZE, FONT_WEIGHT} from './typography';
import {SPACING} from './spacing';

export default commonstyles = StyleSheet.create({
  // color
  primary: {
    color: COLORS.primary,
  },
  secondary: {
    color: COLORS.secondary,
  },
  white: {
    color: COLORS.white,
  },
  Error: {
    color: COLORS.error,
  },
  black: {
    color: COLORS.black,
  },
  success: {
    color: COLORS.success,
  },
  textPrimary: {
    color: COLORS.textPrimary,
  },
  // color
  // bg color
  bgPrimary: {
    backgroundColor: COLORS.primary,
  },
  bgSecondary: {
    backgroundColor: COLORS.secondary,
  },
  bgWhite: {
    backgroundColor: COLORS.white,
  },
  bgBlack: {
    backgroundColor: COLORS.black,
  },
  bgSuccess: {
    backgroundColor: COLORS.success,
  },
  bgWarning: {
    backgroundColor: COLORS.warning,
  },
  bgTransparent: {
    backgroundColor: COLORS.transparent,
  },
  // bg color

  // border
  borderWhite: {
    borderWidth: scale(1),
    borderColor: COLORS.white,
  },
  borderPrimary: {
    borderWidth: scale(1),
    borderColor: COLORS.primary,
  },
  borderSecondary: {
    borderWidth: scale(1),
    borderColor: COLORS.secondary,
  },
  borderError: {
    borderWidth: scale(1),
    borderColor: COLORS.error,
  },
  borderSuccess: {
    borderWidth: scale(1),
    borderColor: COLORS.success,
  },
  // border

  // fontWeight
  fontLight: {
    fontWeight: FONT_WEIGHT.light,
  },
  fontRegular: {
    fontWeight: FONT_WEIGHT.regular,
  },
  fontMedium: {
    fontWeight: FONT_WEIGHT.medium,
  },
  fontSemiBold: {
    fontWeight: FONT_WEIGHT.semiBold,
  },
  fontBold: {
    fontWeight: FONT_WEIGHT.bold,
  },
  fontExtraBold: {
    fontWeight: FONT_WEIGHT.extraBold,
  },
  // fontWeight

  // font size
  font10: {
    fontSize: FONT_SIZE.xs,
  },
  font12: {
    fontSize: FONT_SIZE.sm,
  },
  font14: {
    fontSize: FONT_SIZE.base,
  },
  font12: {
    fontSize: FONT_SIZE.sm,
  },
  font16: {
    fontSize: FONT_SIZE.md,
  },
  font18: {
    fontSize: FONT_SIZE.lg,
  },
  font20: {
    fontSize: FONT_SIZE.xl,
  },
  // font size

  marginZero: {
    margin: 0,
  },
  paddingzero: {
    padding: 0,
  },
  title: {
    color: COLORS.primary,
    fontSize: FONT_SIZE.xl,
    fontWeight: FONT_WEIGHT.bold,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.bold,
  },
  subtitle: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.base,
    textAlign: 'center',
    fontFamily: FONT_FAMILY.regular,
    fontWeight: FONT_WEIGHT.light,
    marginVertical: SPACING.xs,
    // opacity: 0.8,
  },
  active_arrow: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
    borderRadius: scale(50),
    // backgroundColor:COLORS.primary,
    borderWidth: 1,
    borderColor: COLORS.borderSecondary,
  },
});
