import {StyleSheet} from 'react-native';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../constants';

export default styles = StyleSheet.create({
  ListCardStyle: {
    backgroundColor: COLORS.transparent,
  },
  list_item_style: {
    backgroundColor: COLORS.bg_light,
  },
  text: {
    fontSize: FONT_SIZE.base,
    fontWeight: FONT_WEIGHT.medium,
    color: COLORS.textPrimary,
  },
  HighlightedText:{
    color:COLORS.textDark,
  }
});
