import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import CustomText from '../../CustomText/CustomText';
import {COLORS, FONT_SIZE, FONT_WEIGHT, RADIUS} from '../../../../constants';

const TabCard = ({title, Icon, active, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.card,
        {
          backgroundColor: active ? COLORS.primary : COLORS.white,
          borderWidth: active ? 0 : 1,
          borderColor: COLORS.border || '#ddd',
        },
      ]}>
      <View style={styles.row}>
        <CustomText
          TextColor={active ? COLORS.white : COLORS.black}
          fontWeight={FONT_WEIGHT.medium}
          fontSize={FONT_SIZE.base}>
          {title}
        </CustomText>
        <Icon width={30} height={30} />
      </View>
    </TouchableOpacity>
  );
};

export default TabCard;
