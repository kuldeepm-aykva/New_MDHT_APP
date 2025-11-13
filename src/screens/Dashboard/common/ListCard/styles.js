import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../../constants/responsive';
import {COLORS} from '../../../../constants';

export default styles = StyleSheet.create({
  list_single_container: {
    marginBottom: verticalScale(12),
    backgroundColor: COLORS.primary,
    borderRadius: scale(15),
    overflow: 'hidden',
  },
  list_item: {
    flex: 1,
    backgroundColor: COLORS.transparent,
    paddingVertical: scale(17),
    paddingHorizontal: scale(17),
    borderRadius: scale(15),
    marginLeft: scale(7),
  },
  leftCurve: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: scale(20),
    backgroundColor: COLORS.primary,
    borderTopRightRadius: scale(0),
    borderBottomRightRadius: scale(0),
  },
});
