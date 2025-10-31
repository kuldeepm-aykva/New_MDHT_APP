import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../../../constants';
import {Row} from '../../../../components/layout';
import {DynamicIcon} from '../../../../components/common/Icon';
import styles from './styles';

const TabsCard = ({
  onPress,
  title,
  subtitle,
  updatedAt,
  rightIcon = true,
  iconType = 'Entypo',
  iconName = 'chevron-right',
  iconSize = 27,
  containerStyle,
  titleStyle,
  subtitleStyle,
}) => {
  return (
    <TouchableOpacity
    //   activeOpacity={0.8}
      onPress={onPress}
      style={[styles.tabs_cards, containerStyle]}>
      <View>
        {updatedAt && <Text style={styles.updated}>{updatedAt}</Text>}
        <Row align="center" style={[styles.symptom]}>
          <Text style={[styles.disease, titleStyle]}>{title}</Text>
          {subtitle ? (
            <Text style={[styles.updated, subtitleStyle]}>{subtitle}</Text>
          ) : null}
        </Row>
      </View>

      {rightIcon && (
        <DynamicIcon
          type={iconType}
          name={iconName}
          size={iconSize}
          color={COLORS.textPrimary}
        />
      )}

      {/* Curved Gradient Bottom Border */}
      <LinearGradient
        colors={[COLORS.primary, COLORS.primary]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.bottomCurve}
      />
    </TouchableOpacity>
  );
};

export default TabsCard;
