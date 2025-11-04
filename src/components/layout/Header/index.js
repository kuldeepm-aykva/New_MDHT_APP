import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale, verticalScale} from '../../../constants/responsive';
import Row from '../Row/Row';
import {truncateText} from '../../../utils/common';
import {DynamicIcon} from '../../common/Icon';
import {COLORS} from '../../../constants';
import {useNavigation} from '@react-navigation/native';

const Header = ({user, title, SearchPress, NotificationPress}) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <>
      <StatusBar
        translucent={true}
        backgroundColor={COLORS.transparent}
        barStyle="light-content"
      />
      <LinearGradient
        colors={['#0269B6', '#1491E5']}
        start={{x: 1, y: 0.2}}
        end={{x: 1, y: 0.9}}
        style={[
          styles.header_container,
          {
            paddingTop: insets.top + verticalScale(20),
          },
        ]}>
        <Row align="center" justify="space-between">
          {user ? (
            <View style={[styles.user_chip]}>
              <Image
                source={{uri: 'https://i.pravatar.cc/100'}}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.greeting}>Good Afternoon!</Text>
                <Text style={styles.username}>
                  Hi, {truncateText('John Smith', 10)}
                </Text>
              </View>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={[styles.back_container]}>
              <DynamicIcon
                type="MaterialIcons"
                color={COLORS.white}
                name="keyboard-arrow-left"
                size={scale(30)}
              />
              <Text style={[styles.screen_title]}>{title}</Text>
            </TouchableOpacity>
          )}

          <Row align="center" justify="center">
            {SearchPress && (
              <TouchableOpacity
                onPress={SearchPress}
                style={styles.icon_wrapper}>
                <DynamicIcon
                  name="search"
                  type="Feather"
                  size={scale(20)}
                  color={COLORS.white}
                />
              </TouchableOpacity>
            )}

            {NotificationPress && (
              <TouchableOpacity
                onPress={NotificationPress}
                style={styles.icon_wrapper}>
                <DynamicIcon
                  name="notifications"
                  type="Ionicons"
                  size={scale(20)}
                  color={COLORS.white}
                />
              </TouchableOpacity>
            )}
          </Row>
        </Row>
      </LinearGradient>
    </>
  );
};

export default Header;
