import {StyleSheet} from 'react-native';
import {scale, verticalScale} from '../../constants/responsive';
import {COLORS, FONT_SIZE} from '../../constants';

export default Styles = StyleSheet.create({
  btnContainer: {
    marginVertical: verticalScale(25),
    width: '100%',
  },
  policy_text: {
    fontSize: FONT_SIZE.sm,
    textAlign: 'center',
  },
  login_container: {
    marginVertical: verticalScale(20),
  },
  arrow: {
    width: scale(50),
    height: verticalScale(38),
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(20),
    backgroundColor: COLORS.white,
    borderColor: 'rgba(110, 110, 110, 0.25)',
    marginBottom: verticalScale(25),
  },
  logo_container:{
    marginVertical:verticalScale(15),
  }
});
