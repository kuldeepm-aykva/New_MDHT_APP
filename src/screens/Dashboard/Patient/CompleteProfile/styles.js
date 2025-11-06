import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../../constants/responsive';
import {COLORS, RADIUS} from '../../../../constants';
import {
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
} from '../../../../constants/typography';

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
    marginBottom: verticalScale(12),
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
  // gender

  // Email verification modal
  modal_title: {
    fontSize: FONT_SIZE.xl,
    color: COLORS.textDark,
    fontWeight: FONT_WEIGHT.semiBold,
  },
  modal_subtitle: {
    fontSize: FONT_SIZE.base,
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginTop: verticalScale(7),
  },
  EmailVerfiedModalStyle: {
    width: '85%',
    paddingVertical: verticalScale(20),
  },

  // profile_ modal
  profile_modal_title: {
    fontWeight: FONT_WEIGHT.bold,
    fontSize: FONT_SIZE.lg,
    color: COLORS.textDark,
  },
  profile_modal_subtitle: {
    lineHeight: 22,
    marginTop: verticalScale(10),
  },
  // profile modal

  // bottom modal
  BottomModal_btn: {
    // borderWidth:0.5,
    borderBottomColor: 'rgba(110, 110, 110, 0.40)',
    borderBottomWidth: 0.5,
    paddingBottom: verticalScale(10),
    marginVertical: verticalScale(10),
  },
  BottomModal_btn_text: {
    fontSize: FONT_SIZE.base,
    color: COLORS.textDark,
  },
  // bottom modal
});
