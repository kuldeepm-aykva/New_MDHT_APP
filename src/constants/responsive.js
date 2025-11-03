import { Dimensions, PixelRatio, Platform } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// 📱 Base sizes (iPhone 11 Pro as reference)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

// Scale for width-based sizing
export const scale = (size) => (SCREEN_WIDTH / BASE_WIDTH) * size;

// Scale for height-based sizing
export const verticalScale = (size) => (SCREEN_HEIGHT / BASE_HEIGHT) * size;

// Font scaling (keeps text readable on all screens)
export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

// Normalize font with PixelRatio (extra safe for different DPIs)
export const normalizeFont = (size) =>
  Math.round(PixelRatio.roundToNearestPixel(moderateScale(size)));

// Width percentage to pixels
export const wp = (percentage) => {
  const value = (percentage * SCREEN_WIDTH) / 100;
  return Math.round(value);
};

// Height percentage to pixels
export const hp = (percentage) => {
  const value = (percentage * SCREEN_HEIGHT) / 100;
  return Math.round(value);
};

// Export screen dimensions
export const SCREEN = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
};

// 🔹 Device Breakpoints
export const DEVICE = {
  isSmallPhone: SCREEN_WIDTH < 360,
  isLargePhone: SCREEN_WIDTH >= 360 && SCREEN_WIDTH < 768,
  isTablet: SCREEN_WIDTH >= 768,
};

export const isTablet = () => {
  const aspectRatio = SCREEN_WIDTH / SCREEN_HEIGHT;
  const isLargeScreen = SCREEN_HEIGHT >= 990 || SCREEN_WIDTH >= 900;
  if (Platform.OS === "ios") {
    return Platform.isPad || (aspectRatio < 1.6 && isLargeScreen);
  } else if (Platform.OS === "android") {
    return isLargeScreen && (aspectRatio <= 1.6 || SCREEN_WIDTH >= 600);
  }
  return false;
};

// 🎯 Responsive value selector
export const responsiveSize = (small, medium, large) => {
  if (DEVICE.isSmallPhone) return small;
  if (DEVICE.isTablet) return large;
  return medium;
};