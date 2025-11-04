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
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZE.xs,
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
    height: verticalScale(55),
  },
  disabledInput: {
    backgroundColor: '#F5F5F5',
    color: COLORS.textDisabled,
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
});
