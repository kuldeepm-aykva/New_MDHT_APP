import {StyleSheet} from 'react-native';
import {scale} from '../../../constants/responsive';
import {COLORS, FONT_SIZE, FONT_WEIGHT, RADIUS} from '../../../constants';

export default styles = StyleSheet.create({
  container: {
    marginTop: scale(10),
  },
  label: {
    color: COLORS.textPrimary,
    fontSize: FONT_SIZE.sm,
    fontWeight: FONT_WEIGHT.medium,
    marginBottom: scale(5),
  },
  optionsContainer: {
    marginTop: scale(5),
    gap: scale(10),
  },
  optionButton: {
    flex: 1,
    padding: scale(11),
    borderWidth: 1,
    borderColor: 'rgba(110, 110, 110, 0.25)',
    borderRadius: RADIUS.md,
    textAlign: 'center',
  },
  optionText: {
    color: COLORS.textPrimary,
    textAlign: 'center',
    fontWeight: FONT_WEIGHT.light,
    fontSize: FONT_SIZE.sm,
  },
  selectedButton: {
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
  selectedText: {
    color: COLORS.primary,
    fontWeight: FONT_WEIGHT.regular,
  },
  errorBorder: {
    borderColor: COLORS.error || 'red',
  },
});
