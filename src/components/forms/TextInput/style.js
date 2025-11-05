import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../constants/responsive';
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
  RADIUS,
} from '../../../constants';

export default styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(0),
  },
  labelContainer: {
    // marginBottom: verticalScale(8),
  },
  label: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.textPrimary,
    fontWeight: FONT_WEIGHT.medium,
  },
  required: {
    color: COLORS.error,
  },
  verifiedContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(3),
  },
  verifiedConfirm: {
    color: COLORS.success,
    fontSize: FONT_SIZE.sm,
    fontWeight:FONT_WEIGHT.semiBold,
  },
  inputContainer: {
    position: 'relative',
  },
  input: {
    // flex: 1,
    width: '100%',
    fontSize: FONT_SIZE.base,
    color: COLORS.textDark,
    borderWidth: scale(1),
    borderRadius: RADIUS[10],
    borderColor: COLORS.borderSecondary,
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(14),
    backgroundColor: COLORS.white,
    fontFamily: FONT_FAMILY.regular,
    height: verticalScale(50),
  },
  disabledInput: {
    backgroundColor: "rgba(110, 110, 110, 0.07)",
    color: COLORS.textDark,
  },
  errorInput: {
    borderColor: COLORS.error,
    borderWidth: scale(1),
  },
  iconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 2,
    bottom: 0,
    zIndex: 10,
    padding: scale(4),
  },
  RightIconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right:10,
    zIndex: 10,
    padding: scale(4),
  },
});
