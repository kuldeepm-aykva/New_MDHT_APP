import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../constants/responsive';
import {COLORS, FONT_SIZE, FONT_WEIGHT, RADIUS} from '../../constants';

export default Styles = StyleSheet.create({
  img_container: {
    marginVertical: verticalScale(14),
  },
  policy_text: {
    fontSize: FONT_SIZE.sm,
    textAlign: 'center',
    color: COLORS.textPrimary,
  },
  form_container: {
    marginTop: verticalScale(40),
    width: '100%',
  },
  countryBox: {
    borderWidth: 1,
    borderColor: COLORS.borderSecondary,
    borderRadius: RADIUS[10],
    paddingHorizontal: verticalScale(13),
    paddingVertical: verticalScale(13),
  },
  flag: {
    fontSize: FONT_SIZE.md,
  },
  code: {
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.medium,
    color: COLORS.textPrimary,
  },

  Already_acc_container: {
    marginTop: verticalScale(35),
  },
  login_email_phone_container: {
    marginTop: verticalScale(8),
  },

  divider_text: {
    textAlign: 'center',
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.sm,
  },
  dividerContainer: {
    marginVertical: verticalScale(16),
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.textPrimary,
    marginHorizontal: scale(10),
    opacity: 0.4,
  },
});
