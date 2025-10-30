import {Platform, StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';
import {scale, verticalScale} from '../../../constants/responsive';

export default styles = StyleSheet.create({
  header_container: {
    width: '100%',
    paddingVertical:
      Platform.OS === 'android' ? verticalScale(20) : verticalScale(15),
    borderBottomLeftRadius: verticalScale(20),
    borderBottomRightRadius: verticalScale(20),
    paddingHorizontal: Platform.OS === 'android' ? scale(15) : scale(20),
  },

  user_chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderWidth: 0.2,
    borderColor: '#fff',
    paddingVertical: scale(8),
    paddingHorizontal: scale(14),
    borderRadius: scale(30),
  },
  avatar: {
    width: scale(35),
    height: scale(35),
    borderRadius: scale(50),
    marginRight: scale(10),
  },
  greeting: {
    fontSize: scale(12),
    color: 'rgba(255, 255, 255, 0.5)',
    // fontFamily: theme.typography.fontFamily.regular,
  },
  username: {
    fontSize: scale(14),
    fontWeight: '600',
    color: COLORS.white,
    // fontFamily: theme.typography.fontFamily.medium,
  },
  icon_wrapper: {
    width: scale(48),
    height: scale(48),
    borderRadius: scale(50),
    borderWidth: 0.6,
    borderColor: '#3C9EE1',
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: scale(12),
  },
  back_container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(2),
  },
  screen_title: {
    fontSize: scale(17),
    fontWeight: '600',
    color: COLORS.white,
    marginTop: scale(-1),
  },
});
