import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../../constants/responsive';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../../constants';

export default styles = StyleSheet.create({
  symptom: {
    marginTop: verticalScale(2),
  },
  disease: {
    color: COLORS.textDark,
    fontSize: FONT_SIZE.base,
    fontWeight: FONT_WEIGHT.medium,
  },
  updated: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.sm,
  },
  tabs_cards: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.borderColor,
    borderBottomWidth: 0,
    borderBottomColor: COLORS.primary,
    borderRadius: scale(11),
    overflow: 'hidden',
    paddingHorizontal: scale(18),
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginBottom: verticalScale(15),
  },
  bottomCurve: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
});
