import {StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY, FONT_SIZE} from '../../../constants';
import { verticalScale } from '../../../constants/responsive';

export default Styles = StyleSheet.create({
  error: {
    color: COLORS.error,
    fontSize: FONT_SIZE.sm,
    fontFamily: FONT_FAMILY.medium,
    textAlign: 'right',
  },
  error_container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    alignSelf:"flex-end",
    marginTop: verticalScale(7),
  },
  icon: {
    color: COLORS.error,
  },
});
