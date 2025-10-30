import {
  Pressable,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {scale, verticalScale} from '../../../constants/responsive';
import commonstyles from '../../../constants/common';
import {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  RADIUS,
  SPACING,
} from '../../../constants';
import { Row } from '../../layout';

const CustomButton = ({
  text,
  onPress,
  btnStyle,
  textStyle,
  children,
  disabled = false,
  loading = false,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost', 'white', 'black', 'transparent'
  size = 'medium', // 'small', 'medium', 'large', 'icon'
  fullWidth = false,
  icon,
  iconPosition = 'left', // 'left', 'right'
  selected = false, // For toggle states (like role selection)
}) => {
  // Get variant styles
  const getVariantStyle = () => {
    // Handle selected state for outline buttons
    if (selected && variant === 'outline') {
      return commonstyles.bgPrimary;
    }

    switch (variant) {
      case 'primary':
        return commonstyles.bgPrimary;
      case 'secondary':
        return commonstyles.bgSecondary;
      case 'white':
        return commonstyles.bgWhite;
      case 'black':
        return commonstyles.bgBlack;
      case 'outline':
        return styles.btnOutline;
      case 'transparent':
        return commonstyles.bgTransparent;
      default:
        return commonstyles.bgPrimary;
    }
  };

  // Get text variant styles
  const getTextVariantStyle = () => {
    // Handle selected state text color
    if (selected && variant === 'outline') {
      return commonstyles.white;
    }

    switch (variant) {
      case 'primary':
        return commonstyles.white;
      case 'secondary':
        return commonstyles.white;
      case 'white':
        return commonstyles.primary;
      case 'black':
        return commonstyles.white;
      case 'outline':
        return commonstyles.white;
      case 'error':
        return commonstyles.Error;
      case 'success':
        return commonstyles.success;
      default:
        return commonstyles.white;
    }
  };

  // Get size styles
  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.btnSmall;
      case 'large':
        return styles.btnLarge;
      case 'icon':
        return styles.btnIcon;
      default:
        return styles.btnMedium;
    }
  };

  // Get text size styles
  const getTextSizeStyle = () => {
    switch (size) {
      case 'small':
        return styles.btnTextSmall;
      case 'large':
        return styles.btnTextLarge;
      case 'icon':
        return styles.btnTextSmall;
      default:
        return styles.btnTextMedium;
    }
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({pressed}) => [
        styles.btn,
        getVariantStyle(),
        getSizeStyle(),
        fullWidth && styles.btnFullWidth,
        (disabled || loading) && styles.btnDisabled,
        pressed && styles.btnPressed,
        selected && styles.btnSelected,
        btnStyle,
      ]}>
      {loading ? (
        <ActivityIndicator
          color={
            variant === 'outline' && !selected
              ? COLORS.white
              : variant === 'white'
              ? COLORS.primary
              : COLORS.white
          }
        />
      ) : (
        <>
          {children ? (
            children
          ) : (
            <Row align='center' justify='center'>
                {icon && iconPosition === 'left' && (
                  <View style={styles.iconLeft}>{icon}</View>
                )}
                <Text
                  style={[
                    styles.btnText,
                    getTextVariantStyle(),
                    getTextSizeStyle(),
                    (disabled || loading) && styles.btnTextDisabled,
                    textStyle,
                  ]}>
                  {text}
                </Text>
                {icon && iconPosition === 'right' && (
                  <View style={styles.iconRight}>{icon}</View>
                )}
            </Row>
          )}
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  // Base button styles
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS.full,
    paddingHorizontal: SPACING.lg,
  },
  // Variant styles
  btnOutline: {
    backgroundColor: COLORS.transparent,
    borderWidth: scale(1.5),
    borderColor: COLORS.white,
  },

  // Size styles
  btnSmall: {
    paddingVertical: verticalScale(8),
    paddingHorizontal: SPACING.md,
    minHeight: verticalScale(36),
  },
  btnMedium: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: SPACING.lg,
    minHeight: verticalScale(48),
  },
  btnLarge: {
    paddingVertical: verticalScale(16),
    paddingHorizontal: SPACING.xl,
    minHeight: verticalScale(56),
  },
  btnIcon: {
    width: scale(48),
    height: scale(48),
    borderRadius: RADIUS.full,
    paddingHorizontal: 0,
    paddingVertical: 0,
    minHeight: scale(48),
  },

  // Full width
  btnFullWidth: {
    width: '100%',
  },

  // State styles
  btnDisabled: {
    opacity: 0.5,
  },
  btnPressed: {
    opacity: 0.8,
  },
  btnSelected: {
    borderColor: COLORS.primary,
  },

  // Text styles
  btnText: {
    fontWeight: FONT_WEIGHT.semiBold,
  },

  btnTextDisabled: {
    opacity: 0.6,
  },

  // Text size styles
  btnTextSmall: {
    fontSize: FONT_SIZE.sm,
  },
  btnTextMedium: {
    fontSize: FONT_SIZE.md,
  },
  btnTextLarge: {
    fontSize: FONT_SIZE.lg,
  },

  // Icon spacing
  iconLeft: {
    marginRight: scale(8),
  },
  iconRight: {
    marginLeft: scale(8),
  },
});

export default CustomButton;
