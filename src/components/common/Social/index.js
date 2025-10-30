import {
  View,
  TouchableOpacity,
} from 'react-native';
import {DynamicIcon} from '../Icon';
import {scale} from '../../../constants/responsive';
import {COLORS} from '../../../constants';
import {GoogleIcon} from '../../../assets/svgImage/index';
import styles from './styles';
import {Row} from '../../layout';

const SocialLogin = () => {
  return (
    <Row align="center" justify="space-between" spacing={scale(15)}>
      {/* Facebook */}
      <TouchableOpacity onPress={() => console.log('Facebook click')}>
        <View style={[styles.socialBtn, {backgroundColor: COLORS.primaryDark}]}>
          <DynamicIcon
            type="Ionicons"
            name="logo-facebook"
            size={scale(17)}
            color={COLORS.white}
          />
        </View>
      </TouchableOpacity>

      {/* Google */}
      <TouchableOpacity onPress={() => console.log('Google click')}>
        <GoogleIcon />
      </TouchableOpacity>

      {/* Apple */}
      <TouchableOpacity onPress={() => console.log('Apple click')}>
        <View style={[styles.socialBtn, {backgroundColor: COLORS.black}]}>
          <DynamicIcon
            type="Ionicons"
            name="logo-apple"
            size={scale(17)}
            color={COLORS.white}
          />
        </View>
      </TouchableOpacity>
    </Row>
  );
};

export default SocialLogin;
