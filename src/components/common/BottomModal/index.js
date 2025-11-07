import {
  View,
  Dimensions,
  Animated,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {useEffect, useRef, useState} from 'react';
const {height: screenHeight} = Dimensions.get('window');
import styles from './style';
import {COLORS} from '../../../constants';

const BottomModal = ({
  visible,
  onClose,
  children,
  backgroundColor = COLORS.white,
}) => {
  const slideAnim = useRef(new Animated.Value(screenHeight)).current;
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: screenHeight - contentHeight,
        duration: 250,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: screenHeight,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  }, [visible, contentHeight]);

  return (
    <Modal
      transparent
      visible={visible}
      animationType="none"
      onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.backdrop} />
      </TouchableWithoutFeedback>

      <Animated.View
        style={[
          styles.modalContainer,
          {
            top: slideAnim,
            backgroundColor,
          },
        ]}>
        <View style={styles.dragIndicator} />

        <View
          style={[styles.content_container]}
          onLayout={event => setContentHeight(event.nativeEvent.layout.height)}>

          {children}
        </View>
      </Animated.View>
    </Modal>
  );
};

export default BottomModal;
