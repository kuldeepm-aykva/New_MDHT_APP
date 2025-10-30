import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { styles } from './Container.styles';

export const Container = ({
  children,
  scrollable = false,
  keyboardAware = false,
  padding = 'medium',
  backgroundColor = 'transparent',
  centered = false,
  style,
  contentContainerStyle,
  refreshControl,
  showsVerticalScrollIndicator = false,
}) => {
  const getPadding = () => {
    switch (padding) {
      case 'none':
        return 0;
      case 'small':
        return 8;
      case 'medium':
        return 16;
      case 'large':
        return 24;
      case 'xlarge':
        return 32;
      default:
        return typeof padding === 'number' ? padding : 16;
    }
  };
  const containerStyle = [
    styles.container,
    {
      padding: getPadding(),
      backgroundColor: backgroundColor,
    },
    centered && styles.centered,
    style,
  ];

  // Non-scrollable container
  if (!scrollable && !keyboardAware) {
    return <View style={containerStyle}>{children}</View>;
  }
  // Keyboard aware container
  if (keyboardAware && !scrollable) {
    return (
      <KeyboardAvoidingView
        style={containerStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        {children}
      </KeyboardAvoidingView>
    );
  }
  // Scrollable container
  if (scrollable && !keyboardAware) {
    return (
      <ScrollView
        style={[styles.container, style]}
        contentContainerStyle={[
          {
            padding: getPadding(),
            backgroundColor: backgroundColor,
          },
          centered && styles.centered,
          contentContainerStyle,
        ]}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        refreshControl={refreshControl}
      >
        {children}
      </ScrollView>
    );
  }

  // Scrollable and keyboard aware container
  return (
    <KeyboardAvoidingView
      style={[styles.container, { flex: 1 }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView
        style={[styles.container, style]}
        contentContainerStyle={[
          {
            padding: getPadding(),
            backgroundColor: backgroundColor,
          },
          centered && styles.centered,
          contentContainerStyle,
        ]}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        refreshControl={refreshControl}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Container;
