import React from 'react';
import {View, StyleSheet} from 'react-native';
import { scale } from '../../../constants/responsive';

/**
 * InputRow - Responsive input field layout component
 * 
 * @param {Array} children - Input components to be arranged
 * @param {Array} flexRatios - Flex ratios for each input (e.g., [1, 2, 3] or [6, 3, 3])
 * @param {number} spacing - Space between inputs (default: 12)
 * @param {object} style - Additional container styles
 * 
 * Example Usage:
 * <InputRow flexRatios={[1, 1, 1]} spacing={12}>
 *   <CustomTextInput ... />
 *   <CustomTextInput ... />
 *   <CustomTextInput ... />
 * </InputRow>
 * 
 * Or with custom ratios:
 * <InputRow flexRatios={[6, 3, 3]} spacing={8}>
 *   <CustomTextInput ... />
 *   <CustomTextInput ... />
 *   <CustomTextInput ... />
 * </InputRow>
 */
const InputRow = ({
  children,
  flexRatios = [],
  spacing = 12,
  style,
}) => {
  const childrenArray = React.Children.toArray(children);
  const numChildren = childrenArray.length;

  // If no flexRatios provided, divide equally
  const ratios = flexRatios.length === numChildren
    ? flexRatios
    : Array(numChildren).fill(1);

  return (
    <View style={[styles.container, style]}>
      {childrenArray.map((child, index) => (
        <View
          key={index}
          style={[
            {flex: ratios[index]},
            index < numChildren - 1 && {marginRight: scale(spacing)},
          ]}>
          {React.cloneElement(child, {
            containerStyle: {
              marginTop: 0, // Remove individual margins
              ...child.props.containerStyle,
            },
          })}
        </View>
      ))}
    </View>
  );
};

export default InputRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});