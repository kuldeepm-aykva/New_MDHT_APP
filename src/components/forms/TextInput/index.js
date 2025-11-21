import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import ErrorMessage from '../../common/ErrorMessage';
import {Row} from '../../layout';
import {COLORS} from '../../../constants';
import {DynamicIcon} from '../../common/Icon';
import {scale} from '../../../constants/responsive';
import {
  getFontSizeStyle,
  getRadiusStyle,
  getTextVariantStyle,
  getVariantStyle,
} from '../../../utils/styleHelpers';
// import {
//   getTextVariantStyle,
//   getRadiusStyle,
//   getFontSizeStyle,
//   getVariantStyle,
// } from '../../../constants/common';

const CustomTextInput = ({
  label,
  placeholder,
  value,
  verifiedConfirm,
  verifiedConfirmStyle,
  confirmIcon,
  verifiedIcontype,
  verifiedIconColor,
  verifiedIconSize,
  verifiedConfirmContainerStyle,
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
  IconSize,
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
  RightIconContainerStyle,
  fontSize,
  TextColor,
  BorderColor,
  BgColor,
  CustomRadius,
  variant,
  selected = false,
  Radius,
}) => {
  return (
    <View style={[styles.container, {flex}, containerStyle]}>
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
          <TouchableOpacity onPress={verifyOnPress}>
            <Row
              align="center"
              justify="center"
              style={[verifiedConfirmContainerStyle]}
              spacing={scale(5)}>
              <Text style={[styles.verifiedConfirm, verifiedConfirmStyle]}>
                {verifiedConfirm}
              </Text>
              {confirmIcon && (
                <DynamicIcon
                  type={verifiedIcontype}
                  name={confirmIcon}
                  size={scale(verifiedIconSize || 14)}
                  color={verifiedIconColor || COLORS.success}
                />
              )}
            </Row>
          </TouchableOpacity>
        )}
      </Row>

      {/* Input + Icons */}
      <Row align="center" justify="space-between" style={styles.inputContainer}>
        {leftIcon && (
          <TouchableOpacity
            onPress={handleLeftIconClick}
            style={[styles.iconContainer, {left: scale(12)}]}>
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
            getRadiusStyle({Radius, CustomRadius}),
            getFontSizeStyle({fontSize}),
            getTextVariantStyle({variant, selected, TextColor}),
            getVariantStyle({variant, selected, BorderColor, BgColor}),
            icon ? {paddingRight: scale(40)} : null,
            leftIcon ? {paddingLeft: scale(40)} : null,
            !editable && styles.disabledInput,
            error && styles.errorInput,
            textInputStyle,
            !editable && disableTextInputStyle,
          ]}
          placeholder={placeholder}
          readOnly={readonly}
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
            style={[styles.RightIconContainer, RightIconContainerStyle]}
            disabled={!handleIconClick}>
            <DynamicIcon
              type={iconType || 'Feather'}
              name={iconSource}
              size={scale(IconSize | 15)}
              color={iconColor || COLORS.textPrimary}
            />
          </TouchableOpacity>
        )}
      </Row>

      {/* Error Message */}
      {error && <ErrorMessage errorMessage={error} />}
    </View>
  );
};

export default CustomTextInput;
