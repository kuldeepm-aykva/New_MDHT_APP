import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {scale, verticalScale} from '../../../constants/responsive';

export default styles = StyleSheet.create({
  ListCardStyle: {
    backgroundColor: COLORS.transparent,
    borderWidth: 0.6,
    borderColor: COLORS.borderSecondary,
    marginVertical: scale(4),
  },
  list_item_style: {
    backgroundColor: COLORS.white,
    paddingVertical: verticalScale(14),
  },
  last_condition: {
    marginVertical: verticalScale(10),
  },
  section_header: {
    marginVertical: verticalScale(12),
  },
});
