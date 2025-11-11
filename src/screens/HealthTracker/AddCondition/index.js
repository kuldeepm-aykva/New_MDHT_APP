import {View, Text, TouchableOpacity} from 'react-native';
import {Column, Container, Row, SafeArea} from '../../../components/layout';
import {COLORS, FONT_SIZE, FONT_WEIGHT, RADIUS} from '../../../constants';
import {ROUTES} from '../../../navigation/routes';
import Header from '../../../components/layout/Header';
import {scale} from '../../../constants/responsive';
import styles from './styles';
import CustomTextInput from '../../../components/forms/TextInput';
import CustomButton from '../../../components/common/Button';
import Footer from '../../../components/layout/Footer';

const AddHealthTrackerCondition = ({navigation}) => {
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
      <SafeArea style={{flex: 1, backgroundColor: COLORS.white}}>
        <Container padding="medium" flex={0}>
          <Text style={[styles.heading]}>
            Which Disease/Symptom is bothering {'\n'}you the most right now?
          </Text>
        </Container>

        <Container
          scrollable
          padding="large"
          flex={0}
          backgroundColor={COLORS.white}>
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

        <Container padding="large" flex={0}>
          <CustomTextInput
            flex={0}
            placeholder="Search your Disease/Symptom"
            leftIcon
            leftIconType="MaterialIcons"
            leftIconSource="search"
            placeholderTextColor={COLORS.textTeritaryHalfLight}
            CustomRadius={RADIUS[14]}
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
    </>
  );
};

export default AddHealthTrackerCondition;
