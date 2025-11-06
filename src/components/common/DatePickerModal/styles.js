import {StyleSheet} from 'react-native';
import {verticalScale} from '../../../constants/responsive';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../constants';

export default Styles = StyleSheet.create({
  dateModalHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: verticalScale(15),
  },
  dateModalTitle: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.textDark,
    fontWeight: FONT_WEIGHT.bold,
  },
  close_btn_container: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
