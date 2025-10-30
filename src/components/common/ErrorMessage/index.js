import {Text, View} from 'react-native';
import React from 'react';
import Styles from './Styles';
import {DynamicIcon} from '../Icon';
const ErrorMessage = ({errorMessage, error_container_style, text_style}) => {
  return (
    <View style={[Styles.error_container, error_container_style]}>
      <DynamicIcon type="Feather" name="info" style={[Styles.icon]} />
      <Text style={[Styles.error, text_style]}>{errorMessage}</Text>
    </View>
  );
};

export default ErrorMessage;
