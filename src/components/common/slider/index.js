import {
  TouchableOpacity,
  Dimensions,
  View,
  StyleSheet,
  Animated,
  PanResponder,
} from 'react-native';
import {useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../CustomText/CustomText';
import {DynamicIcon} from '../Icon';
import {Row} from '../../layout';
import {COLORS, FONT_SIZE, FONT_WEIGHT, RADIUS} from '../../../constants';
import {scale, verticalScale} from '../../../constants/responsive';

const {width} = Dimensions.get('window');

const SeveritySlider = ({
  initialValue = 0,
  minValue = 0,
  maxValue = 10,
  onValueChange,
  label = 'Severity',
  labels = ['Mild', 'Moderate', 'Severe'],
  colors = ['#6CC884', '#FFD242', '#FF6B7A'],
  unsetColor = '#D1D5DB',
  showValueBox = true,
  containerStyle,
  labelStyle,
  trackStyle,
  thumbStyle,
  valueBoxStyle,
  labelTextStyle,
  // new props
  onInfoPress,
  onSkipPress,
  showSkip = true,
  skipLabel ,
  thumbSize = scale(25),
  trackHeight = 8,
  gapPadding = scale(12), // small space between track edge and thumb
}) => {
  const [value, setValue] = useState(initialValue);
  const sliderWidth = width - scale(90) - gapPadding * 2;
  const pan = useRef(
    new Animated.Value(getPositionFromValue(initialValue)),
  ).current;

  // Get color based on value
  function getColor(val) {
    if (val === 0) return unsetColor;
    const pct = (val - minValue) / (maxValue - minValue);
    if (pct <= 0.33) return colors[0];
    if (pct <= 0.66) return colors[1];
    return colors[2];
  }

  // Convert value → position
  function getPositionFromValue(val) {
    const clampedVal = Math.max(minValue, Math.min(val, maxValue));
    return ((clampedVal - minValue) / (maxValue - minValue)) * sliderWidth;
  }

  // Convert position → value
  function getValueFromPosition(pos) {
    const clampedPos = Math.max(0, Math.min(pos, sliderWidth));
    const newValue =
      Math.round((clampedPos / sliderWidth) * (maxValue - minValue)) + minValue;
    return newValue;
  }

  // Pan responder
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: e => {
        const locationX = e.nativeEvent.locationX - gapPadding;
        const newValue = getValueFromPosition(locationX);
        setValue(newValue);
        onValueChange?.(newValue);
        Animated.spring(pan, {
          toValue: getPositionFromValue(newValue),
          useNativeDriver: false,
          speed: 20,
          bounciness: 8,
        }).start();
      },
      onPanResponderMove: (e, gesture) => {
        const newPos = gesture.moveX - gapPadding * 2;
        const newValue = getValueFromPosition(newPos);
        setValue(newValue);
        onValueChange?.(newValue);
        pan.setValue(getPositionFromValue(newValue));
      },
    }),
  ).current;

  const currentColor = getColor(value);

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Header Row */}
      <Row align="center" justify="space-between">
        <Row align="center" spacing={scale(6)}>
          {onInfoPress && (
            <TouchableOpacity onPress={onInfoPress}>
              <DynamicIcon name="info" type="Feather" color={COLORS.primary} />
            </TouchableOpacity>
          )}

          {label && (
            <CustomText
              TextColor={COLORS.black}
              fontSize={FONT_SIZE.sm}
              fontWeight={FONT_WEIGHT.medium}
              style={labelStyle}>
              {label}
            </CustomText>
          )}
        </Row>

        {showSkip && (
          <TouchableOpacity onPress={onSkipPress}>
            <CustomText
              TextColor={COLORS.textPrimary}
              fontSize={FONT_SIZE.sm}
              fontWeight={FONT_WEIGHT.semiBold}>
              {skipLabel}
            </CustomText>
          </TouchableOpacity>
        )}
      </Row>

      {/* Slider */}
      <View style={styles.sliderWrapper}>
        {/* Value Box */}
        {showValueBox && value > 0 && (
          <Animated.View
            style={[
              styles.valueBox,
              {
                borderColor: currentColor,
                transform: [{translateX: pan}],
              },
              valueBoxStyle,
            ]}>
            <CustomText
              fontSize={FONT_SIZE.base}
              TextColor={currentColor}
              fontWeight={FONT_WEIGHT.semiBold}>
              {value.toString().padStart(2, '0')}
            </CustomText>
            <View style={[styles.arrow, {borderTopColor: currentColor}]} />
          </Animated.View>
        )}

        {/* Track */}
        <View
          style={[
            styles.trackContainer,
            {paddingHorizontal: gapPadding},
            trackStyle,
          ]}
          {...panResponder.panHandlers}>
          <LinearGradient
            colors={colors}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={[
              styles.gradientTrack,
              {height: trackHeight, borderRadius: trackHeight / 2},
            ]}
          />

          {/* Thumb */}
          <Animated.View
            style={[styles.thumbContainer, {transform: [{translateX: pan}]}]}>
            <View
              style={[
                styles.thumb,
                {
                  width: thumbSize,
                  height: thumbSize,
                  borderRadius: thumbSize / 2,
                  borderColor: currentColor,
                  backgroundColor: COLORS.white,
                },
                thumbStyle,
              ]}
            />
          </Animated.View>
        </View>

        {/* Labels */}
        {labels?.length > 0 && (
          <Row align="center" justify="space-between" style={styles.labelRow}>
            {labels.map((label, index) => (
              <CustomText
                key={index}
                fontSize={FONT_SIZE.sm}
                fontWeight={FONT_WEIGHT.regular}
                TextColor={COLORS.textPrimary}
                style={labelTextStyle}>
                {label}
              </CustomText>
            ))}
          </Row>
        )}
      </View>
    </View>
  );
};

export default SeveritySlider;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    paddingHorizontal: verticalScale(15),
    paddingVertical: scale(15),
    marginVertical: 10,
    borderWidth: 0.4,
    borderColor: COLORS.borderSecondary,
  },
  sliderWrapper: {
    justifyContent: 'center',
    marginTop: verticalScale(60),
  },
  trackContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  gradientTrack: {
    width: '100%',
  },
  thumbContainer: {
    position: 'absolute',
    top: -scale(10),
    left: 0,
  },
  thumb: {
    borderWidth: scale(3),
  },
  valueBox: {
    position: 'absolute',
    top: -verticalScale(55),
    left: -scale(10),
    backgroundColor: COLORS.white,
    borderWidth: 1.2,
    borderRadius: scale(8),
    paddingHorizontal: verticalScale(10),
    paddingVertical: scale(8),
    alignItems: 'center',
    zIndex: 10,
  },
  arrow: {
    position: 'absolute',
    bottom: -8,
    right: '40%',
    marginLeft: -5,
    width: 10,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  labelRow: {
    marginTop: verticalScale(25),
    paddingHorizontal: 4,
  },
});
