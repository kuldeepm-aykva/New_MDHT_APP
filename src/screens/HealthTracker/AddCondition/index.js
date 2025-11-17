import {View, Text, TouchableOpacity, Modal, Alert} from 'react-native';
import {useState} from 'react';
import {Column, Container, Row, SafeArea} from '../../../components/layout';
import {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  RADIUS,
  SPACING,
} from '../../../constants';
import {ROUTES} from '../../../navigation/routes';
import Header from '../../../components/layout/Header';
import {scale, verticalScale} from '../../../constants/responsive';
import styles from './styles';
import CustomTextInput from '../../../components/forms/TextInput';
import CustomButton from '../../../components/common/Button';
import Footer from '../../../components/layout/Footer';
import DatePickerModal from '../../../components/common/DatePickerModal';

const AddHealthTrackerCondition = ({navigation}) => {
  const [search, setSearch] = useState('');

  const [modalDatePicker, setModalDatePicker] = useState(false);
  const [pasteDate, setPastDate] = useState();
  const handlePastDate = () => {
    date => setPastDate(prev => ({...prev, pasteDate: date}));
    Alert.alert(pasteDate);
  };

  const data = [
    'Thyroid',
    'Heart Disease',
    'Cancer',
    ' Diabetes',
    'Asthma',
    'Migraine',
    'Blood Pressure',
    'Depression',
    'Allergies',
    'Other Disease',
    'Other Symptom',
  ];
  return (
    <>
      <Header
        title="Add New Condition"
        SearchPress={() => {
          navigation.navigate(ROUTES.DashboardSearch);
        }}
        NotificationPress
      />
      <SafeArea>
        <Container py={0} pb={SPACING.sm} flex={0}>
          <Text style={[styles.heading]}>
            Which Disease/Symptom is bothering {'\n'}you the most right now?
          </Text>
        </Container>

        <Container scrollable flex={1} backgroundColor={COLORS.white}>
          <Column align="center">
            <Row justify="center" style={[styles.diease_container]}>
              {data.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    navigation.navigate(ROUTES.SearchHealthTracker);
                  }}
                  style={[styles.diease]}>
                  <Text style={[styles.diease_text]}>{item}</Text>
                </TouchableOpacity>
              ))}
            </Row>
          </Column>
        </Container>

        <Container flex={0}>
          <CustomTextInput
            flex={0}
            placeholder="Search your Disease/Symptom"
            leftIcon
            value={search}
            onChangeText={text => setSearch(text)}
            leftIconType="MaterialIcons"
            TextColor={COLORS.textPrimary}
            leftIconSource="search"
            leftIconColor={
              search.length > 0 ? COLORS.textPrimary : COLORS.textPrimaryLight
            }
            placeholderTextColor={COLORS.textPrimaryLight}
            CustomRadius={RADIUS[14]}
            BorderColor={COLORS.borderSecondary}
            BgColor={COLORS.white}
            fontSize={FONT_SIZE.xs}
            textInputStyle={{
              borderWidth: 0.5,
              height: verticalScale(55),
            }}
          />
          <Row
            align="center"
            justify="space-between"
            style={[styles.past_condition_container]}>
            <Text style={[styles.add_condition]}>
              Missed a day? {'\n'}Add past Conditions.
            </Text>
            <CustomButton
              text="Add Past Condition"
              variant="outline"
              icon="plus"
              iconSize={scale(16)}
              BorderColor={COLORS.borderSecondary}
              onPress={() => {
                setModalDatePicker(!modalDatePicker);
              }}
              iconcolor={COLORS.textPrimary}
              icontype="Entypo"
              size="small"
              TextColor={COLORS.textPrimary}
              fontSize="sm"
              CustomRadius={RADIUS.lg}
            />
          </Row>
        </Container>
      </SafeArea>

      <Footer />
      {/* Date Picker Modal */}
      <DatePickerModal
        title="Select Past Date"
        visible={modalDatePicker}
        onClose={() => setModalDatePicker(!modalDatePicker)}
        date={pasteDate}
        onDateChange={handlePastDate}
      />
    </>
  );
};

export default AddHealthTrackerCondition;
