import { View, Text, Image, Animated } from 'react-native';
import React, { useEffect } from 'react';
import { styles } from './styles';
import splash_logo from '../../assets/images/Common/splash_logo.png';
import { useNavigation } from '@react-navigation/native';
import SafeArea from '../../components/layout/SafeArea/SafeArea';
import Container from '../../components/layout/Container/Container';

const SplashScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('INFOSCREEN1');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeArea backgroundColor='#FFFFFF' statusBarStyle='dark-content'>
      <Container centered>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Image source={splash_logo} style={styles.logo} />
        </Animated.View>
      </Container>
    </SafeArea>
  );
};

export default SplashScreen;
