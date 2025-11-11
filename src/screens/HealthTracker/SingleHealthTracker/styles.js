import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {scale, verticalScale} from '../../../constants/responsive';

export default styles = StyleSheet.create({
  main_card: {
    paddingTop: verticalScale(12),
    paddingHorizontal: scale(16),
    borderWidth: 0.5,
    borderColor: COLORS.borderSecondary,
    borderRadius: scale(15),
    height: '100%',
    marginBottom: verticalScale(20),
  },
  btn_container: {
    paddingVertical: verticalScale(12),
  },
});
