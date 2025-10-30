import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { COLORS, FONT_SIZE, FONT_WEIGHT } from '../../../constants';
import { verticalScale } from '../../../constants/responsive';

const CommonCheckBox = ({
  value = false,
  onValueChange = () => {},
  label = '',
  linkText = '',
  onLinkPress = () => {},
  containerStyle = {},
  textStyle = {},
  linkStyle = {},
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.container, containerStyle]}
      onPress={() => !disabled && onValueChange(!value)}
    >
      <CheckBox
        value={value}
        onValueChange={onValueChange}
        tintColors={{true: COLORS.primary, false: COLORS.borderSecondary}}
        disabled={disabled}
        style={styles.checkbox}
      />
      <Text style={[styles.label, textStyle]}>
        {label}{' '}
        {linkText ? (
          <Text style={[styles.link, linkStyle]} onPress={onLinkPress}>
            {linkText}
          </Text>
        ) : null}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginVertical: verticalScale(7),
  },
  checkbox: {
    marginRight: 16,
  },
  label: {
    flex: 1,
    color: COLORS.textSecondary,
    fontSize: FONT_SIZE.base,
  },
  link: {
    color: COLORS.primary,
    fontWeight:FONT_WEIGHT.semiBold,
  },
});

export default CommonCheckBox;
