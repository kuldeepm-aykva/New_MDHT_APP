import {View, Text} from 'react-native';
import {useState} from 'react';
import Header from '../../../../components/layout/Header';
import Footer from '../../../../components/layout/Footer';
import {Column, Container, Row, SafeArea} from '../../../../components/layout';
import {COLORS, FONT_SIZE, FONT_WEIGHT} from '../../../../constants';
import CustomTextInput from '../../../../components/forms/TextInput';
import {scale, verticalScale} from '../../../../constants/responsive';
import ListCard from '../../common/ListCard';
import styles from './styles';
import commonstyles from '../../../../constants/common';
import CustomText from '../../../../components/common/CustomText/CustomText';

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
        statusBarColor={COLORS.transparent}
        style={{paddingTop: scale(0)}}
        statusBarStyle="light-content">
        <Container keyboardAware style={{paddingBottom: 7}} flex={0}>
          <CustomTextInput
            flex={0}
            placeholder="Search here..."
            leftIcon
            leftIconType="MaterialIcons"
            leftIconSource="search"
            leftIconColor={
              Search.length > 0 ? COLORS.textPrimary : COLORS.textPrimaryLight
            }
            value={Search}
            TextColor={COLORS.textPrimary}
            BorderColor={COLORS.textPrimaryLight}
            onChangeText={text => SetSearch(text)}
            textInputStyle={{
              fontWeight: FONT_WEIGHT.medium,
              borderRadius: scale(15),
              height: verticalScale(55),
            }}
            placeholderTextColor={COLORS.textPrimaryLight}
          />
        </Container>
        <Container scrollable>
          <Column style={[styles.ListCardContainer]}>
            {data.map((item, index) => {
              return (
                <ListCard
                  key={index}
                  list_item_style={[commonstyles.bgWhite]}
                  Conatinerstyle={[styles.ListCardStyle]}>
                  <Text style={[styles.text]}>{item}</Text>
                </ListCard>
              );
            })}
          </Column>
          {/* <Row align="center" justify="center">
            <CustomText
              TextColor={COLORS.textDark}
              fontWeight={FONT_WEIGHT.regular}
              fontSize={FONT_SIZE.base}>
              No results found for your search
            </CustomText>
          </Row> */}
        </Container>
      </SafeArea>
      <Footer style={{backgroundColor: COLORS.white}} />
    </>
  );
};

export default DashboardSearch;
