import {View, Text, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {COLORS, FONT_SIZE, FONT_WEIGHT, RADIUS} from '../../../constants';
import {DynamicIcon} from '../../common/Icon';
import {scale, verticalScale} from '../../../constants/responsive';
import CustomText from '../../common/CustomText/CustomText';
import {Row} from '../../layout';
export default CustomDropdown = ({
  data,
  value,
  onChange,
  placeholder = 'Select',
  icon = 'chevron-down',
  icontype = 'Entypo',
  iconColor,
  iconSize,
  showType = false,
  style,
  mainTextStyle,
  TypeTextStyle,
}) => {
  return (
    <Dropdown
      style={[styles.Dropdown, style]}
      containerStyle={[styles.menuContainer]}
      placeholderStyle={{
        fontSize: FONT_SIZE.sm,
        color: COLORS.textDark,
      }}
      selectedTextStyle={{
        fontSize: FONT_SIZE.sm,
        fontWeight: FONT_WEIGHT.bold,
        color: COLORS.textDark,
      }}
      data={data}
      labelField="label"
      valueField="value"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      renderRightIcon={() => (
        <DynamicIcon
          name={icon}
          type={icontype}
          color={iconColor ?? COLORS.textPrimary}
          size={scale(iconSize ?? 18)}
        />
      )}
      renderItem={(item, index) => {
        const isFirst = index === 0;
        const isLast = index === data.length - 1;

        return (
          <View
            style={[
              styles.itemWrapper,
              isFirst && styles.firstItem,
              isLast && styles.lastItem,
            ]}>
            <Row
              align="center"
              justify="space-between"
              style={styles.DropdownMenuItem}>
              <CustomText
                style={[mainTextStyle]}
                TextColor={COLORS.textDark}
                fontSize={FONT_SIZE.sm}
                fontWeight={FONT_WEIGHT.bold}>
                {item.label}
              </CustomText>

              {showType && item.type && (
                <CustomText
                  style={[TypeTextStyle]}
                  TextColor={COLORS.textPrimary}
                  fontSize={FONT_SIZE.sm}
                  fontWeight={FONT_WEIGHT.regular}>
                  {item.type}
                </CustomText>
              )}
            </Row>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    backgroundColor: '#EFF9FF',
    borderRadius: RADIUS.md,
    paddingVertical: 4,
  },

  itemWrapper: {
    backgroundColor: '#EFF9FF',
  },

  firstItem: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  lastItem: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  DropdownMenuItem: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(14),
  },

  Dropdown: {
    height: 48,
    borderWidth: 1,
    borderColor: COLORS.borderSecondary,
    borderRadius: 12,
    paddingHorizontal: 14,
    marginBottom: scale(10),
  },
});
