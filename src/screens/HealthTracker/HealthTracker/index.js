import {View, Text} from 'react-native';
import {useState} from 'react';
import {Column, Container, Row, SafeArea} from '../../../components/layout';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import CustomButton from '../../../components/common/Button';
import {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  RADIUS,
  SPACING,
} from '../../../constants';
import {scale} from '../../../constants/responsive';
import CustomText from '../../../components/common/CustomText/CustomText';
import ListCard from '../../Dashboard/common/ListCard';
import {DynamicIcon} from '../../../components/common/Icon';
import styles from './styles';
import MainTabs from '../../../components/common/Cards/MainTabsCards';
import {
  Health_Tracker,
  Health_Tracker_Inactive,
  Vitals_Active,
  Vitals_Icon,
} from '../../../assets/svgImage';
import TabCard from '../../../components/common/Cards/MainTabsCards';
import {ROUTES} from '../../../navigation/routes';
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
  ];
  const [activeTab, setActiveTab] = useState('health');

  return (
    <>
      <Header
        title="My Health Tracker"
        SearchPress={() => {
          navigation.navigate(ROUTES.DashboardSearch);
        }}
        NotificationPress
      />
      <SafeArea style={{paddingTop: 0}}>
        <Container scrollable>
          <Row align="center" spacing={8}>
            <TabCard
              title={'Health\nConditions'}
              Icon={
                activeTab === 'health'
                  ? Health_Tracker
                  : Health_Tracker_Inactive
              }
              BgColor={
                activeTab === 'health' ? COLORS.primary : COLORS.bg_light
              }
              TextColor={
                activeTab === 'health' ? COLORS.white : COLORS.textPrimary
              }
              BorderColor={
                activeTab === 'health' ? COLORS.primary : COLORS.textDisabled
              }
              borderWidth={0.4}
              p={SPACING.sm}
              onPress={() => setActiveTab('health')}
            />

            <TabCard
              title={'My\nVitals'}
              BgColor={
                activeTab === 'vitals' ? COLORS.primary : COLORS.bg_light
              }
              TextColor={
                activeTab === 'vitals' ? COLORS.white : COLORS.textPrimary
              }
              Icon={activeTab === 'vitals' ? Vitals_Active : Vitals_Icon}
              BorderColor={
                activeTab === 'vitals' ? COLORS.primary : COLORS.textDisabled
              }
              borderWidth={0.4}
              p={SPACING.sm}
              onPress={() => setActiveTab('vitals')}
            />
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
              BorderColor={COLORS.borderSecondary}
              size="small"
              TextColor={COLORS.textPrimary}
              fontSize="sm"
              CustomRadius={RADIUS.md}
              onPress={() => {
                navigation.navigate(ROUTES.AddHealthTrackerCondition);
              }}
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
                BorderColor={COLORS.borderSecondary}
                onPress={() => {
                  navigation.navigate(ROUTES.MyHealthRecords);
                }}
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
                BorderColor={COLORS.borderSecondary}
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
