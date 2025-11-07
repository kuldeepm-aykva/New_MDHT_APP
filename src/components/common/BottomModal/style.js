import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../constants/responsive';
import { COLORS } from '../../../constants';

export default styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderTopLeftRadius: scale(24),
    borderTopRightRadius: scale(24),
  },
  content_container: {
    paddingVertical: verticalScale(30),
    paddingHorizontal: scale(20),
  },
  dragIndicator: {
    alignSelf: 'center',
    width: 60,
    height: 3,
    borderRadius: 10,
    backgroundColor: COLORS.textPrimary,
    marginTop:verticalScale(10),
  },
});
