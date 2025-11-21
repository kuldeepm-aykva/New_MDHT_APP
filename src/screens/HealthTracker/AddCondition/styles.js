import {Platform, StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../constants';
import {scale, SCREEN_HEIGHT} from '../../../constants/responsive';

export default styles = StyleSheet.create({
  heading: {
    // fontFamily: theme.typography.fontFamily.regular,
    fontSize: FONT_SIZE.md,
    textAlign: 'center',
    color: COLORS.textTeritary,
    fontWeight: FONT_WEIGHT.regular,
  },
  diease_container: {
    flexWrap: 'wrap',
    gap: scale(7),
    alignItems: 'center',
  },
  diease: {
    backgroundColor: '#F9FAFB',
    paddingVertical: scale(12),
    paddingHorizontal: scale(12),
    borderRadius: scale(15),
  },
  diease_text: {
    // fontFamily: theme.typography.fontFamily.regular,
    fontSize: FONT_SIZE.base,
    color: COLORS.textTeritary,
    fontWeight: FONT_WEIGHT.light,
  },

  //   past_condition_container

  past_condition_container: {
    flexWrap: 'wrap',
    marginTop: Platform.OS=="ios" ? SCREEN_HEIGHT * 0.055 : SCREEN_HEIGHT * 0.12,
  },
  add_condition: {
    fontWeight: FONT_WEIGHT.semiBold,
    color: COLORS.textDark,
    fontSize: FONT_SIZE.sm,
  },
});
