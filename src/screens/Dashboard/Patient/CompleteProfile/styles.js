import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../../constants/responsive';
import {COLORS, RADIUS} from '../../../../constants';
import {FONT_SIZE, FONT_WEIGHT} from '../../../../constants/typography';

export default styles = StyleSheet.create({
  main_card: {
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(16),
    borderWidth: 0.5,
    borderColor: COLORS.borderSecondary,
    borderRadius: scale(15),
    marginBottom: verticalScale(20),
  },
  heading: {
    color: COLORS.textDark,
    fontSize: FONT_SIZE.base,
    // fontFamily: theme.typography.fontFamily.medium,
    marginBottom: scale(20),
    fontWeight: FONT_WEIGHT.medium,
  },
  user_icon: {
    width: scale(90),
    height: scale(90),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    position: 'relative',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: scale(10),
  },
  profile_upload_icon: {
    position: 'absolute',
    bottom: scale(-12),
    padding: scale(6),
    borderRadius: scale(50),
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    marginTop: verticalScale(25),
  },
  textInput: {
    height: verticalScale(45),
    // borderWidth: 1,
    // borderColor: 'rgba(110, 110, 110, 0.25)',
    // marginBottom: verticalScale(10),
  },
  TextInputcontainerStyle: {
    marginBottom: verticalScale(10),
  },
  lablestyle: {
    marginBottom: verticalScale(5),
  },
  labeltextstyle: {
    color: COLORS.textPrimary,
    fontWeight: FONT_WEIGHT.medium,
  },

  // gender

  genderContainer: {
    marginBottom: verticalScale(16),
  },
  label: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.sm,
    marginBottom: scale(10),
    fontWeight: FONT_WEIGHT.semiBold,
  },
  optionsContainer: {
    gap: 10,
  },
  optionButton: {
    flex: 1,
    padding: scale(11),
    borderWidth: 1,
    borderColor: 'rgba(110, 110, 110, 0.25)',
    borderRadius: RADIUS.md,
    textAlign: 'center',
  },
  optionText: {
    color: COLORS.textPrimary,
    textAlign: 'center',
    fontWeight: FONT_WEIGHT.light,
    fontSize: FONT_SIZE.sm,
  },
  selectedText: {
    color: COLORS.primary,
    fontWeight: FONT_WEIGHT.regular,
  },
  selectedButton: {
    borderColor: COLORS.primary,
    borderWidth: 1,
  },

  // gender
});
