import { View, Text, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const SafeArea = ({
  children,
  backgroundColor = '#fff',
  edges = ['top', 'bottom', 'left', 'right'],
  statusBarStyle = 'dark-content',
  statusBarColor,
  style,
}) => {
  const insets = useSafeAreaInsets();

  const paddingTop = edges.includes('top') ? insets.top : 0;
  const paddingBottom = edges.includes('bottom') ? insets.bottom : 0;
  const paddingLeft = edges.includes('left') ? insets.left : 0;
  const paddingRight = edges.includes('right') ? insets.right : 0;
  return (
    <>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={statusBarColor || backgroundColor}
      ></StatusBar>

      <View
        style={[
          {
            flex: 1,
            paddingTop,
            paddingBottom,
            paddingLeft,
            paddingRight,
            backgroundColor: backgroundColor,
          },
          style,
        ]}
      >
        {children}
      </View>
    </>
  );
};

export default SafeArea;
