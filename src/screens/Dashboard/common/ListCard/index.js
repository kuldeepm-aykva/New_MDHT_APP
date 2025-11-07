import {View, TouchableOpacity} from 'react-native';
import styles from './styles';

const ListCard = ({onPress, children, Conatinerstyle,list_item_style}) => {
  return (
    <TouchableOpacity
      // activeOpacity={0.8}
      style={[styles.list_single_container, Conatinerstyle]}
      onPress={onPress}>
      <View style={styles.leftCurve} />
      <View style={[styles.list_item, list_item_style]}>{children}</View>
    </TouchableOpacity>
  );
};

export default ListCard;
