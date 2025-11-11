import {View, Text} from 'react-native';
import React from 'react';
import {Column, Container, Row, SafeArea} from '../../../components/layout';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import CustomButton from '../../../components/common/Button';
import {COLORS, FONT_SIZE, FONT_WEIGHT, RADIUS} from '../../../constants';
import {scale} from '../../../constants/responsive';
import CustomText from '../../../components/common/CustomText/CustomText';
import ListCard from '../../Dashboard/common/ListCard';
import {DynamicIcon} from '../../../components/common/Icon';
import styles from './styles';
import MainTabs from '../../../components/common/Cards/MainTabsCards';
const HealthTracker = ({navigation}) => {
  const healthRecords = [
    {
      id: 1,
      time: '02:55 pm',
      date: '28 September 2024',
      issue: 'Fever',
      type: 'Symptom',
    },
    {
      id: 2,
      time: '03:55 pm',
      date: '12 September 2024',
      issue: 'Cold',
      type: 'Disease',
    },
    {
      id: 3,
      time: '02:55 pm',
      date: '28 September 2024',
      issue: 'Fever',
      type: 'Symptom',
    },
    {
      id: 4,
      time: '03:55 pm',
      date: '12 September 2024',
      issue: 'Cold',
      type: 'Disease',
    },
  ];
  return (
    <>
      <Header
        title="My Health Tracker"
        SearchPress={() => {
          navigation.navigate(ROUTES.DashboardSearch);
        }}
        NotificationPress
      />
      <SafeArea style={{paddingTop: 6}}>
        <Container scrollable>
          <Row align="center" spacing={10}>
            <MainTabs />
            <MainTabs />
          </Row>
          <Row
            align="center"
            style={[styles.last_condition]}
            justify="space-between">
            <Column>
              <CustomText
                BgColor={COLORS.transparent}
                TextColor={COLORS.textDark}
                fontSize={FONT_SIZE.sm}
                fontWeight={FONT_WEIGHT.semiBold}>
                Last Condition:
              </CustomText>
              <CustomText
                BgColor={COLORS.transparent}
                TextColor={COLORS.textPrimary}
                fontWeight={FONT_WEIGHT.medium}>
                Fever - Symptom
              </CustomText>
            </Column>
            <CustomButton
              text="Add Condition"
              variant="outline"
              icon="plus"
              iconSize={scale(16)}
              iconcolor={COLORS.textPrimary}
              icontype="Entypo"
              size="small"
              TextColor={COLORS.textPrimary}
              fontSize="sm"
              CustomRadius={RADIUS.md}
            />
          </Row>

          {/* health records  */}
          <Column>
            <Row
              align="center"
              style={[styles.section_header]}
              justify="space-between">
              <CustomText
                BgColor={COLORS.transparent}
                TextColor={COLORS.textDark}
                fontWeight={FONT_WEIGHT.semiBold}>
                My Health Records
              </CustomText>
              <CustomButton
                text="View All"
                variant="outline"
                size="small"
                TextColor={COLORS.textPrimary}
                fontSize="sm"
                CustomRadius={RADIUS.md}
              />
            </Row>
            <Column>
              {healthRecords.map((item, index) => {
                return (
                  <ListCard
                    key={item.id}
                    list_item_style={[styles.list_item_style]}
                    Conatinerstyle={[styles.ListCardStyle]}>
                    <Row align="center" justify="space-between">
                      <Column spacing={3}>
                        <CustomText
                          fontSize={FONT_SIZE.sm}
                          TextColor={COLORS.textPrimary}>
                          Updated : {item.time} | {item.date}
                        </CustomText>
                        <CustomText
                          TextColor={COLORS.textPrimary}
                          fontWeight={FONT_WEIGHT.medium}>
                          {item.issue} -{' '}
                          <CustomText
                            TextColor={COLORS.textPrimary}
                            fontSize={FONT_SIZE.sm}
                            fontWeight={FONT_WEIGHT.light}>
                            {item.type}
                          </CustomText>
                        </CustomText>
                      </Column>
                      <DynamicIcon
                        size={scale(15)}
                        color={COLORS.textTeritary}
                        type="Entypo"
                        name="chevron-right"
                      />
                    </Row>
                  </ListCard>
                );
              })}
            </Column>
          </Column>
          {/* cured disease  */}
          <Column>
            <Row
              align="center"
              style={[styles.section_header]}
              justify="space-between">
              <CustomText
                BgColor={COLORS.transparent}
                TextColor={COLORS.textDark}
                fontWeight={FONT_WEIGHT.semiBold}>
                Cured Diseases / Symptoms
              </CustomText>
              <CustomButton
                text="View All"
                variant="outline"
                size="small"
                TextColor={COLORS.textPrimary}
                fontSize="sm"
                CustomRadius={RADIUS.md}
              />
            </Row>
            <Column>
              {healthRecords.map((item, index) => {
                return (
                  <ListCard
                    key={item.id}
                    list_item_style={[styles.list_item_style]}
                    Conatinerstyle={[styles.ListCardStyle]}>
                    <Row align="center" justify="space-between">
                      <Column spacing={3}>
                        <CustomText
                          fontSize={FONT_SIZE.sm}
                          TextColor={COLORS.textPrimary}>
                          Updated : {item.time} | {item.date}
                        </CustomText>
                        <CustomText
                          TextColor={COLORS.textPrimary}
                          fontWeight={FONT_WEIGHT.medium}>
                          {item.issue} -{' '}
                          <CustomText
                            TextColor={COLORS.textPrimary}
                            fontSize={FONT_SIZE.sm}
                            fontWeight={FONT_WEIGHT.light}>
                            {item.type}
                          </CustomText>
                        </CustomText>
                      </Column>
                      <DynamicIcon
                        size={scale(15)}
                        color={COLORS.textTeritary}
                        type="Entypo"
                        name="chevron-right"
                      />
                    </Row>
                  </ListCard>
                );
              })}
            </Column>
          </Column>
        </Container>
      </SafeArea>
      <Footer />
    </>
  );
};

export default HealthTracker;
