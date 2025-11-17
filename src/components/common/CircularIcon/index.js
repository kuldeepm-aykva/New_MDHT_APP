import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, RADIUS} from '../../../constants';
import {DynamicIcon} from '../Icon';
import {
  getMarginStyle,
  getPaddingStyle,
  getRadiusStyle,
  getVariantStyle,
} from '../../../utils/styleHelpers';
import {scale} from '../../../constants/responsive';

const CircularIcon = ({
  name,
  type,
  iconColor = COLORS.primary,
  size = 20,
  onPress,

  // Styling props via helpers
  variant,
  selected,
  BgColor,
  BorderColor,
  BorderWidth,
  Radius = 'full',
  CustomRadius,

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

  // container
  containerStyle,
  disabled = false,
}) => {
  // combine helper styles
  const combinedStyle = {
    ...getVariantStyle({variant, selected, BgColor, BorderColor, BorderWidth}),
    ...getRadiusStyle({Radius, CustomRadius}),
    ...getPaddingStyle({p, px, py, pt, pb, pl, pr}),
    ...getMarginStyle({m, mx, my, mt, mb, ml, mr}),
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
      style={[styles.base, combinedStyle, containerStyle]}>
      <DynamicIcon name={name} type={type} color={iconColor} size={size} />
    </TouchableOpacity>
  );
};

export default CircularIcon;

const styles = StyleSheet.create({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(20,146,230,0.1)',
    borderRadius: RADIUS.full,
  },
});
