import {normalizeFont} from './responsive';

export const FONT_SIZE = {
  8: normalizeFont(8),
  xs: normalizeFont(10),
  sm: normalizeFont(12),
  base: normalizeFont(14),
  md: normalizeFont(16),
  lg: normalizeFont(18),
  xl: normalizeFont(20),
  xxl: normalizeFont(24),
  xxxl: normalizeFont(28),
  heading1: normalizeFont(32),
  heading2: normalizeFont(28),
  heading3: normalizeFont(24),
};

export const LINE_HEIGHT = {
  xs: normalizeFont(14),
  sm: normalizeFont(16),
  base: normalizeFont(20),
  md: normalizeFont(24),
  lg: normalizeFont(28),
  xl: normalizeFont(32),
  xxl: normalizeFont(36),
};

export const FONT_WEIGHT = {
  light: '300',
  regular: '400',
  medium: '500',
  semiBold: '600',
  bold: '700',
  extraBold: '800',
};

export const FONT_FAMILY = {
  primary: {},
};
