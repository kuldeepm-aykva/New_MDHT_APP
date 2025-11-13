import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../constants/responsive';
import {RADIUS} from '../../../constants';

export default styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#F9FAFB',
    padding: scale(20),
    marginVertical: verticalScale(20),
    borderRadius: RADIUS.md,
  },
  CircularIcon: {
    padding: scale(10),
    backgroundColor: 'rgba(20, 146, 230, 0.1)',
    borderRadius:RADIUS.full,
  },
});
