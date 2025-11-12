import {TouchableOpacity, View, Text} from 'react-native';
import CustomText from '../../CustomText/CustomText';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../../constants';
import styles from './styles';
import {Row} from '../../../layout';
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
} from '../../../../utils/styleHelpers';

const TabCard = ({
  // style props
  mainstyle,
  IconWidth,
  IconHeight,
  textstyle,

  onPress,

  title,
  Icon,
  active,
  selected = false,
  variant,
  TextColor,
  fontWeight,
  fontFamily,
  lineHeight,
  fontSize,
  BorderColor,
  borderWidth,
  BgColor,
  Radius,
  CustomRadius,

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
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.card,
        mainstyle,
        getVariantStyle({
          variant,
          selected,
          BorderColor,
          BgColor,
          BorderWidth: borderWidth,
        }),
        getRadiusStyle({Radius, CustomRadius}),
        getPaddingStyle({p, px, py, pt, pb, pl, pr}),
        getMarginStyle({m, mx, my, mt, mb, ml, mr}),
      ]}>
      <CustomText
        style={[
          getTextVariantStyle({variant, selected, TextColor}),
          getFontWeightStyle({fontWeight}),
          getFontFamilyStyle({fontFamily}),
          getLineHeightStyle({lineHeight}),
          getFontSizeStyle({fontSize}),
          textstyle,
        ]}
        TextColor={active ? COLORS.white : COLORS.textPrimary}
        fontWeight={FONT_WEIGHT.semiBold}
        fontSize={FONT_SIZE.base}>
        {title}
      </CustomText>
      <Row align="center" justify="flex-end">
        <Icon width={IconWidth || 60} height={IconHeight || 40} />
      </Row>
    </TouchableOpacity>
  );
};

export default TabCard;
