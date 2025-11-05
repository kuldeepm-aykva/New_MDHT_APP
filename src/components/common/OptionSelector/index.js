import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Row} from '../../layout';
import ErrorMessage from '../ErrorMessage';
import styles from './styles';

const OptionSelector = ({
  label,
  options = [],
  selected,
  onSelect,
  error,
  containerStyle,
  optionStyle,
  selectedOptionStyle,
  labelStyle,
  textStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}

      <Row
        align="center"
        justify="space-between"
        style={styles.optionsContainer}>
        {options.map(option => (
          <TouchableOpacity
            key={option}
            activeOpacity={0.7}
            style={[
              styles.optionButton,
              optionStyle,
              error && !selected && styles.errorBorder,
              selected === option && [styles.selectedButton, selectedOptionStyle],
            ]}
            onPress={() => onSelect(option)}>
            <Text
              style={[
                styles.optionText,
                textStyle,
                selected === option && styles.selectedText,
              ]}>
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </Row>

      {error ? <ErrorMessage errorMessage={error} /> : null}
    </View>
  );
};

export default OptionSelector;

