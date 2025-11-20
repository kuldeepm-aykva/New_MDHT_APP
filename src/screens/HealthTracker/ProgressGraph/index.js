import {View, Text, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import Header from '../../../components/layout/Header';
import {ROUTES} from '../../../navigation/routes';
import {Column, Container, Row, SafeArea} from '../../../components/layout';
import TabCard from '../../../components/common/Cards/MainTabsCards';
import {
  Health_Tracker,
  Health_Tracker_Inactive,
  Vitals_Active,
  Vitals_Icon,
} from '../../../assets/svgImage';
import {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  RADIUS,
  SPACING,
} from '../../../constants';
import Card from '../../../components/common/Cards/Card';
import CustomDropdown from '../../../components/forms/Dropdown';
import CustomText from '../../../components/common/CustomText/CustomText';
import CustomButton from '../../../components/common/Button';
import {scale} from '../../../constants/responsive';
import {DynamicIcon} from '../../../components/common/Icon';
import Footer from '../../../components/layout/Footer';
import styles from './styles';

const Graph = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('conditions');
  const [Dieases, setDieases] = useState(null);
  const [symptom, setsymptom] = useState(null);
  const [baseline, setBaseline] = useState(null);
  const [showBaseLineBtn, setshowBaseLineBtn] = useState(false);

  const diseaseData = [
    {label: 'Acyanotic Heart Disease', value: 'AHD', type: 'Disease'},
    {label: 'Feeling Nausea', value: 'NAU', type: 'Symptom'},
    {label: 'Abnormal Thyroid Function', value: 'ATF', type: 'Symptom'},
    {label: 'Bladder Cancer', value: 'BLC', type: 'Disease'},
    {label: 'Allergies', value: 'ALG', type: 'Disease'},
  ];
  const symptoms = [
    {
      id: '1',
      name: 'Heart Murmur Severity?',
    },
    {
      id: '2',
      name: 'Breathlessness',
    },
    {
      id: '3',
      name: 'Dizziness',
    },
    {
      id: '4',
      name: 'Fatigue',
    },
    {
      id: '5',
      name: 'Fainting',
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
      <SafeArea style={{paddingTop: 0}}>
        <Container scrollable>
          <Row align="center" spacing={8}>
            <TabCard
              title={'Conditions'}
              Icon={
                activeTab === 'conditions'
                  ? Health_Tracker
                  : Health_Tracker_Inactive
              }
              BgColor={
                activeTab === 'conditions' ? COLORS.primary : COLORS.bg_light
              }
              TextColor={
                activeTab === 'conditions' ? COLORS.white : COLORS.textPrimary
              }
              BorderColor={
                activeTab === 'conditions'
                  ? COLORS.transparent
                  : COLORS.transparent
              }
              borderWidth={0.4}
              p={SPACING.sm}
              onPress={() => setActiveTab('conditions')}
            />

            <TabCard
              title={'Vitals'}
              BgColor={
                activeTab === 'vitals' ? COLORS.primary : COLORS.bg_light
              }
              TextColor={
                activeTab === 'vitals' ? COLORS.white : COLORS.textPrimary
              }
              Icon={activeTab === 'vitals' ? Vitals_Active : Vitals_Icon}
              BorderColor={
                activeTab === 'conditions'
                  ? COLORS.transparent
                  : COLORS.transparent
              }
              borderWidth={0.4}
              p={SPACING.sm}
              onPress={() => setActiveTab('vitals')}
            />
          </Row>
          <Card
            shadow={true}
            BorderWidth={1}
            mt={SPACING.md}
            BorderColor={COLORS.borderSecondary}>
            <CustomDropdown
              data={diseaseData}
              value={Dieases}
              onChange={item => setDieases(item.value)}
              placeholder="Select Disease or Symptom"
            />
            <CustomDropdown
              data={symptoms}
              value={symptom}
              onChange={item => setsymptom(item.value)}
              placeholder="Select Symptom"
            />
            <View style={{height: 500}}>
              <Card
                px={SPACING.xl}
                shadow={false}
                BorderColor={COLORS.transparent}>
                <Row align="flex-start" justify="space-between">
                  <Column align="center" justify="center">
                    <CustomText
                      TextColor={COLORS.textPrimary}
                      fontSize={FONT_SIZE.sm}
                      fontWeight={FONT_WEIGHT.regular}>
                      Range
                    </CustomText>
                    <CustomText
                      TextColor={COLORS.textDark}
                      fontSize={FONT_SIZE.xxl}
                      fontWeight={FONT_WEIGHT.bold}>
                      3 - 7
                    </CustomText>
                  </Column>
                  <Column align="center" justify="center">
                    <CustomButton
                      text=" Baseline Record"
                      TextColor={COLORS.textPrimary}
                      icon="chevron-small-down"
                      size='small'
                      icontype="Entypo"
                      onPress={()=>{
                        setshowBaseLineBtn(!showBaseLineBtn);
                      }}
                      variant='btnOnlyText'
                      iconcolor={COLORS.textPrimary}
                      iconPosition="right"
                      fontSize={FONT_SIZE.sm}
                      fontWeight={FONT_WEIGHT.regular}
                      BorderColor={COLORS.transparent}
                    />
                    {showBaseLineBtn && (
                      <TouchableOpacity>
                        <Card
                          py={SPACING.sm}
                          px={SPACING.md}
                          BgColor="#F3FAFE"
                          BorderColor={COLORS.transparent}>
                          <CustomText
                            TextColor={COLORS.primary}
                            fontWeight={FONT_WEIGHT.regular}
                            fontSize={FONT_SIZE.sm}>
                            {baseline ? (
                              <Text style={styles.baselineValue}>
                                {baseline}
                              </Text>
                            ) : (
                              '+ Set baseline by you'
                            )}
                          </CustomText>
                        </Card>
                      </TouchableOpacity>
                    )}

                    <CustomText
                      TextColor={COLORS.textDark}
                      fontSize={FONT_SIZE.xxl}
                      fontWeight={FONT_WEIGHT.bold}>
                      0
                    </CustomText>
                  </Column>
                </Row>
              </Card>
            </View>
          </Card>
          <Card
            shadow={true}
            BorderWidth={1}
            mt={SPACING.md}
            BorderColor={COLORS.borderSecondary}>
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
                  Last Record:
                </CustomText>
                <CustomText
                  BgColor={COLORS.transparent}
                  TextColor={COLORS.textPrimary}
                  fontWeight={FONT_WEIGHT.medium}>
                  17 November 2024
                </CustomText>
              </Column>
              <CustomButton
                text="Add New Record"
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
            <TouchableOpacity>
              <Card mt={SPACING.lg} py={15} shadow={false}>
                <Row align="center" justify="space-between">
                  <CustomText
                    fontSize={FONT_SIZE.sm}
                    TextColor={COLORS.textPrimary}
                    fontWeight={FONT_WEIGHT.bold}>
                    Comments by Care Team (Health Chat)
                  </CustomText>
                  <DynamicIcon
                    name="chevron-right"
                    type="Entypo"
                    color={COLORS.textPrimary}
                    size={scale(18)}
                  />
                </Row>
              </Card>
            </TouchableOpacity>
          </Card>
        </Container>
      </SafeArea>
      <Footer />
    </>
  );
};

export default Graph;
