import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {scale, verticalScale} from '../../../constants/responsive';

export default styles = StyleSheet.create({
  main_card: {
    paddingVertical: verticalScale(20),
    paddingHorizontal: scale(12),
    borderWidth: 0.5,
    borderColor: COLORS.borderSecondary,
    borderRadius: scale(15),
    marginBottom: verticalScale(20),
  },
});
