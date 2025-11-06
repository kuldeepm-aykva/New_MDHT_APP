import React from 'react';
import {CountryPicker} from 'react-native-country-codes-picker';
import {COLORS, FONT_SIZE} from '../../../constants';
import {scale, verticalScale} from '../../../constants/responsive';

const CountryPickerModal = ({
  isPickerVisible,
  setIsPickerVisible,
  selectedCode,
  setSelectedCode,
}) => {
  return (
    <CountryPicker
      show={isPickerVisible}
      lang="en"
      inputPlaceholder="Search Country"
      inputPlaceholderTextColor={COLORS.textPrimary}
      onBackdropPress={() => setIsPickerVisible(false)}
      pickerButtonOnPress={item => {
        setSelectedCode({
          value: item.dial_code,
          flag: item.flag,
          label: item.name?.en || item.name,
          iso_code: item.code,
        });
        setIsPickerVisible(false);
      }}
      style={{
        modal: {
          height: '62%',
          bottom: 0,
          position: 'absolute',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.white,
          paddingVertical: verticalScale(30),
          paddingHorizontal: scale(12),
        },
        backdrop: {
          backgroundColor: 'rgba(0,0,0,0.4)',
        },
        countryButtonStyles: {
          paddingVertical: 10,
          borderWidth: 0.4,
          backgroundColor: '#fff',
          borderColor: COLORS.secondary,
          marginVertical: verticalScale(4),
        },
        countryName: {
          fontSize: FONT_SIZE.base,
          color: '#1e1e1e',
        },
        dialCode: {
          fontSize: FONT_SIZE.base,
          color: '#1e1e1e',
        },
        flag: {
          fontSize: FONT_SIZE.base,
          color: COLORS.white,
        },
      }}
    />
  );
};

export default CountryPickerModal;
