import {View, Text} from 'react-native';
import {useState} from 'react';
import Header from '../../../../components/layout/Header';
import Footer from '../../../../components/layout/Footer';
import {Column, Container, Row, SafeArea} from '../../../../components/layout';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../../constants';
import CustomTextInput from '../../../../components/forms/TextInput';
import {scale} from '../../../../constants/responsive';
import ListCard from '../../common/ListCard';
import styles from './styles';

const DashboardSearch = () => {
  const data = [
    'Appointment',
    'Patient',
    'Doctor',
    'Nurse',
    'Pharmacist',
    'Lab Technician',
    'Appointment',
    'Patient',
    'Doctor',
    'Nurse',
    'Pharmacist',
    'Lab Technician',
  ];
  const [Search, SetSearch] = useState('');
  return (
    <>
      <Header title="Search" NotificationPress />
      <SafeArea
        backgroundColor={COLORS.white}
        statusBarColor={COLORS.transparent}
        style={{paddingTop: scale(20)}}
        statusBarStyle="light-content">
        <Container keyboardAware style={{paddingVertical: 0}} flex={0}>
          <CustomTextInput
            flex={0}
            placeholder="Search here..."
            leftIcon
            leftIconType="MaterialIcons"
            leftIconSource="search"
            value={Search}
            onChangeText={text => SetSearch(text)}
            textInputStyle={{
              fontWeight: FONT_WEIGHT.semiBold,
              color: COLORS.textPrimary,
              borderRadius: scale(15),
            }}
            placeholderTextColor={COLORS.textPrimary}
          />
        </Container>
        <Container scrollable backgroundColor={COLORS.white}>
          <Column style={[styles.ListCardContainer]}>
            {data.map((item, index) => {
              return (
                <ListCard key={index} style={[styles.ListCardStyle]}>
                  <Text style={[styles.text]}>{item}</Text>
                </ListCard>
              );
            })}
          </Column>
          {/* <Row align="center" justify="center">
            <Text style={[styles.NoResult]}>No results found for your search.</Text>
          </Row> */}
        </Container>
      </SafeArea>
      <Footer style={{backgroundColor: COLORS.white}} />
    </>
  );
};

export default DashboardSearch;
