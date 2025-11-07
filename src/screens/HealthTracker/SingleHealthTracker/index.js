import {View, Text} from 'react-native';
import React from 'react';
import {ROUTES} from '../../../navigation/routes';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import {Column, Container, SafeArea} from '../../../components/layout';
import {scale} from '../../../constants/responsive';
import styles from './styles';
import CustomButton from '../../../components/common/Button';
import {RADIUS} from '../../../constants';

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
        <Container scrollable style={{paddingVertical: 10}}>
          <Column
            align="center"
            justify="space-between"
            style={[styles.main_card]}>
            <View>
              <Text>Acyanotic Heart Disease</Text>
              <Text>
                Acyanotic heart disease refers to a group of congenital heart
                defects where oxygen-rich blood continues to circulate through
                the body, so the skin doesn't turn blue (no cyanosis). Common
                types include ventricular septal defect (VSD) and atrial septal
                defect (ASD). It may cause symptoms like fatigue, rapid
                breathing, or poor growth in children.
              </Text>
            </View>
            <CustomButton
              fullWidth
              Radius="xl"
              variant='primary'
              text="Start Symptom Tracking"
            />
          </Column>
        </Container>
      </SafeArea>

      <Footer />
    </>
  );
};

export default SingleHealthTracker;
