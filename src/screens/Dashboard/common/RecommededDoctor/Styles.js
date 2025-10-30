import {StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY, FONT_SIZE, FONT_WEIGHT} from '../../../../constants';
import {normalizeFont, scale, verticalScale} from '../../../../constants/responsive';

export default StyleSheet.create({
  doctor_card: {
    backgroundColor: COLORS.white,
    // fontFamily: theme.typography.fontFamily.regular,
    paddingTop: verticalScale(15),
    paddingHorizontal: scale(15),
    borderWidth: 1,
    borderColor: '#E8F2FB',
    borderRadius: scale(25),
    marginBottom: verticalScale(10),
  },
  bottom_card: {
    borderTopWidth: 1,
    borderColor: '#E8F2FB',
    paddingVertical: verticalScale(8),
    marginTop: verticalScale(12),
  },
  upper_card_one: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    position: 'relative',
  },
  doctor_experience: {
    position: 'absolute',
    top: scale(-14),
    right: scale(-15),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3FAFE',
    padding: scale(10),
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  years: {
    fontSize: FONT_SIZE.lg,
    // fontFamily: theme.typography.fontFamily.bold,
    color: COLORS.textDark,
    fontWeight:FONT_WEIGHT.semiBold,
  },
  years_text: {
    fontSize: FONT_SIZE.xs,
    // fontFamily: theme.typography.fontFamily.regular,
    color: COLORS.textPrimary,
  },
  doctor_image: {
    width: scale(65),
    height: verticalScale(65),
    borderRadius: scale(7),
  },
  doctor_available: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(20, 146, 230, 0.1)',
    borderWidth: 0.2,
    borderColor: COLORS.primary,
    borderRadius: scale(100),
    paddingVertical: verticalScale(4),
    width: '65%',
    // fontFamily: theme.typography.fontFamily.regular,
  },
  available_text: {
    color: COLORS.primary,
    fontSize: normalizeFont(9),
    fontWeight: FONT_WEIGHT.regular,
    // fontFamily: theme.typography.fontFamily.medium,
  },
  doctor_unavailable: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 64, 64, 0.1)',
    borderWidth: 0.2,
    borderColor: COLORS.borderError,
    borderRadius: scale(100),
    paddingVertical: verticalScale(4),
    width: '65%',
    // fontFamily: theme.typography.fontFamily.regular,
  },
  unavailable_text: {
    color: COLORS.borderError,
    fontSize: normalizeFont(9),
    fontWeight: FONT_WEIGHT.regular,
  },
  doctor_name: {
    fontSize: FONT_SIZE.base,
    color: COLORS.textDark,
    // fontFamily: theme.typography.fontFamily.medium,
    marginVertical: verticalScale(5),
    fontWeight: FONT_WEIGHT.medium,
  },
  doctor_rating: {
    display: 'flex',
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
  },
  doctor_specialist: {
    fontSize: FONT_SIZE.xs,
    color: COLORS.textPrimary,
    fontWeight: FONT_WEIGHT.medium,
  },

  book_appointments_btn: {
    textAlign: 'center',
    // fontFamily: FONT_FAMILY.bo,
    fontSize: FONT_SIZE.sm,
    color: COLORS.textDark,
    fontWeight:FONT_WEIGHT.medium,
  },
});
