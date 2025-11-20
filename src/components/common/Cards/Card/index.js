import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {
  getMarginStyle,
  getPaddingStyle,
  getRadiusStyle,
  getVariantStyle,
} from '../../../../utils/styleHelpers';
import {COLORS} from '../../../../constants';
import {scale} from '../../../../constants/responsive';

const Card = ({
  children,
  variant = 'white',
  selected = false,
  BgColor = COLORS.white,
  BorderColor = COLORS.borderSecondary,
  BorderWidth = 1,
  Radius = 'lg',
  CustomRadius,
  p,
  px = scale(16),
  py = scale(16),
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
  style,
  onPress,
  disabled,
  shadow = true,
}) => {
  const variantStyle = getVariantStyle({
    variant,
    selected,
    BgColor,
    BorderColor,
    BorderWidth,
  });

  const radiusStyle = getRadiusStyle({Radius, CustomRadius});
  const paddingStyle = getPaddingStyle({p, px, py, pt, pb, pl, pr});
  const marginStyle = getMarginStyle({m, mx, my, mt, mb, ml, mr});

  const cardStyles = [
    styles.card,
    variantStyle,
    radiusStyle,
    paddingStyle,
    marginStyle,
    shadow ? styles.shadow : {},
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        disabled={disabled}
        style={cardStyles}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={cardStyles}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
  },
  shadow: {
    shadowColor: 'rgba(0, 0, 0, 0.15)',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default Card;
