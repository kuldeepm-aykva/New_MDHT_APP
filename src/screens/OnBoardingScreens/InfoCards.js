import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CustomButton from '../../components/common/Button';
import {scale, verticalScale} from '../../constants/responsive';
import {COLORS, FONT_SIZE, FONT_WEIGHT, RADIUS, SPACING} from '../../constants';
import {Row} from '../../components/layout';
import CustomText from '../../components/common/CustomText/CustomText';

const InfoCards = ({
  title,
  subtitle,
  currentStep,
  totalSteps,
  onSkip,
  onNext,
  onDotPress,
}) => {
  return (
    <View style={[Styles.info_container]}>
      <View style={Styles.info_cards}>
        <CustomText
          fontSize={FONT_SIZE.base}
          TextColor={COLORS.textDark}
          mb={SPACING.sm}
          fontWeight={FONT_WEIGHT.semiBold}>
          {title}
        </CustomText>
        <CustomText
          fontSize={FONT_SIZE.sm}
          TextColor={COLORS.textPrimary}
          fontWeight={FONT_WEIGHT.regular}>
          {subtitle}
        </CustomText>
      </View>

      <Row align="center" justify="center" style={Styles.dotsContainer}>
        {Array.from({length: totalSteps}).map((_, index) => (
          <TouchableOpacity key={index} onPress={() => onDotPress(index)}>
            <View
              style={[
                Styles.dot,
                currentStep === index ? Styles.active_dot : null,
              ]}
            />
          </TouchableOpacity>
        ))}
      </Row>

      <Row align="center" justify="space-around" spacing={40}>
        <CustomButton
          text="Skip"
          size="small"
          onPress={onSkip}
          BgColor={COLORS.secondary}
          CustomRadius={RADIUS.lg}
          BorderColor={COLORS.white}
          BorderWidth={1}
          px={SPACING.xl}
        />
        <CustomButton
          text={currentStep === totalSteps - 1 ? 'Done' : 'Next'}
          size="small"
          onPress={onNext}
          BgColor={COLORS.white}
          CustomRadius={RADIUS.lg}
          BorderColor={COLORS.white}
          px={SPACING.xl}
          BorderWidth={1}
          TextColor={COLORS.primary}
        />
      </Row>
    </View>
  );
};

export default InfoCards;

const Styles = StyleSheet.create({
  info_container: {
    zIndex: 10,
    position: 'absolute',
    justifyContent: 'center',
    paddingHorizontal: scale(13),
    paddingVertical: verticalScale(30),
    alignItems: 'center',
    bottom: 0,
  },
  info_cards: {
    backgroundColor: COLORS.white,
    borderRadius: scale(16),
    padding: scale(20),
  },
  dotsContainer: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.lg,
    paddingVertical: verticalScale(4),
    paddingHorizontal: scale(4),
    marginVertical: verticalScale(20),
  },
  dot: {
    width: scale(6),
    height: scale(6),
    borderRadius: RADIUS.full,
    marginHorizontal: scale(3),
    backgroundColor: '#AFAFAF',
  },
  active_dot: {
    backgroundColor: COLORS.primary,
  },
});
