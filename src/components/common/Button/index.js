import {Pressable, View, Text, ActivityIndicator} from 'react-native';
import {scale} from '../../../constants/responsive';
import {COLORS, FONT_SIZE, RADIUS} from '../../../constants';
import {Row} from '../../layout';
import {DynamicIcon} from '../Icon';
import styles from './styles';
import {
  getVariantStyle,
  getTextVariantStyle,
  getRadiusStyle,
  getFontSizeStyle,
} from '../../../constants/common';

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
  Radius = 'full',
  fontSize,
  TextColor,
  BorderColor,
  BgColor,
  CustomRadius,
}) => {
  // -------- SIZE STYLES --------
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

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({pressed}) => [
        styles.btn,
        getVariantStyle({variant, selected, BorderColor, BgColor}),
        getSizeStyle(),
        getRadiusStyle({Radius, CustomRadius}),
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
            <Row align="center" justify="center">
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
