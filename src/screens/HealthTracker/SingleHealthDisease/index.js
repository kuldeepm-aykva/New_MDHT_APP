import {View, Text} from 'react-native';
import {useState} from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import {ROUTES} from '../../../navigation/routes';
import {Column, Container, Row, SafeArea} from '../../../components/layout';
import {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
  RADIUS,
  SPACING,
} from '../../../constants';
import CustomText from '../../../components/common/CustomText/CustomText';
import CustomButton from '../../../components/common/Button';
import {scale} from '../../../constants/responsive';
import styles from './style';
import {DynamicIcon} from '../../../components/common/Icon';
import CircularIcon from '../../../components/common/CircularIcon';
import {ICON_SIZE} from '../../../constants/spacing';
import CustomModal from '../../../components/common/Modal';

const SingleHealthDisease = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [curedSuccessModal, setcuredSuccessModal] = useState(true);
  return (
    <>
      <Header
        title="My Health Records"
        SearchPress={() => {
          navigation.navigate(ROUTES.DashboardSearch);
        }}
        NotificationPress
      />
      <SafeArea style={{paddingTop: 0}}>
        <Container flex={0}>
          <Row align="center" justify="space-between">
            <CustomText
              BgColor={COLORS.transparent}
              TextColor={COLORS.black}
              fontSize={FONT_SIZE.base}
              fontWeight={FONT_WEIGHT.semiBold}>
              Acyanotic Heart Disease
            </CustomText>
            <CustomButton
              text="New Record"
              variant="outline"
              icon="plus"
              iconSize={scale(15)}
              iconcolor={COLORS.textPrimary}
              icontype="Entypo"
              size="small"
              TextColor={COLORS.textPrimary}
              fontSize="sm"
              BorderColor={COLORS.borderColor}
              CustomRadius={8}
              onPress={() => {
                navigation.navigate(ROUTES.AddHealthTrackerCondition);
              }}
            />
          </Row>
        </Container>
        <Container scrollable py={0}>
          <Column style={[styles.cardContainer]}>
            {Array.from({length: 7}).map((_, i) => (
              <Row
                align="center"
                style={{marginBottom: 20}}
                justify="space-between">
                <Column>
                  <CustomText
                    fontSize={FONT_SIZE.sm}
                    TextColor={COLORS.textPrimary}>
                    Updated : 15 Jan, 2024 | 09:21 pm
                  </CustomText>
                  <CustomText
                    fontWeight={FONT_WEIGHT.semiBold}
                    fontSize={FONT_SIZE.base}
                    mt={SPACING.xs}
                    TextColor={COLORS.black}>
                    Acyanotic Heart Disease
                  </CustomText>
                </Column>
                <Row align="center" spacing={scale(10)}>
                  <CircularIcon
                    name="edit"
                    type="MaterialIcons"
                    iconColor={COLORS.primary}
                    variant="outline"
                    BgColor="#1492E61A"
                    Radius="full"
                    size={scale(14)}
                    p={8}
                    BorderColor={COLORS.transparent}
                    onPress={() => {
                      setModalType('edit');
                      setModalVisible(true);
                    }}
                  />
                  <CircularIcon
                    name="delete"
                    type="MaterialIcons"
                    iconColor={COLORS.error}
                    variant="outline"
                    BgColor="#FF40401A"
                    Radius="full"
                    size={scale(14)}
                    p={8}
                    BorderColor={COLORS.transparent}
                    onPress={() => {
                      setModalType('delete');
                      setModalVisible(true);
                    }}
                  />
                </Row>
              </Row>
            ))}
          </Column>
        </Container>
        <Container flex={0}>
          <Row align="center" spacing={SPACING.sm} justify="space-between">
            <CustomButton
              text="Mark As Cured"
              variant="outline"
              TextColor={COLORS.success}
              py={11}
              CustomRadius={RADIUS.lg}
              icon="checkmark-circle-sharp"
              iconcolor={COLORS.success}
              iconSize={ICON_SIZE.sm}
              icontype="Ionicons"
              onPress={() => {
                setModalType('cured');
                setModalVisible(true);
              }}
              size="small"
              fontWeight={FONT_WEIGHT.bold}
              BorderColor={COLORS.success}
            />
            <CustomButton
              text="View Progress Graph"
              variant="outline"
              TextColor={COLORS.primary}
              CustomRadius={RADIUS.lg}
              icon="graph"
              iconcolor={COLORS.primary}
              fontWeight={FONT_WEIGHT.bold}
              iconSize={ICON_SIZE.sm}
              icontype="Octicons"
              py={11}
              size="small"
              BorderColor={COLORS.primary}
            />
          </Row>
          <Row align="center" justify="center">
            <CustomButton
              text="AI Insights"
              variant="outline"
              TextColor={COLORS.textPrimary}
              CustomRadius={RADIUS.lg}
              icon="sparkles"
              iconcolor={COLORS.textPrimary}
              iconSize={ICON_SIZE.xs}
              icontype="Ionicons"
              py={11}
              size="small"
              mt={SPACING.md}
              fontWeight={FONT_WEIGHT.bold}
              BorderColor={COLORS.textPrimary}
            />
          </Row>
        </Container>
      </SafeArea>
      <Footer />
      {/* edit /delete / cured modal  */}
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}>
        <CustomText
          TextColor={COLORS.textPrimary}
          fontWeight={FONT_WEIGHT.medium}
          lineHeight={LINE_HEIGHT.lg}
          mb={SPACING.md}
          textAlign="center">
          {modalType === 'edit' &&
            'Are you sure you want\n to edit this record?'}

          {modalType === 'delete' &&
            'Are you sure you want\n to delete this record?'}

          {modalType === 'cured' &&
            'Do you want to update this condition as\n cured?'}
        </CustomText>

        <Row align="center" justify="space-between">
          <CustomButton
            text="Yes"
            btnStyle={{width: '48%'}}
            size="small"
            CustomRadius={RADIUS.lg}
            onPress={() => {
              if (modalType === 'edit') {
                console.log('Editing...');
              } else if (modalType === 'cured') {
                console.log('Mark as Cured.');
              } else if (modalType === 'delete') {
                console.log('Deleting...');
              }
              setModalVisible(false);
            }}
          />

          <CustomButton
            text="Cancel"
            variant="outline"
            CustomRadius={RADIUS.lg}
            BorderColor={COLORS.borderSecondary}
            btnStyle={{width: '48%'}}
            size="small"
            onPress={() => setModalVisible(false)}
          />
        </Row>
      </CustomModal>

      {/* cured success modal  */}
      <CustomModal
        OnclosePress={() => {
          setcuredSuccessModal(!curedSuccessModal);
        }}
        visible={curedSuccessModal}
        onClose={() => setcuredSuccessModal(false)}>
        <Row align="center" justify="center" spacing={scale(8)}>
          <DynamicIcon
            name="checkmark-circle-sharp"
            type="Ionicons"
            color={COLORS.success}
            size={scale(20)}
          />
          <CustomText
            TextColor={COLORS.textDark}
            fontWeight={FONT_WEIGHT.semiBold}
            fontSize={FONT_SIZE.lg}>
            Disease Cured
          </CustomText>
        </Row>
        <CustomText
          TextColor={COLORS.textPrimary}
          fontWeight={FONT_WEIGHT.regular}
          lineHeight={LINE_HEIGHT.lg}
          my={SPACING.md}
          textAlign="center">
          Good progress! Marking this as cured brings you {'\n'} closer to
          better health.
        </CustomText>
        <CustomButton
          text="View Progress Graph"
          CustomRadius={RADIUS.lg}
          fullWidth
          size="small"
          py={14}
        />
      </CustomModal>
    </>
  );
};

export default SingleHealthDisease;
