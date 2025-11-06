import {StyleSheet, Text} from 'react-native';
import {COLORS} from './colors';
import {scale, verticalScale} from './responsive';
import {FONT_FAMILY, FONT_SIZE, FONT_WEIGHT, LINE_HEIGHT} from './typography';
import {RADIUS, SPACING} from './spacing';

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

export const getVariantStyle = ({variant, selected, BorderColor, BgColor}) => {
  let baseStyle = {};

  if (selected && variant === 'outline') {
    baseStyle = {
      backgroundColor: COLORS.primary,
      borderColor: COLORS.primary,
    };
  } else {
    switch (variant) {
      case 'primary':
        baseStyle = {backgroundColor: COLORS.primary};
        break;
      case 'secondary':
        baseStyle = {backgroundColor: COLORS.secondary};
        break;
      case 'white':
        baseStyle = {backgroundColor: COLORS.white};
        break;
      case 'black':
        baseStyle = {backgroundColor: COLORS.black};
        break;
      case 'outline':
        baseStyle = {
          backgroundColor: COLORS.transparent,
          borderWidth: scale(1),
          borderColor: 'rgba(110, 110, 110, 0.25)',
        };
        break;
      case 'transparent':
        baseStyle = {backgroundColor: COLORS.transparent};
        break;
      default:
        baseStyle = {backgroundColor: COLORS.primary};
    }
  }

  // ✅ Custom overrides
  if (BgColor) {
    baseStyle.backgroundColor = COLORS[BgColor] || BgColor;
  }

  if (BorderColor) {
    baseStyle.borderWidth = scale(1);
    baseStyle.borderColor = COLORS[BorderColor] || BorderColor;
  }

  return baseStyle;
};

// -------- TEXT COLOR --------
export const getTextVariantStyle = ({variant, selected, TextColor}) => {
  if (selected && variant === 'outline') {
    return {color: COLORS.white};
  }

  let color = COLORS.white;
  switch (variant) {
    case 'primary':
    case 'secondary':
    case 'black':
      color = COLORS.white;
      break;
    case 'white':
      color = COLORS.primary;
      break;
    case 'outline':
      color = COLORS.textPrimary;
      break;
    case 'error':
      color = COLORS.error;
      break;
    case 'success':
      color = COLORS.success;
      break;
    default:
      color = COLORS.white;
  }

  if (TextColor) color = COLORS[TextColor] || TextColor;
  return {color};
};

// -------- RADIUS STYLES --------
export const getRadiusStyle = ({Radius, CustomRadius}) => {
  if (CustomRadius !== undefined) {
    return {borderRadius: CustomRadius};
  }

  switch (Radius) {
    case 'xs':
      return {borderRadius: RADIUS.xs};
    case 'sm':
      return {borderRadius: RADIUS.sm};
    case 'md':
      return {borderRadius: RADIUS.md};
    case 'lg':
      return {borderRadius: RADIUS.lg};
    case 'xl':
      return {borderRadius: RADIUS.xl};
    case 'xxl':
      return {borderRadius: RADIUS.xxl};
    case 'full':
      return {borderRadius: RADIUS.full};
    default:
      return {borderRadius: RADIUS.full};
  }
};

// -------- FONT SIZE STYLE --------
export const getFontSizeStyle = ({fontSize}) => {
  if (!fontSize) return {};
  return {fontSize: FONT_SIZE[fontSize] || FONT_SIZE.base};
};
