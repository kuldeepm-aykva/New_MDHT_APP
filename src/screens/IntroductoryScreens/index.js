import {
  Animated,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useState, useEffect, useRef} from 'react';
import {styles} from './styles';
import Intro1 from '../../assets/svgImage/common/Intro1.png';
import Intro2 from '../../assets/svgImage/common/Intro2.png';
import Intro3 from '../../assets/svgImage/common/Intro3.png';
import Intro4 from '../../assets/svgImage/common/Intro4.png';
import SafeArea from '../../components/layout/SafeArea/SafeArea';
import Container from '../../components/layout/Container/Container';
import {COLORS, FONT_WEIGHT} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../components/common/Button';
import {Column, Row} from '../../components/layout';
import {scale} from '../../constants/responsive';
import {useNavigation} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';

const InfoScreen1 = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const intervalRef = useRef(null);

  const [InfoScreen, setInfoScreen] = useState('info1');

  const infoKeys = ['info1', 'info2', 'info3', 'info4'];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    let index = 0;

    intervalRef.current = setInterval(() => {
      index += 1;
      if (index < infoKeys.length) {
        setInfoScreen(infoKeys[index]);
      } else {
        clearInterval(intervalRef.current);
      }
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleActive = item => {
    setInfoScreen(item);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const images = {
    info1: Intro1,
    info2: Intro2,
    info3: Intro3,
    info4: Intro4,
  };

  const headings = {
    info1: 'Let’s understand your health better',
    info2: 'Fast & Easy Appointments',
    info3: 'Stay on Track, Together',
    info4: 'Never Miss a Dose or Meal',
  };

  const subtexts = {
    info1:
      'Track your symptoms, share health insights,\nimprove outcomes, together with your doctor!',
    info2:
      'Book your appointment effortlessly - online or\nin-clinic, at your convenience!',
    info3:
      'Add a family member to help manage your\nmeals, medications, and daily reminders.',
    info4:
      'Get reminders for meals and medicines to\nsupport your daily health.',
  };

  return (
    <SafeArea backgroundColor={COLORS.white} statusBarStyle="dark-content">
      <Container centered padding="none">
        <Row justify="center" align="center" style={[styles.img_container]}>
          <Image source={images[InfoScreen]} style={styles.mock_img} />
        </Row>

        <LinearGradient
          colors={[COLORS.primary, '#0167B4']}
          start={{x: 0.1, y: 0}}
          end={{x: 0.6, y: 1}}
          style={styles.bottom_container}>
          <Text style={styles.heading}>{headings[InfoScreen]}</Text>
          <Text style={styles.subtext}>{subtexts[InfoScreen]}</Text>

          {/* Dots indicator */}
          <Row
            style={styles.dotsContainer}
            align="center"
            justify="center"
            spacing={scale(5)}>
            {infoKeys.map(key => (
              <TouchableOpacity key={key} onPress={() => handleActive(key)}>
                <Text
                  style={[
                    styles.dot,
                    InfoScreen === key && styles.active_dot,
                  ]}></Text>
              </TouchableOpacity>
            ))}
          </Row>

          {/* Buttons */}
          <Column spacing={10} style={{width: '100%'}}>
            <CustomButton
              text="Create Your Account"
              fullWidth
              variant="outline"
              TextColor={COLORS.white}
              fontSize="base"
              BorderColor={COLORS.white}
              BgColor={COLORS.teritary}
              onPress={() => navigation.navigate(ROUTES.RolSelection)}
            />

            <CustomButton
              text="Log In"
              fullWidth
              size="medium"
              TextColor={COLORS.secondary}
              variant="white"
              fontSize="base"
              onPress={() => navigation.navigate(ROUTES.LoginPhoneNumber)}
            />
          </Column>
        </LinearGradient>
      </Container>
    </SafeArea>
  );
};

export default InfoScreen1;
