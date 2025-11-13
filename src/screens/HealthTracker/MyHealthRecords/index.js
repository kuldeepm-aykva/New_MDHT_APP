import {View, Text} from 'react-native';
import {useState} from 'react';
import Header from '../../../components/layout/Header';
import {Column, Container, Row, SafeArea} from '../../../components/layout';
import Footer from '../../../components/layout/Footer';
import CustomTextInput from '../../../components/forms/TextInput';
import {COLORS, FONT_SIZE, FONT_WEIGHT, RADIUS} from '../../../constants';
import {scale, verticalScale} from '../../../constants/responsive';
import ListCard from '../../Dashboard/common/ListCard';
import CustomText from '../../../components/common/CustomText/CustomText';
import {DynamicIcon} from '../../../components/common/Icon';
import {ROUTES} from '../../../navigation/routes';

const MyHealthRecords = ({navigation}) => {
  const [search, setSearch] = useState('');
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
      time: '02:55 pm',
      date: '28 September 2024',
      issue: 'Fever',
      type: 'Symptom',
    },
    {
      id: 5,
      time: '02:55 pm',
      date: '28 September 2024',
      issue: 'Fever',
      type: 'Symptom',
    },
    {
      id: 6,
      time: '02:55 pm',
      date: '28 September 2024',
      issue: 'Fever',
      type: 'Symptom',
    },
    {
      id: 7,
      time: '02:55 pm',
      date: '28 September 2024',
      issue: 'Fever',
      type: 'Symptom',
    },
    {
      id: 8,
      time: '02:55 pm',
      date: '28 September 2024',
      issue: 'Fever',
      type: 'Symptom',
    },
    {
      id: 9,
      time: '02:55 pm',
      date: '28 September 2024',
      issue: 'Fever',
      type: 'Symptom',
    },
  ];

  return (
    <>
      <Header
        title="My Health Records"
        SearchPress={() => {
          navigation.navigate(ROUTES.DashboardSearch);
        }}
        NotificationPress
      />
      <SafeArea style={{paddingTop: scale(5)}}>
        <Container keyboardAware style={{paddingBottom: 7}} flex={0}>
          <CustomTextInput
            flex={0}
            placeholder="Search Disease/Symptom"
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
        </Container>
        <Container scrollable>
          <Column>
            {healthRecords.map((item, index) => {
              return (
                <ListCard
                  onPress={() => {
                    navigation.navigate(ROUTES.SingleHealthDisease);
                  }}
                  key={item.id}
                  outerProps={{
                    BgColor: COLORS.transparent,
                  }}
                  innerProps={{
                    BgColor: COLORS.bg_light,
                  }}>
                  <Row align="center" justify="space-between">
                    <Column spacing={3}>
                      <CustomText
                        fontSize={FONT_SIZE.sm}
                        TextColor={COLORS.textPrimary}>
                        Updated : {item.time} | {item.date}
                      </CustomText>
                      <CustomText
                        TextColor={COLORS.textDark}
                        fontWeight={FONT_WEIGHT.medium}>
                        {item.issue} -{' '}
                        <CustomText
                          TextColor={COLORS.textPrimary}
                          fontSize={FONT_SIZE.sm}
                          fontWeight={FONT_WEIGHT.regular}>
                          {item.type}
                        </CustomText>
                      </CustomText>
                    </Column>
                    <DynamicIcon
                      size={scale(15)}
                      color={COLORS.textPrimary}
                      type="Entypo"
                      name="chevron-right"
                    />
                  </Row>
                </ListCard>
              );
            })}
          </Column>
        </Container>
      </SafeArea>
      <Footer />
    </>
  );
};

export default MyHealthRecords;
