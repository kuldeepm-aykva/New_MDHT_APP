import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../../constants/responsive';
import {COLORS} from '../../../constants';

export default styles = StyleSheet.create({
  socialBtn: {
    borderRadius: scale(25),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal:scale(45),
    paddingVertical:verticalScale(10),
  },
  googleBtn: {
    backgroundColor: COLORS.white,
    borderRadius: scale(25),
    height: verticalScale(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
