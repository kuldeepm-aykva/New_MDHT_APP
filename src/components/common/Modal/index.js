import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
const CustomModal = ({
  visible,
  onClose,
  children,
  footer,
  modalContainerStyle,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}>
      {/* Detect background press */}
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          {/* Prevent propagation when tapping inside modal */}
          <TouchableWithoutFeedback>
            <View style={[styles.modalContainer, modalContainerStyle]}>
              <View style={styles.content}>{children}</View>
              <View style={styles.footer}>{footer}</View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
export default CustomModal;
