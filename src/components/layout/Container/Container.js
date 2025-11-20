import {View, KeyboardAvoidingView, ScrollView} from 'react-native';
import {styles} from './Container.styles';
import {getMarginStyle, getPaddingStyle} from '../../../utils/styleHelpers';
import {SPACING} from '../../../constants';

// Your helper imports

export const Container = ({
  children,

  // behavior
  scrollable = false,
  keyboardAware = false,
  centered = false,
  flex = 1,

  // spacing helpers
  p,
  px = 16,
  py = 16,
  pt,
  pb,
  pl,
  pr,

  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,

  backgroundColor = 'transparent',
  style,
  contentContainerStyle,
  refreshControl,
  showsVerticalScrollIndicator = false,
}) => {
  // FINAL FULL PADDING STYLE
  const paddingStyle = getPaddingStyle({
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
  });

  // FINAL FULL MARGIN STYLE
  const marginStyle = getMarginStyle({
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
  });

  // MAIN OUTER STYLE
  const containerStyle = [
    {flex, backgroundColor},
    paddingStyle,
    marginStyle,
    centered && styles.centered,
    style,
  ];

  // SCROLLVIEW INNER CONTENT STYLE
  const scrollContentStyle = [
    paddingStyle,
    centered && styles.centered,
    contentContainerStyle,
  ];

  // ------------ NON SCROLLABLE + NON KEYBOARD -------------
  if (!scrollable && !keyboardAware) {
    return <View style={containerStyle}>{children}</View>;
  }

  // ------------ KEYBOARD ONLY -------------
  if (keyboardAware && !scrollable) {
    return (
      <KeyboardAvoidingView
        style={containerStyle}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
        {children}
      </KeyboardAvoidingView>
    );
  }

  // ------------ SCROLLABLE ONLY -------------
  if (scrollable && !keyboardAware) {
    return (
      <ScrollView
        style={[{flex: flex ?? 1, backgroundColor}, style]}
        contentContainerStyle={scrollContentStyle}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        refreshControl={refreshControl}>
        {children}
      </ScrollView>
    );
  }

  // ------------ SCROLLABLE + KEYBOARD AWARE -------------
  return (
    <KeyboardAvoidingView
      style={[{flex: 1, backgroundColor}]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
      <ScrollView
        style={[{flex: 1, backgroundColor}, style]}
        contentContainerStyle={scrollContentStyle}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        refreshControl={refreshControl}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Container;
