import { View, Text } from 'react-native';
import React from 'react';

export const Row = ({
  children,
  spacing = 0,
  align = 'center',
  justify = 'flex-start',
  style,
}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          alignItems: align,
          justifyContent: justify,
          gap: spacing,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Row;
