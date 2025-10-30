import {StyleSheet} from 'react-native';
import {verticalScale} from '../../../../../constants/responsive';
import {FONT_FAMILY} from '../../../../../constants';

export default styles = StyleSheet.create({
  form_container: {
    marginTop: verticalScale(30),
    marginBottom: verticalScale(25),
    width: '100%',
  },
  dividerContainer: {
    marginVertical: verticalScale(12),
  },
  divider_text: {
    fontFamily: FONT_FAMILY.regular,
  },
  Already_acc_container:{
    marginTop:verticalScale(30),
  }
});
