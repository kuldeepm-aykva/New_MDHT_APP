import {StyleSheet} from 'react-native';
import {scale} from '../../../../constants/responsive';
import {COLORS, RADIUS} from '../../../../constants';

export default styles = StyleSheet.create({
  card: {
    flex: 1,
    // padding: scale(12),
    borderRadius: RADIUS.lg,
    backgroundColor: COLORS.bg_light,
  },
});
