import {StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../../constants';
import {verticalScale} from '../../../../constants/responsive';

export default styles = StyleSheet.create({
  ListCardStyle: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.borderSecondary,
  },
  text: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.base,
    fontWeight: FONT_WEIGHT.medium,
  },
  NoResult:{
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.base,
    fontWeight: FONT_WEIGHT.medium,
  }
});
