import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {useState} from 'react';
import Header from '../../../components/layout/Header';
import {ROUTES} from '../../../navigation/routes';
import {Column, Container, Row, SafeArea} from '../../../components/layout';
import CustomDropdown from '../../../components/forms/Dropdown/index';
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
import CustomText from '../../../components/common/CustomText/CustomText';
import CustomButton from '../../../components/common/Button';
import {
  scale,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  verticalScale,
} from '../../../constants/responsive';
import {DynamicIcon} from '../../../components/common/Icon';
import Footer from '../../../components/layout/Footer';
import styles from './styles';
import CustomModal from '../../../components/common/Modal';
import CustomTextInput from '../../../components/forms/TextInput';
import {LineChart} from 'react-native-gifted-charts';
import {diseaseData, symptoms, Date} from './Data';
import DatePickerModal from '../../../components/common/DatePickerModal';

const Graph = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('conditions');
  const [Dieases, setDieases] = useState(null);
  const [symptom, setsymptom] = useState(null);
  const [past, setpast] = useState();
  const [baseline, setBaseline] = useState(null);
  const [tempBaseline, setTempBaseline] = useState('');

  const [showBaseLineBtn, setshowBaseLineBtn] = useState(false);
  const [showBaseLineModal, setshowBaseLineModal] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [pastDateModal, setpastDateModal] = useState(false);

  // Render x-axis label
  const renderLabel = (day, month) => {
    return (
      <Column align="center" justify="center">
        <CustomText
          fontSize={FONT_SIZE.xs}
          TextColor={COLORS.textPrimary}
          fontWeight={FONT_WEIGHT.regular}>
          {day}
        </CustomText>
        <CustomText
          fontSize={FONT_SIZE.xs}
          TextColor={COLORS.textPrimary}
          fontWeight={FONT_WEIGHT.regular}>
          {month}
        </CustomText>
      </Column>
    );
  };

  // Render tooltip on data point click - NOW SHOWS ACTUAL VALUE
  const renderDataPointLabel = value => {
    return (
      <Card
        shadow={true}
        py={SPACING.xs}
        px={SPACING.sm}
        CustomRadius={RADIUS.sm}
        BgColor={COLORS.white}>
        <Text style={{fontSize: 16, color: COLORS.textDark}}>{value}</Text>
      </Card>
    );
  };

  // Chart data - FIXED: Each point now shows its own value
  const data = [
    {
      value: 1,
      labelComponent: () => renderLabel('30', 'Oct'),
      dataPointLabelComponent: () => renderDataPointLabel(1),
    },
    {
      value: 2,
      labelComponent: () => renderLabel('1', 'Nov'),
      dataPointLabelComponent: () => renderDataPointLabel(2),
    },
    {
      value: 5,
      labelComponent: () => renderLabel('12', 'Nov'),
      dataPointLabelComponent: () => renderDataPointLabel(5),
    },
    {
      value: 4,
      labelComponent: () => renderLabel('22', 'Nov'),
      dataPointLabelComponent: () => renderDataPointLabel(4),
    },
    {
      value: 3,
      labelComponent: () => renderLabel('15', 'Nov'),
      dataPointLabelComponent: () => renderDataPointLabel(3),
    },
    {
      value: 2,
      labelComponent: () => renderLabel('18', 'Nov'),
      dataPointLabelComponent: () => renderDataPointLabel(2),
    },
    {
      value: 1,
      labelComponent: () => renderLabel('16', 'Nov'),
      dataPointLabelComponent: () => renderDataPointLabel(1),
    },
  ];

  const values = data.map(d => d.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  // FIXED: Now properly saves baseline
  const handleSetBaseline = () => {
    const value = parseFloat(tempBaseline);
    if (!isNaN(value) && value > 0 && value <= 10) {
      setBaseline(value);
      setshowBaseLineModal(false);
      setTempBaseline('');
    }
  };

  // Check if baseline is >= 7 for red color
  const isBaselineHigh = baseline && baseline >= 7;

  return (
    <>
      <Header
        title="My Health Tracker"
        SearchPress={() => navigation.navigate(ROUTES.DashboardSearch)}
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
              BorderColor={COLORS.transparent}
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
              BorderColor={COLORS.transparent}
              borderWidth={0.4}
              p={SPACING.sm}
              onPress={() => setActiveTab('vitals')}
            />
          </Row>

          <Card
            pb={SPACING.xl}
            shadow={true}
            BorderWidth={1}
            mt={SPACING.md}
            BorderColor={COLORS.borderSecondary}>
            <CustomDropdown
              data={diseaseData}
              value={Dieases}
              showType={true}
              onChange={item => setDieases(item.value)}
              placeholder="Select Disease"
            />
            <CustomDropdown
              data={symptoms}
              value={symptom}
              onChange={item => setsymptom(item.value)}
              placeholder="Select Symptom"
            />

            <View>
              <Card shadow={false} BorderColor={COLORS.transparent}>
                <Row align="flex-start" justify="space-between">
                  {/* Range Column */}
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
                      {minValue} - {maxValue}
                    </CustomText>
                  </Column>

                  {/* Baseline Column - FIXED */}
                  <Column align="center" justify="center">
                    <TouchableOpacity
                      onPress={() => setshowBaseLineBtn(!showBaseLineBtn)}>
                      <Row align="center" justify="center" spacing={scale(3)}>
                        <CustomText
                          fontSize={FONT_SIZE.sm}
                          TextColor={COLORS.textPrimary}>
                          {baseline ? 'Baseline By Patient' : 'Baseline Record'}
                        </CustomText>
                        <DynamicIcon
                          name={
                            showBaseLineBtn
                              ? 'chevron-small-up'
                              : 'chevron-small-down'
                          }
                          type="Entypo"
                          color={COLORS.textPrimary}
                          size={scale(14)}
                        />
                      </Row>
                    </TouchableOpacity>

                    {/* Show baseline value OR set button */}
                    {baseline ? (
                      // FIXED: Show baseline value in red if >= 7
                      <TouchableOpacity
                        onPress={() => setshowBaseLineModal(true)}>
                        <CustomText
                          TextColor={
                            isBaselineHigh ? '#FF5252' : COLORS.textDark
                          }
                          fontSize={FONT_SIZE.xxl}
                          fontWeight={FONT_WEIGHT.bold}
                          mt={SPACING.xs}>
                          {baseline}
                        </CustomText>
                      </TouchableOpacity>
                    ) : (
                      showBaseLineBtn && (
                        <TouchableOpacity
                          onPress={() => setshowBaseLineModal(true)}>
                          <Card
                            py={SPACING.sm}
                            px={SPACING.md}
                            mt={SPACING.xs}
                            BgColor="#F3FAFE"
                            BorderColor={COLORS.transparent}>
                            <CustomText
                              TextColor={COLORS.primary}
                              fontWeight={FONT_WEIGHT.regular}
                              fontSize={FONT_SIZE.sm}>
                              + Set baseline by you
                            </CustomText>
                          </Card>
                        </TouchableOpacity>
                      )
                    )}
                  </Column>
                </Row>
              </Card>

              {/* Chart */}
              <Column>
                <LineChart
                  data={data}
                  width={SCREEN_WIDTH * 0.7}
                  height={SCREEN_HEIGHT * 0.3}
                  maxValue={10}
                  // yAxisOffset={1}
                  noOfSections={9}
                  stepValue={1}
                  spacing={scale(45)}
                  thickness={3}
                  color={COLORS.primary}
                  dataPointsColor={COLORS.primary}
                  dataPointsRadius={scale(6)}
                  textShiftY={-8}
                  textShiftX={-10}
                  textFontSize={12}
                  textColor={COLORS.textPrimary}
                  yAxisTextStyle={styles.yAxisText}
                  xAxisLabelTextStyle={styles.xAxisText}
                  yAxisColor={COLORS.transparent}
                  xAxisColor={COLORS.transparent}
                  rulesColor={COLORS.borderSecondary}
                  showVerticalLines
                  verticalLinesColor={COLORS.borderSecondary}
                  // verticalLinesStrokeDashArray={[5, 5]}
                  // rulesType="dashed"
                  // dashWidth={5}
                  // dashGap={5}
                  hideDataPoints={false}
                  curved
                  focusEnabled
                  showDataPointLabelOnFocus
                  focusedDataPointRadius={8}
                  focusedDataPointColor={COLORS.primary}
                  focusedDataPointIndex={selectedPoint}
                  unFocusOnPressOut={false}
                  dataPointLabelShiftY={-30}
                  dataPointLabelShiftX={-5}
                  onPress={(item, index) => {
                    setSelectedPoint(prev => (prev === index ? null : index));
                  }}
                  // FIXED: Baseline reference line - RED DOTTED
                  referenceLine1Position={
                    baseline ? Number(baseline) : undefined
                  }
                  referenceLine1Config={{
                    color: '#FF5252',
                    dashWidth: 6,
                    dashGap: 4,
                    thickness: 2,
                  }}
                />
              </Column>
            </View>
          </Card>

          {/* Last Record Card */}
          <Card
            shadow={true}
            BorderWidth={1}
            mt={SPACING.md}
            BorderColor={COLORS.borderSecondary}>
            <Row
              align="center"
              style={styles.last_condition}
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
                onPress={() =>
                  navigation.navigate(ROUTES.AddHealthTrackerCondition)
                }
              />
            </Row>
            <CustomDropdown
              data={Date}
              value={past}
              onChange={item => {
                if (item.value == 'CR') {
                  setpastDateModal(!pastDateModal);
                }
                setpast(item);
              }}
              placeholder="Select Date"
              icon="calendar-month"
              icontype="MaterialIcons"
              iconColor={COLORS.textPrimary}
              iconSize={18}
              mainTextStyle={{
                color: COLORS.textPrimary,
              }}
              style={{
                marginTop: scale(20),
              }}
            />

            <TouchableOpacity>
              <Card mt={SPACING.sm} py={15} shadow={false}>
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

      <DatePickerModal
        visible={pastDateModal}
        onClose={() => setpastDateModal(!pastDateModal)}
        date={past}
        title="Select Custom Range"
        onDateChange={date => setpast(prev => ({...prev, past: date}))}
      />

      {/* basline modal  */}
      <CustomModal
        modalContainerStyle={styles.BaseLineModal}
        OnclosePress={() => setshowBaseLineModal(false)}
        visible={showBaseLineModal}
        onClose={() => setshowBaseLineModal(false)}>
        <CustomText
          fontSize={FONT_SIZE.lg}
          fontWeight={FONT_WEIGHT.semiBold}
          TextColor={COLORS.textDark}
          textAlign="center"
          mb={SPACING.sm}
          numberOfLines={2}>
          Baseline Record
        </CustomText>
        <CustomText
          fontSize={FONT_SIZE.sm}
          textAlign="center"
          mb={SPACING.md}
          fontWeight={FONT_WEIGHT.regular}
          TextColor={COLORS.textPrimary}>
          Please enter baseline value {'\n'} between 1 and 10.
        </CustomText>
        <Row align="center" justify="space-between" spacing={scale(8)}>
          <CustomTextInput
            // placeholder="Enter Baseline"
            placeholderTextColor={COLORS.textPrimaryLight}
            flex={1}
            value={tempBaseline}
            onChangeText={setTempBaseline}
            keyboardType="numeric"
            BorderColor={COLORS.borderSecondary}
            variant="outline"
            CustomRadius={RADIUS.lg}
            TextColor={COLORS.textDark}
            textInputStyle={{
              height: verticalScale(45),
              textAlign: 'center',
            }}
          />
          <CustomButton
            text="Save"
            variant="primary"
            CustomRadius={RADIUS.lg}
            onPress={handleSetBaseline}
            btnStyle={{
              minHeight: verticalScale(45),
            }}
          />
        </Row>
      </CustomModal>

      <Footer />
    </>
  );
};

export default Graph;
