import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {scale} from '../../../constants/responsive';

export default styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(110, 110, 110, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: COLORS.white,
    borderRadius: scale(16),
    paddingVertical: scale(25),
    paddingHorizontal: scale(20),
    elevation: 10,
  },
  footer: {alignItems: 'flex-end'},
});
