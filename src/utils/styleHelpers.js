import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  RADIUS,
  SPACING,
} from '../constants';

//  VARIANT STYLE (Background, Border)
export const getVariantStyle = ({
  variant,
  selected,
  BgColor,
  BorderColor,
  BorderWidth,
}) => {
  let backgroundColor, borderColor, borderWidth;

  switch (variant) {
    case 'primary':
      backgroundColor = COLORS.primary;
      borderColor = COLORS.primary;
      break;
    case 'secondary':
      backgroundColor = COLORS.secondary;
      borderColor = COLORS.secondary;
      break;
    case 'outline':
      backgroundColor = 'transparent';
      borderColor = COLORS.textPrimary;
      break;
    case 'black':
      backgroundColor = COLORS.black;
      borderColor = COLORS.black;
      break;
    case 'white':
      backgroundColor = COLORS.white;
      borderColor = COLORS.white;
      break;
    case 'error':
      backgroundColor = COLORS.error;
      borderColor = COLORS.error;
      break;
    case 'success':
      backgroundColor = COLORS.success;
      borderColor = COLORS.success;
      break;
    default:
      // backgroundColor = COLORS.primary;
      // borderColor = COLORS.primary;
  }

  // ✅ Allow full customization from props
  if (BgColor) backgroundColor = COLORS[BgColor] || BgColor;
  if (BorderColor) borderColor = COLORS[BorderColor] || BorderColor;
  borderWidth =
    BorderWidth !== undefined ? BorderWidth : variant === 'outline' ? 1 : 0;

  return {
    backgroundColor: selected
      ? COLORS.primary || COLORS.primary
      : backgroundColor,
    borderColor,
    borderWidth,
  };
};

//  TEXT COLOR
export const getTextVariantStyle = ({variant, selected, TextColor}) => {
  if (selected && variant === 'outline') return {color: COLORS.white};

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

//  RADIUS
export const getRadiusStyle = ({Radius, CustomRadius}) => {
  if (CustomRadius !== undefined) return {borderRadius: CustomRadius};

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
      return {};
  }
};

//  FONT SIZE
export const getFontSizeStyle = ({fontSize}) => {
  if (!fontSize) return {};

  // If number -- 10, 12 ,etc
  if (typeof fontSize === 'number') {
    return {fontSize};
  }

  // "sm" or "lg"
  return {fontSize: FONT_SIZE[fontSize] || FONT_SIZE.base};
};

//  FONT WEIGHT
export const getFontWeightStyle = ({fontWeight}) => {
  if (!fontWeight) return {};

  // If number -- 300, 400 ,etc
  if (typeof fontWeight === 'number' || !isNaN(Number(fontWeight))) {
    return {fontWeight: fontWeight.toString()};
  }

  // light,medium,etc
  return {fontWeight: FONT_WEIGHT[fontWeight] || FONT_WEIGHT.regular};
};

//  FONT FAMILY
export const getFontFamilyStyle = ({fontFamily}) => {
  if (!fontFamily) return {};
  return {fontFamily: FONT_FAMILY[fontFamily] || FONT_FAMILY.regular};
};

//  LINE HEIGHT
export const getLineHeightStyle = ({lineHeight}) => {
  if (!lineHeight) return {};
  return {lineHeight: LINE_HEIGHT[lineHeight] || LINE_HEIGHT.base};
};

//  PADDING
export const getPaddingStyle = ({p, px, py, pt, pb, pl, pr}) => {
  const style = {};
  if (p) style.padding = SPACING[p] || p;
  if (px) {
    style.paddingHorizontal = SPACING[px] || px;
  }
  if (py) {
    style.paddingVertical = SPACING[py] || py;
  }
  if (pt) style.paddingTop = SPACING[pt] || pt;
  if (pb) style.paddingBottom = SPACING[pb] || pb;
  if (pl) style.paddingLeft = SPACING[pl] || pl;
  if (pr) style.paddingRight = SPACING[pr] || pr;
  return style;
};

//  MARGIN
export const getMarginStyle = ({m, mx, my, mt, mb, ml, mr}) => {
  const style = {};
  if (m) style.margin = SPACING[m] || m;
  if (mx) {
    style.marginHorizontal = SPACING[mx] || mx;
  }
  if (my) {
    style.marginVertical = SPACING[my] || my;
  }
  if (mt) style.marginTop = SPACING[mt] || mt;
  if (mb) style.marginBottom = SPACING[mb] || mb;
  if (ml) style.marginLeft = SPACING[ml] || ml;
  if (mr) style.marginRight = SPACING[mr] || mr;
  return style;
};


