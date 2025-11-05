import {View, TouchableOpacity} from 'react-native';
import {DynamicIcon} from '../Icon';
import {scale, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../../constants/responsive';
import {COLORS} from '../../../constants';
import {GoogleIcon} from '../../../assets/svgImage/index';
import styles from './styles';
import {Row} from '../../layout';

const SocialLogin = () => {
  return (
    <Row align="center" justify="space-between" spacing={scale(12)}>
      {/* Facebook */}
      <TouchableOpacity onPress={() => console.log('Facebook click')}>
        <Row
          align="center"
          justify="center"
          style={[styles.socialBtn, {backgroundColor: COLORS.primaryDark}]}>
          <DynamicIcon
            type="Ionicons"
            name="logo-facebook"
            size={scale(17)}
            color={COLORS.white}
          />
        </Row>
      </TouchableOpacity>

      {/* Google */}
      <TouchableOpacity onPress={() => console.log('Google click')}>
        <GoogleIcon width={SCREEN_WIDTH * 0.3} height={SCREEN_HEIGHT * 0.048}/>
      </TouchableOpacity>

      {/* Apple */}
      <TouchableOpacity onPress={() => console.log('Apple click')}>
        <Row
          align="center"
          justify="center"
          style={[styles.socialBtn, {backgroundColor: COLORS.black}]}>
          <DynamicIcon
            type="Ionicons"
            name="logo-apple"
            size={scale(17)}
            color={COLORS.white}
          />
        </Row>
      </TouchableOpacity>
    </Row>
  );
};

export default SocialLogin;
