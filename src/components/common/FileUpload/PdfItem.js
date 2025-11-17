import { COLORS, FONT_SIZE, FONT_WEIGHT } from '../../../constants';
import { scale } from '../../../constants/responsive';
import { Row } from '../../layout';
import CircularIcon from '../CircularIcon';
import CustomText from '../CustomText/CustomText';
import { DynamicIcon } from '../Icon';
import styles from './styles';

const PdfItem = ({file, onRemove}) => {
  return (
    <Row
      align="center"
      justify="space-between"
      style={styles.PdfContainer}>
      <Row align="center" spacing={scale(10)} style={{flex: 1}}>
        <DynamicIcon
          name="file-pdf"
          color={COLORS.error}
          size={scale(18)}
          type="FontAwesome5"
        />
        <CustomText
          fontWeight={FONT_WEIGHT.semiBold}
          fontSize={FONT_SIZE.sm}
          TextColor={COLORS.black}
          numberOfLines={1}
          style={{flex: 1}}>
          {file.name}
        </CustomText>
      </Row>

      <CircularIcon
        name="close"
        type="Ionicons"
        iconColor={COLORS.textPrimary}
        size={scale(18)}
        variant="ghost"
        onPress={onRemove}
      />
    </Row>
  );
};

export default PdfItem;
