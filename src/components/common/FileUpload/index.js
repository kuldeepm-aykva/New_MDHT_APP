import {View, Image, Text} from 'react-native';
import styles from './styles';
import {Column, Row} from '../../layout';
import CustomText from '../CustomText/CustomText';
import {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  RADIUS,
  SPACING,
} from '../../../constants';
import PdfItem from './PdfItem';
import ImageItem from './ImageItem';
import CustomButton from '../Button';
import {scale} from '../../../constants/responsive';

const FileUploadSection = ({uploads, setUploads, onUpload}) => {
  return (
    <View style={[styles.mainCard]}>
      {/* ----- Header ----- */}
      <Row align="center" justify="space-between" style={styles.upload_header}>
        <CustomText
          TextColor={COLORS.black}
          fontWeight={FONT_WEIGHT.semiBold}
          fontSize={FONT_SIZE.base}>
          Upload / Attach
        </CustomText>

        <CustomButton
          text="Upload Files"
          variant="outline"
          BorderColor={COLORS.borderSecondary}
          CustomRadius={RADIUS.lg}
          size="small"
          icon="download"
          iconSize={scale(14)}
          icontype="Feather"
          iconcolor={COLORS.primary}
          onPress={onUpload}
        />
      </Row>

      {/* ----- PDF List ----- */}
      {uploads.length > 0 ? (
        <Column spacing={scale(10)} style={styles.PdfList}>
          {uploads
            .filter(f => !f.isImage)
            .map((file, index) => (
              <PdfItem
                key={index}
                file={file}
                onRemove={() =>
                  setUploads(prev => prev.filter((_, i) => i !== index))
                }
              />
            ))}
        </Column>
      ) : (
        ''
      )}

      {/* ----- Image Grid ----- */}
      <Row style={{flexWrap: 'wrap'}} spacing={scale(10)}>
        {uploads
          .filter(f => f.isImage)
          .map((file, index) => (
            <ImageItem
              key={index}
              file={file}
              onRemove={() =>
                setUploads(prev => prev.filter((_, i) => i !== index))
              }
            />
          ))}
      </Row>
      
      <CustomButton
        text="Add Comments for Care Team"
        variant="outline"
        textAlign="left"
        icon="plus"
        mt={SPACING.md}
        btnStyle={{
          justifyContent: 'flex-start',
        }}
        iconSize={scale(16)}
        iconcolor={COLORS.textPrimary}
        icontype="Entypo"
        BorderColor={COLORS.borderSecondary}
        TextColor={COLORS.textPrimary}
        fontSize="sm"
        size="small"
        textStyle={{
          textAlign: 'start',
        }}
        py={15}
        CustomRadius={RADIUS.lg}
      />
    </View>
  );
};

export default FileUploadSection;
