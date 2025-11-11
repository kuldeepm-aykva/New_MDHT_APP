import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {
  getFontFamilyStyle,
  getFontSizeStyle,
  getFontWeightStyle,
  getLineHeightStyle,
  getMarginStyle,
  getPaddingStyle,
  getRadiusStyle,
  getTextVariantStyle,
  getVariantStyle,
} from '../../../utils/styleHelpers';
import {COLORS, FONT_SIZE} from '../../../constants';

const CustomText = ({
  children,
  // Text Appearance
  variant,
  TextColor,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  textAlign = 'left',
  opacity,

  // Box Styling
  BgColor,
  BorderColor,
  Radius,
  CustomRadius,
  selected = false,

  // Spacing
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

  // Misc
  numberOfLines,
  ellipsizeMode,
  style,
  ...rest
}) => {
  const dynamicStyle = {
    ...getTextVariantStyle({variant, selected, TextColor}),
    ...getVariantStyle({variant, selected, BorderColor, BgColor}),
    ...getRadiusStyle({Radius, CustomRadius}),
    ...getFontSizeStyle({fontSize}),
    ...getFontWeightStyle({fontWeight}),
    ...getFontFamilyStyle({fontFamily}),
    ...getLineHeightStyle({lineHeight}),
    ...getPaddingStyle({p, px, py, pt, pb, pl, pr}),
    ...getMarginStyle({m, mx, my, mt, mb, ml, mr}),
    textAlign,
    opacity,
  };

  return (
    <Text
      style={[styles.defaultText, dynamicStyle, style]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      {...rest}>
      {children}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  defaultText: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.base,
  },
});
