import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import {ROUTES} from '../../../navigation/routes';
import {Column, Container, Row, SafeArea} from '../../../components/layout';
import {COLORS, FONT_SIZE, FONT_WEIGHT, RADIUS} from '../../../constants';
import CustomText from '../../../components/common/CustomText/CustomText';
import CustomButton from '../../../components/common/Button';
import {scale} from '../../../constants/responsive';
import styles from './style';
import {DynamicIcon} from '../../../components/common/Icon';
import CircularIcon from '../../../components/common/CircularIcon';

const SingleHealthDisease = ({navigation}) => {
  return (
    <>
      <Header
        title="My Health Records"
        SearchPress={() => {
          navigation.navigate(ROUTES.DashboardSearch);
        }}
        NotificationPress
      />
      <SafeArea style={{paddingTop: 7}}>
        <Container>
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
          <Column style={[styles.cardContainer]}>
            <Row>
              <Row>
                <CustomText
                  fontSize={FONT_SIZE.sm}
                  TextColor={COLORS.textPrimary}>
                  Updated : 15 Jan, 2024 | 09:21 pm
                </CustomText>
              </Row>
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
                  onPress={() => console.log('Deleted')}
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
                  onPress={() => console.log('Deleted')}
                />
              </Row>
            </Row>
          </Column>
        </Container>
      </SafeArea>
      <Footer />
    </>
  );
};

export default SingleHealthDisease;
