import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import {DynamicIcon} from '../Icon';
import {COLORS} from '../../../constants';
import {scale} from '../../../constants/responsive';
const CustomModal = ({
  visible,
  onClose,
  children,
  footer,
  modalContainerStyle,
  OnclosePress,
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
              {OnclosePress && (
                <TouchableOpacity
                  style={[styles.closebtn]}
                  onPress={OnclosePress}>
                  <DynamicIcon
                    name="close-sharp"
                    type="Ionicons"
                    color={COLORS.textPrimary}
                    size={scale(16)}
                  />
                </TouchableOpacity>
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
export default CustomModal;
