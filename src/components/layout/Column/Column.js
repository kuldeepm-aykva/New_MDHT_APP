import { View } from 'react-native';

export const Column = ({
  children,
  spacing = 0,
  align = 'stretch',
  justify = 'flex-start',
  style,
}) => {
  return (
    <View
      style={[
        {
          flexDirection: 'column',
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

export default Column;
