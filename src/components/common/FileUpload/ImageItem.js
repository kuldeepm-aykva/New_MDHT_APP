import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import { COLORS } from '../../../constants';
import { scale } from '../../../constants/responsive';
import CircularIcon from '../CircularIcon';

const ImageItem = ({file, onRemove}) => {
  return (
    <View style={styles.ImageUploadContainer}>
      <View style={styles.Image_Container}>
        <Image source={{uri: file.uri}} style={styles.upload_images} />
      </View>

      <CircularIcon
        name="cross"
        type="Entypo"
        iconColor={COLORS.white}
        variant="outline"
        size={scale(14)}
        Radius="full"
        p={3}
        BgColor={COLORS.error}
        BorderColor={COLORS.transparent}
        containerStyle={styles.CrossStyle}
        onPress={onRemove}
      />
    </View>
  );
};

export default ImageItem;
