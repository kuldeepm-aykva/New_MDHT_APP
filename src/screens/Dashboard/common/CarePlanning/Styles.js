import {StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../../constants';
import {normalizeFont, scale, verticalScale} from '../../../../constants/responsive';

export default StyleSheet.create({
  main_card: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#E8F2FB',
    borderRadius: scale(17),
    flex: 1,
    // width:"50%",
  },

  top_card: {
    paddingHorizontal: scale(12),
    paddingTop: scale(8),
  },
  bottom_card: {
    paddingHorizontal: scale(12),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: scale(8),
    paddingTop: verticalScale(3),
    borderTopWidth: 0.2,
    borderColor: '#E8F2FB',
  },
  bottom_card_container: {
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottom_card_bold_text: {
    fontSize: FONT_SIZE.lg,
    // fontFamily: theme.typography.fontFamily.bold,
    color: COLORS.textDark,
    fontWeight:FONT_WEIGHT.semiBold,
  },
  bottom_card_normal_text: {
    // fontFamily: theme.typography.fontFamily.regular,
    fontSize: normalizeFont(9),
    color:COLORS.textPrimary,
  },
  card_planner_text: {
    // fontFamily: theme.typography.fontFamily.medium,
    fontWeight: FONT_WEIGHT.medium,
    color: COLORS.textDark,
    fontSize: FONT_SIZE.sm,
    marginVertical: verticalScale(10),
  },
});
