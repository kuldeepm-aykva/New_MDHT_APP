// CustomDropdown.jsx
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  RADIUS,
  SPACING,
} from '../../../constants';
import {scale, SCREEN_HEIGHT} from '../../../constants/responsive';
import {Row} from '../../layout';
import CustomText from '../../common/CustomText/CustomText';
import {DynamicIcon} from '../../common/Icon';

const CustomDropdown = ({
  data = [],
  value,
  onChange,
  placeholder = 'Select option',
  labelField = 'label',
  valueField = 'value',
  typeField = 'type',
  containerStyle,
  style,
}) => {
  return (
    <Dropdown
      style={[styles.dropdown, style]}
      renderRightIcon={() => (
        <DynamicIcon
          name="chevron-down"
          type="Entypo"
          color={COLORS.textPrimary}
          size={scale(18)}
        />
      )}
      placeholderStyle={styles.placeholder}
      selectedTextStyle={styles.selectedText}
      itemTextStyle={styles.itemText}
      data={data}
      maxHeight={300}
      labelField={labelField}
      valueField={valueField}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      renderItem={item => (
        <Row align="center" justify="space-between" style={styles.item}>
          <CustomText
            fontSize={FONT_SIZE.sm}
            TextColor={COLORS.textDark}
            fontWeight={FONT_WEIGHT.bold}>
            {item[labelField]}
          </CustomText>
          {item[typeField] && (
            <CustomText
              TextColor={COLORS.textPrimary}
              fontSize={FONT_SIZE.xs}
              fontWeight={FONT_WEIGHT.medium}>
              {item[typeField]}
            </CustomText>
          )}
        </Row>
      )}
      containerStyle={[styles.dropdownContainer, containerStyle]}
    />
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  dropdown: {
    height: SCREEN_HEIGHT * 0.055,
    borderColor: COLORS.borderSecondary,
    borderWidth: 1,
    borderRadius: RADIUS.lg,
    paddingHorizontal: SPACING.md,
    backgroundColor: COLORS.white,
    marginBottom:scale(12),
  },
  placeholder: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.textDark,
    fontWeight: FONT_WEIGHT.bold,
  },
  selectedText: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.textDark,
    fontWeight: FONT_WEIGHT.bold,
  },
  dropdownContainer: {
    borderRadius: RADIUS.lg,
    paddingVertical: SPACING.sm,
    backgroundColor: '#EFF9FF',
    marginTop: scale(8),
  },
  item: {
    padding: 14,
  },
});
