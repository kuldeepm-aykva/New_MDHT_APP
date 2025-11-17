import {Pressable, View, Text, ActivityIndicator} from 'react-native';
import {Row} from '../../layout';
import {DynamicIcon} from '../Icon';
import styles from './styles';
import {
  getButtonStyle,
  getFontFamilyStyle,
  getFontSizeStyle,
  getFontWeightStyle,
  getMarginStyle,
  getPaddingStyle,
  getRadiusStyle,
  getTextAlignStyle,
  getTextVariantStyle,
  getVariantStyle,
} from '../../../utils/styleHelpers';
// import {
//   getVariantStyle,
//   getTextVariantStyle,
//   getRadiusStyle,
//   getFontSizeStyle,
// } from '../../../constants/common';

const CustomButton = ({
  text,
  onPress,
  btnStyle,
  textStyle,
  children,
  disabled = false,
  loading = false,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon,
  icontype,
  iconcolor,
  iconSize,
  iconPosition = 'left',
  selected = false,
  Radius,
  fontSize,
  TextColor,
  BorderColor,
  BgColor,
  CustomRadius,
  BorderWidth,
  fontWeight,
  fontFamily,

  // spacing
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
}) => {
  // -------- SIZE STYLES --------
  const getButtonStyle = () => {
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

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({pressed}) => [
        styles.btn,
        getVariantStyle({variant, selected, BorderColor, BgColor, BorderWidth}),
        getButtonStyle({size}),
        getRadiusStyle({Radius, CustomRadius}),
        getPaddingStyle({p, px, py, pt, pb, pl, pr}),
        getMarginStyle({m, mx, my, mt, mb, ml, mr}),
        fullWidth && styles.btnFullWidth,
        (disabled || loading) && styles.btnDisabled,
        pressed && styles.btnPressed,
        selected && styles.btnSelected,
        btnStyle,
      ]}>
      {loading ? (
        <ActivityIndicator color={getTextVariantStyle().color} />
      ) : (
        <>
          {children ? (
            children
          ) : (
            <Row align="center" justify="center" spacing={3}>
              {icon && iconPosition === 'left' && (
                <DynamicIcon
                  type={icontype}
                  name={icon}
                  color={iconcolor}
                  size={iconSize}
                  style={styles.iconLeft}
                />
              )}
              <Text
                style={[
                  styles.btnText,
                  getTextVariantStyle({variant, selected, TextColor}),
                  getFontSizeStyle({fontSize}),
                  getFontWeightStyle({fontWeight}),
                  getFontFamilyStyle({fontFamily}),
                  (disabled || loading) && styles.btnTextDisabled,
                  textStyle,
                ]}>
                {text}
              </Text>
              {icon && iconPosition === 'right' && (
                <DynamicIcon
                  type={icontype}
                  name={icon}
                  color={iconcolor}
                  size={iconSize}
                  style={styles.iconRight}
                />
              )}
            </Row>
          )}
        </>
      )}
    </Pressable>
  );
};

export default CustomButton;
