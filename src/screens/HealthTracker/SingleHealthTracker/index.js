import {View, Text} from 'react-native';
import React from 'react';
import {ROUTES} from '../../../navigation/routes';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import {Column, Container, SafeArea} from '../../../components/layout';
import {scale} from '../../../constants/responsive';
import styles from './styles';
import CustomButton from '../../../components/common/Button';
import {COLORS, FONT_SIZE, FONT_WEIGHT, SPACING} from '../../../constants';
import commonstyles from '../../../constants/common';
import CustomText from '../../../components/common/CustomText/CustomText';

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
                  fontWeight={FONT_WEIGHT.light}>
                
                   Acyanotic heart disease refers to a group of congenital heart
                  defects where oxygen-rich blood continues to circulate through
                  the body, so the skin doesn't turn blue (no cyanosis). Common
                  types include ventricular septal defect (VSD) and atrial
                  septal defect (ASD). It may cause symptoms like fatigue, rapid
                  breathing, or poor growth in children.
                </CustomText>
              </Column>
            </Container>
            <Container padding='none' style={[styles.btn_container]} flex={0}>
              <CustomButton
                fullWidth
                Radius="lg"
                variant="primary"
                fontSize="sm"
                TextColor={COLORS.white}
                text="Start Symptom Tracking"
              />
            </Container>
          </View>
        </Container>
      </SafeArea>

      <Footer />
    </>
  );
};

export default SingleHealthTracker;
