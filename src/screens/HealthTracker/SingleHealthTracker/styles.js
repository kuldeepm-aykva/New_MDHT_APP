import {StyleSheet, Image} from 'react-native';
import {COLORS, RADIUS} from '../../../constants';
import {scale, SCREEN_WIDTH, verticalScale} from '../../../constants/responsive';

export default styles = StyleSheet.create({
  main_card: {
    borderWidth: 0.5,
    padding: scale(13),
    borderColor: COLORS.borderSecondary,
    borderRadius: scale(15),
    marginBottom: verticalScale(20),
  },
  btn_container: {
    paddingVertical: verticalScale(12),
  },
  upload_file:{
    marginBottom:scale(20),
  },
  PdfList:{
    marginBottom:scale(20),
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
  UploadImagesContainer: {
    position: 'relative',
    marginBottom: scale(10),
  },
  CrossStyle: {
    position: 'absolute',
    top: -5,
    right: -5,
    zIndex: 10,
  },
  PdfContainer: {
    flex: 1,
    padding: scale(12),
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:1,
    borderColor:COLORS.borderSecondary,
  },
});
