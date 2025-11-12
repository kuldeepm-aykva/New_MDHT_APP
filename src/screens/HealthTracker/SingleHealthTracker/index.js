import {View, Text} from 'react-native';
import React from 'react';
import {ROUTES} from '../../../navigation/routes';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import {Column, Container, Row, SafeArea} from '../../../components/layout';
import {scale} from '../../../constants/responsive';
import styles from './styles';
import CustomButton from '../../../components/common/Button';
import {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  RADIUS,
  SPACING,
} from '../../../constants';
import commonstyles from '../../../constants/common';
import CustomText from '../../../components/common/CustomText/CustomText';
import Slider1 from '../../../components/common/slider';
import HeartMurmurSlider from '../../../components/common/slider';
import SeveritySlider from '../../../components/common/slider';

const SingleHealthTracker = ({navigation}) => {
  return (
    <>
      <Header
        title="Add New Condition"
        SearchPress={() => {
          navigation.navigate(ROUTES.DashboardSearch);
        }}
        NotificationPress
      />
      <SafeArea style={{paddingTop: scale(0)}}>
        <Container>
          <View style={[styles.main_card]}>
            <Container scrollable padding="none">
              <Column>
                <CustomText
                  TextColor={COLORS.black}
                  fontWeight={FONT_WEIGHT.medium}
                  BgColor={COLORS.transparent}
                  mb="sm">
                  Acyanotic Heart Disease
                </CustomText>
                <CustomText
                  TextColor={COLORS.textPrimary}
                  BgColor={COLORS.transparent}
                  fontSize={FONT_SIZE.sm}
                  fontWeight={FONT_WEIGHT.regular}>
                  Acyanotic heart disease refers to a group of congenital heart
                  defects where oxygen-rich blood continues to circulate through
                  the body, so the skin doesn't turn blue (no cyanosis). Common
                  types include ventricular septal defect (VSD) and atrial
                  septal defect (ASD). It may cause symptoms like fatigue, rapid
                  breathing, or poor growth in children.
                </CustomText>
              </Column>
            </Container>
            <Container padding="none" style={[styles.btn_container]} flex={0}>
              {/* <CustomButton
                fullWidth
                Radius="lg"
                variant="primary"
                fontSize="sm"
                TextColor={COLORS.white}
                text="Start Symptom Tracking"
              /> */}
              <SeveritySlider
                label="Heart Murmur Severity ?"
                minValue={0}
                onInfoPress
                showSkip={true}
                maxValue={10}
                colors={['#6CC884', '#FFD242', '#FF6B7A']}
              />
              <Row align="center" justify="space-between">
                <CustomButton
                  text="Back"
                  variant="outline"
                  BorderColor={COLORS.borderSecondary}
                  CustomRadius={RADIUS.lg}
                  size="small"
                  px={SPACING.xl}
                />
                <CustomButton
                  text="Skip"
                  variant="white"
                  fontWeight={FONT_WEIGHT.regular}
                  TextColor={COLORS.textPrimary}
                />
                <CustomButton
                  text="Next"
                  variant="outline"
                  BorderColor={COLORS.primary}
                  CustomRadius={RADIUS.lg}
                  size="small"
                  fontWeight={FONT_WEIGHT.regular}
                  TextColor={COLORS.primary}
                  px={SPACING.xl}
                />
              </Row>
            </Container>
          </View>
        </Container>
      </SafeArea>

      <Footer />
    </>
  );
};

export default SingleHealthTracker;
