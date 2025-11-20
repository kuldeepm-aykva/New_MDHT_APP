import {StyleSheet, Image} from 'react-native';
import {COLORS, RADIUS} from '../../../constants';
import {
  scale,
  SCREEN_WIDTH,
  verticalScale,
} from '../../../constants/responsive';

export default styles = StyleSheet.create({
  main_card: {
    borderWidth: 0.5,
    padding: scale(13),
    borderColor: COLORS.borderSecondary,
    borderRadius: scale(15),
    marginBottom: verticalScale(20),
  },
  btn_container: {
    paddingVertical: verticalScale(12),
  },
  InfoModal: {
    width: '90%',
  },
});
