import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import ErrorMessage from '../../common/ErrorMessage';
import {Row} from '../../layout';
import {COLORS} from '../../../constants';
import {DynamicIcon} from '../../common/Icon';
import {scale} from '../../../constants/responsive';

const CustomTextInput = ({
  label,
  placeholder,
  value,
  verifiedConfirm,
  verifiedConfirmColor,
  confirmIcon,
  onChangeText,
  secureTextEntry,
  keyboardType,
  maxLength,
  isRequired,
  icon,
  leftIcon,
  iconSource,
  iconType,
  leftIconSource,
  leftIconType,
  iconColor,
  leftIconColor,
  editable = true,
  handleIconClick,
  handleLeftIconClick,
  readonly,
  labelStyle,
  textInputStyle,
  placeholderTextColor = COLORS.textPrimary,
  labelContainerStyle,
  disableTextInputStyle,
  verifyOnPress,
  containerStyle,
  error,
  flex = 1,
}) => {
  return (
    <View style={[styles.container,{flex}, containerStyle]}>
      {/* Label + Verify Section */}
      <Row
        align="center"
        justify="space-between"
        style={[styles.labelContainer, labelContainerStyle]}>
        {label ? (
          <Text style={[styles.label, labelStyle]}>
            {label} {isRequired ? <Text style={styles.required}>*</Text> : ''}
          </Text>
        ) : null}

        {verifiedConfirm && (
          <TouchableOpacity
            onPress={verifyOnPress}
            style={styles.verifiedContainer}>
            <Text style={[styles.verifiedConfirm, verifiedConfirmColor]}>
              {verifiedConfirm}
            </Text>
            {confirmIcon && (
              <DynamicIcon
                type="FontAwesome"
                name={confirmIcon}
                size={scale(14)}
                color={COLORS.success}
              />
            )}
          </TouchableOpacity>
        )}
      </Row>

      {/* Input + Icons */}
      <View style={styles.inputContainer}>
        {leftIcon && (
          <TouchableOpacity
            onPress={handleLeftIconClick}
            style={[styles.iconContainer, {left: scale(12), right: undefined}]}>
            <DynamicIcon
              type={leftIconType || 'Feather'}
              name={leftIconSource}
              size={scale(20)}
              color={leftIconColor || COLORS.textPrimary}
            />
          </TouchableOpacity>
        )}

        <TextInput
          style={[
            styles.input,
            icon ? {paddingRight: scale(40)} : null,
            leftIcon ? {paddingLeft: scale(40)} : null,
            !editable && styles.disabledInput,
            error && styles.errorInput,
            textInputStyle,
            !editable && disableTextInputStyle,
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          maxLength={maxLength}
          editable={editable}
          placeholderTextColor={placeholderTextColor}
        />

        {icon && (
          <TouchableOpacity
            onPress={handleIconClick}
            style={styles.iconContainer}
            disabled={!handleIconClick}>
            <DynamicIcon
              type={iconType || 'Feather'}
              name={iconSource}
              size={scale(20)}
              color={iconColor || COLORS.textPrimary}
            />
          </TouchableOpacity>
        )}
      </View>

      {/* Error Message */}
      {error && <ErrorMessage errorMessage={error} />}
    </View>
  );
};

export default CustomTextInput;
