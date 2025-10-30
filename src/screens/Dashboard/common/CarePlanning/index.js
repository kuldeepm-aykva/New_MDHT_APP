import {View, Text, Pressable} from 'react-native';
import Styles from './Styles';
import {DynamicIcon} from '../../../../components/common/Icon';
import {scale} from '../../../../constants/responsive';
import {COLORS} from '../../../../constants';

const CarePlannerCard = ({data, onPress}) => {
  const {title, subtitle, value, Icon} = data;
  const IconComponent = Icon;

  return (
    <Pressable
      style={({pressed}) => [Styles.main_card, pressed && {opacity: 0.8}]}
      onPress={onPress}
      android_ripple={{color: 'rgba(0, 0, 0, 0.05)'}}>
      <View style={Styles.top_card}>
        <View style={Styles.icon_container}>
          <IconComponent width={scale(30)} height={scale(28)} />
        </View>
        <Text
          style={Styles.card_planner_text}
          numberOfLines={1}
          allowFontScaling={false}
          ellipsizeMode="tail">
          {title}
        </Text>
      </View>

      <View style={Styles.bottom_card}>
        <View style={Styles.bottom_card_container}>
          <Text style={Styles.bottom_card_bold_text} allowFontScaling={false}>
            {value}
          </Text>
          <Text
            style={Styles.bottom_card_normal_text}
            numberOfLines={2}
            ellipsizeMode="tail"
            allowFontScaling={false}>
            {subtitle}
          </Text>
        </View>
        <DynamicIcon
          type="Entypo"
          name="chevron-right"
          size={scale(14)}
          color={COLORS.primary}
        />
      </View>
    </Pressable>
  );
};

export default CarePlannerCard;
