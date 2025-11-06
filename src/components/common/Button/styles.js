import {StyleSheet} from 'react-native';
import { COLORS, FONT_WEIGHT, RADIUS, SPACING } from '../../../constants';
import { scale, verticalScale } from '../../../constants/responsive';

export default styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS.full,
    paddingHorizontal: SPACING.lg,
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

  btnFullWidth: {
    width: '100%',
  },
  btnDisabled: {
    opacity: 0.5,
  },
  btnPressed: {
    opacity: 0.8,
  },
  btnSelected: {
    borderColor: COLORS.primary,
  },
  btnText: {
    fontWeight: FONT_WEIGHT.semiBold,
  },
  btnTextDisabled: {
    opacity: 0.6,
  },
  iconLeft: {
    marginRight: scale(8),
  },
  iconRight: {
    marginLeft: scale(8),
  },
});
