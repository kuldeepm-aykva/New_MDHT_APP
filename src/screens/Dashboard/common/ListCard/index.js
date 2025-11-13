import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import {
  getMarginStyle,
  getPaddingStyle,
  getRadiusStyle,
  getVariantStyle,
} from '../../../../utils/styleHelpers';

const ListCard = ({
  onPress,
  children,
  Conatinerstyle,
  list_item_style,

  outerProps = {},
  innerProps = {},
}) => {
  const getCombinedStyles = props => {
    const {
      variant,
      selected,
      BgColor,
      BorderColor,
      BorderWidth,
      Radius,
      CustomRadius,
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
    } = props;

    return {
      ...getVariantStyle({
        variant,
        selected,
        BgColor,
        BorderColor,
        BorderWidth,
      }),
      ...getRadiusStyle({Radius, CustomRadius}),
      ...getPaddingStyle({p, px, py, pt, pb, pl, pr}),
      ...getMarginStyle({m, mx, my, mt, mb, ml, mr}),
    };
  };

  const outerStyle = getCombinedStyles(outerProps);
  const innerStyle = getCombinedStyles(innerProps);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.list_single_container, outerStyle, Conatinerstyle]}>
      <View style={styles.leftCurve} />
      <View style={[styles.list_item, innerStyle, list_item_style]}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

export default ListCard;
