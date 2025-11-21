import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../constants/responsive';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../constants';

export default StyleSheet.create({
  setBaseline: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: '500',
  },
  baselineValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF5252',
  },
  BaseLineModal: {
    width: '90%',
    paddingVertical: verticalScale(20),
  },
  chartContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  yAxisText: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.textPrimary,
  },
  xAxisText: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.textPrimary,
  },
});
