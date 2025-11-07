import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CustomButton from '../../components/common/Button';
import {scale, verticalScale} from '../../constants/responsive';
import {COLORS, FONT_SIZE, FONT_WEIGHT, RADIUS} from '../../constants';
import {Row} from '../../components/layout';

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
        <Text style={Styles.info_cards_title}>{title}</Text>
        <Text style={Styles.info_cards_Subtitle}>{subtitle}</Text>
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
          btnStyle={{
            backgroundColor: COLORS.secondary,
            borderRadius: 13,
            paddingHorizontal: scale(30),
            borderWidth: 1,
            borderColor: COLORS.white,
          }}
        />
        <CustomButton
          text={currentStep === totalSteps - 1 ? 'Done' : 'Next'}
          size="small"
          onPress={onNext}
          btnStyle={{
            backgroundColor: COLORS.white,
            borderRadius: 13,
            paddingHorizontal: scale(30),
            borderWidth: 1,
            borderColor: COLORS.white,
          }}
          textStyle={{color: COLORS.primary}}
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
  info_cards_title: {
    fontSize: FONT_SIZE.base,
    color: COLORS.textDark,
    marginBottom: verticalScale(8),
    fontWeight: FONT_WEIGHT.semiBold,
  },
  info_cards_Subtitle: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.textPrimary,
    fontWeight: FONT_WEIGHT.regular,
    textAlign: 'left',
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