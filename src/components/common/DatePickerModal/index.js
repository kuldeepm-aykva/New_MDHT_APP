import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DateTimePicker, {useDefaultStyles} from 'react-native-ui-datepicker';
import CustomModal from '../Modal';
import {COLORS, FONT_SIZE, FONT_WEIGHT, RADIUS} from '../../../constants';
import Styles from './styles';
import {scale, verticalScale} from '../../../constants/responsive';
import {DynamicIcon} from '../Icon';
import dayjs from 'dayjs';
import commonstyles from '../../../constants/common';

const DatePickerModal = ({
  visible,
  onClose,
  date = null,
  onDateChange,
  title = 'Select Date',
}) => {
  const [selectedDate, setSelectedDate] = useState(
    date ? dayjs(date) : dayjs(),
  );
  const defaultStyles = useDefaultStyles();

  useEffect(() => {
    if (date) {
      const parsedDate = dayjs(date);
      if (parsedDate.isValid()) {
        setSelectedDate(parsedDate);
      }
    }
  }, [date]);

  const handleClose = () => {
    onClose && onClose();
  };

  const handleDateSelect = params => {
    if (params?.date) {
      const newDate = dayjs(params.date);
      if (newDate.isValid()) {
        setSelectedDate(newDate);
        onDateChange && onDateChange(newDate.toDate());
        handleClose();
      }
    }
  };

  return (
    <CustomModal
      modalContainerStyle={{padding: 0, width: '90%'}}
      visible={visible}
      onClose={handleClose}>
      <View>
        {/* Header */}
        <View style={Styles.dateModalHeader}>
          <Text style={Styles.dateModalTitle}>{title}</Text>
        </View>

        {/* Date Picker */}
        <DateTimePicker
          mode="single"
          date={selectedDate.toDate()}
          onChange={handleDateSelect}
          maximumDate={dayjs().toDate()}
          selectedItemColor={COLORS.primary}
          navigationPosition="right"
          headerButtonColor={COLORS.primary}
          displayFullDays
          styles={{
            ...defaultStyles,

            selected: {
              backgroundColor: COLORS.primary,
              borderRadius: RADIUS.sm,
            },
            selected_label: {
              color: COLORS.white,
            },

            day_label: {color: COLORS.textPrimary},
            month_label: {color: COLORS.textPrimary},
            year_label: {color: COLORS.textPrimary},
            month_selector_label: {
              color: COLORS.textDark,
              fontSize: FONT_SIZE.base,
              fontWeight: FONT_WEIGHT.regular,
            },
            year_selector_label: {
              color: COLORS.textDark,
              fontSize: FONT_SIZE.base,
              fontWeight: FONT_WEIGHT.regular,
            },

            header: {
              backgroundColor: '#F5F6FA',
              paddingHorizontal: scale(12),
              paddingVertical: verticalScale(8),
              borderRadius: RADIUS.lg,
              marginBottom: verticalScale(10),
            },
          }}
          components={{
            IconPrev: (
              <DynamicIcon
                type="Feather"
                name="chevron-left"
                size={scale(16)}
                color={COLORS.primary}
              />
            ),
            IconNext: (
              <DynamicIcon
                type="Feather"
                name="chevron-right"
                size={scale(16)}
                color={COLORS.primary}
              />
            ),
          }}
        />
      </View>

      {/* Close button */}
      <TouchableOpacity
        onPress={handleClose}
        style={[Styles.close_btn_container]}>
        <DynamicIcon
          type="Ionicons"
          name="close"
          size={scale(16)}
          color={COLORS.textPrimary}
        />
      </TouchableOpacity>
    </CustomModal>
  );
};

export default DatePickerModal;
