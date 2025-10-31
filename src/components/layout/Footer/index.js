import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import {Md_logo_Icon, Profile_Icon, Wave_Icon} from '../../../assets/svgImage';
import {scale, verticalScale} from '../../../constants/responsive';
import {COLORS, FONT_SIZE} from '../../../constants';
import Row from '../Row/Row';
import Column from '../Column/Column';

const {width} = Dimensions.get('window');

const Footer = () => {
  return (
    <View style={styles.main_container}>
      <ImageBackground
        source={require('../../../assets/svgImage/common/footer_bgImg.png')}
        resizeMode="contain"
        style={styles.footer_bg}>
        {/* Footer content */}
        <Row
          align="flex-end"
          justify="space-between"
          style={styles.footer_content}>
          {/* Left Tab */}
          <TouchableOpacity>
            <Column align="center" justify="center">
              <Md_logo_Icon width={38} height={32} />
              <Text style={[styles.footer_tab_text, styles.active_text]}>
                Home
              </Text>
            </Column>
          </TouchableOpacity>

          {/* Right Tab */}
          <TouchableOpacity>
            <Column align="center" justify="center">
              <Profile_Icon width={30} height={30} />
              <Text style={styles.footer_tab_text}>Profile</Text>
            </Column>
          </TouchableOpacity>
        </Row>
      </ImageBackground>

      {/* Floating middle button */}
      <Row
        align="center"
        justify="center"
        style={styles.middle_button_container}>
        <TouchableOpacity style={styles.middle_button}>
          <Wave_Icon width={38} height={38} />
        </TouchableOpacity>
      </Row>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: COLORS.white,
    position: 'relative',
    paddingBottom: verticalScale(10),
  },
  footer_bg: {
    width: width,
    height: verticalScale(110),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footer_content: {
    paddingHorizontal: scale(70),
    marginBottom: verticalScale(13),
    width: width,
  },
  footer_tab_text: {
    color: COLORS.white,
    fontSize: FONT_SIZE.sm,
  },
  active_text: {
    color: COLORS.white,
  },
  middle_button_container: {
    position: 'absolute',
    top: verticalScale(10),
    left: 0,
    right: 0,
  },
  middle_button: {
    backgroundColor: COLORS.white,
    borderRadius: scale(45),
    width: scale(60),
    height: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
