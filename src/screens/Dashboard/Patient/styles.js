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
  care_conatiner: {
    backgroundColor: COLORS.bg_light,
    borderRadius: scale(40),
    padding: verticalScale(20),
  },
  care_planer_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 4,
    marginVertical: verticalScale(15),
    flexWrap: 'wrap',
  },

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
    backgroundColor: '#fff',
    marginTop: verticalScale(10),
  },
  //   banner

  // consult_doctor_container
  consult_doctor_container: {
    backgroundColor: COLORS.bg_light,
    borderRadius: scale(40),
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(15),
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
  // tabs
  tabs: {
    backgroundColor: COLORS.white,
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(15),
  },
  tabs_btn_container: {
    borderBottomWidth: 1,
    borderColor: 'rgba(110, 110, 110, 0.11)',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  tabs_btn: {
    paddingBottom: verticalScale(10),
    flex: 0.2,
  },
  active_btn: {
    borderBottomWidth: 3,
    borderRadius: scale(4),
    borderColor: COLORS.primary,
  },
  tabs_text: {
    textAlign: 'center',
    color: COLORS.textDark,
    // fontFamily: theme.typography.fontFamily.medium,
    fontSize: FONT_SIZE.sm,
  },
  tab_cards_container: {
    // marginVertical: verticalScale(15),
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
  },
  no_condition_added_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  no_condition_added_title: {
    textAlign: 'center',
    // fontFamily: theme.typography.fontFamily.bold,
    color: '#555555',
    // fontSize: theme.typography.fontSize.sm,
    marginVertical: verticalScale(7),
  },
  no_condition_added_sub_title: {
    textAlign: 'center',
    // fontFamily: theme.typography.fontFamily.regular,
    color: '#777777',
    // fontSize: theme.typography.fontSize.xs,
    marginBottom: verticalScale(20),
  },
  tabs_cards: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.borderSecondary,
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
    borderRadius: scale(11),
    paddingHorizontal: scale(18),
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginBottom: verticalScale(15),
  },
  // tabs
});
