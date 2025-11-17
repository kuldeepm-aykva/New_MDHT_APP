import {StyleSheet} from 'react-native';
import {scale, SCREEN_WIDTH, verticalScale} from '../../../constants/responsive';
import {COLORS, RADIUS} from '../../../constants';

export default StyleSheet.create({
  mainCard: {
    borderWidth: 0.5,
    padding: scale(13),
    borderColor: COLORS.borderSecondary,
    borderRadius: scale(15),
    marginBottom: verticalScale(20),
  },

  upload_header: {
    marginBottom: scale(20),
  },

  PdfList: {
    marginBottom: scale(20),
  },

  PdfContainer: {
    flex: 1,
    padding: scale(12),
    borderRadius: RADIUS.md,
    borderWidth: 1,
    borderColor: COLORS.borderSecondary,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ImageUploadContainer: {
    position: 'relative',
    marginBottom: scale(10),
  },

  Image_Container: {
    width: SCREEN_WIDTH * 0.18,
    height: scale(64),
  },

  upload_images: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: RADIUS.sm,
  },

  CrossStyle: {
    position: 'absolute',
    top: -5,
    right: -5,
    zIndex: 10,
  },
});
