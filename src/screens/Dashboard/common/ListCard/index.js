import {View, TouchableOpacity} from 'react-native';
import styles from './styles';

const ListCard = ({onPress, children, style}) => {
  return (
    <TouchableOpacity
      // activeOpacity={0.8}
      style={[styles.list_single_container, style]}
      onPress={onPress}>
      <View style={styles.leftCurve} />
      <View style={[styles.list_item]}>{children}</View>
    </TouchableOpacity>
  );
};

export default ListCard;
