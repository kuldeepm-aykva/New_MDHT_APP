import {StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY, FONT_SIZE, FONT_WEIGHT} from '../../../constants';
import {scale, verticalScale} from '../../../constants/responsive';

export default styles = StyleSheet.create({
  heading: {
    // fontFamily: FONT_FAMILY.bold,
    fontSize: FONT_SIZE.md,
    color: COLORS.textDark,
    fontWeight: FONT_WEIGHT.medium,
  },

  // care
  care_conatiner: {
    backgroundColor: COLORS.bg_light,
    borderRadius: scale(40),
    paddingVertical: verticalScale(25),
    paddingHorizontal: scale(18),
  },
  care_planer_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
    marginVertical: verticalScale(15),
    flexWrap: 'wrap',
  },
  // care

  //   banner
  banner_sub_text: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.white,
    fontFamily: FONT_FAMILY.medium,
    marginVertical: verticalScale(8),
  },
  banner_text: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.white,
    fontFamily: FONT_FAMILY.medium,
    fontWeight: FONT_WEIGHT.medium,
  },
  ai_btn: {
    // flex:1,
    backgroundColor: COLORS.white,
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(7),
    width: '65%',
  },
  ai_btn_text: {
    fontFamily: FONT_FAMILY.medium,
    fontSize: FONT_SIZE.sm,
    color: COLORS.textDark,
    fontWeight: FONT_WEIGHT.medium,
  },
  background: {
    flexDirection: 'row',
    padding: verticalScale(20),
    flex: 1,
    // backgroundColor: '#fff',
    marginTop: verticalScale(10),
  },
  //   banner

  // consult_doctor_container
  consult_doctor_container: {
    backgroundColor: COLORS.bg_light,
    borderRadius: scale(40),
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(18),
    // marginVertical: verticalScale(20),
  },
  consult_doctor_heading_container: {
    marginTop: verticalScale(10),
    marginBottom: verticalScale(15),
  },
  view_all_btn: {
    color: COLORS.primary,
    // fontFamily: theme.typography.fontFamily.medium,
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.medium,
  },

  // doctor_card

  // tabs
  tabs: {
    backgroundColor: COLORS.white,
    paddingVertical: verticalScale(30),
    paddingHorizontal: scale(18),
  },
  tabs_btn_container: {
    borderBottomWidth: 1,
    borderColor: 'rgba(110, 110, 110, 0.11)',
    textAlign: 'center',
  },
  tabs_btn: {
    paddingBottom: verticalScale(10),
    flex: 0.2,
  },
  active_btn: {
    borderBottomWidth: 3,
    borderColor: COLORS.primary,
  },
  tabs_text: {
    textAlign: 'center',
    color: COLORS.textDark,
    fontWeight: FONT_WEIGHT.medium,
    fontSize: FONT_SIZE.base,
  },

  tab_cards_container: {
    marginTop: verticalScale(20),
  },
  no_condition_added_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  no_condition_added_title: {
    textAlign: 'center',
    color: '#555555',
    fontSize: FONT_SIZE.base,
    marginVertical: verticalScale(7),
    fontWeight: FONT_WEIGHT.bold,
  },
  no_condition_added_sub_title: {
    textAlign: 'center',
    color: '#777777',
    marginBottom: verticalScale(20),
    fontSize: FONT_SIZE.sm,
  },
  // tabs

  // complete_profile_
  complete_profile_modal_title: {
    textAlign: 'center',
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.base,
    fontWeight: FONT_WEIGHT.medium,
    marginBottom: verticalScale(15),
  },
  // complete_profile_
});
