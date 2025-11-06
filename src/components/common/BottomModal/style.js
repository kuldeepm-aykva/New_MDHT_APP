import { StyleSheet } from 'react-native';
import { scale, verticalScale } from '../../../constants/responsive';

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
  content_container:{
    paddingVertical:verticalScale(40),
    paddingHorizontal:scale(20),
  }
});