import {View, Text} from 'react-native';
import {useState} from 'react';
import {Column, Container, Row, SafeArea} from '../../../components/layout';
import {ROUTES} from '../../../navigation/routes';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import CustomTextInput from '../../../components/forms/TextInput';
import ListCard from '../../Dashboard/common/ListCard';
import {COLORS, FONT_WEIGHT, RADIUS} from '../../../constants';
import {scale, verticalScale} from '../../../constants/responsive';
import styles from './style';
import {DynamicIcon} from '../../../components/common/Icon';
import commonstyles from '../../../constants/common';
import HighlightedText from '../../../components/common/HighlightedText';

const SearchHealthTracker = ({navigation}) => {
  const [search, setSearch] = useState('Heart Disease');

  const data = [
    'AppoiAcyanotic Heart Diseasentment',
    'Adult Congenital Heart Disease',
    'Arrythmia Treatment During Congetinal',
    'Cyanotic Heart Disease',
    'Hypertensive Heart Disease',
    'Radiation Heart Disease',
    'Rheumatic Heart Disease',
    'Structural Heart Disease',
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
      <SafeArea style={{paddingTop: scale(20)}}>
        <Container keyboardAware style={{paddingVertical: 10}} flex={0}>
          <CustomTextInput
            flex={0}
            placeholder="Search here ..."
            leftIcon
            value={search}
            onChangeText={text => setSearch(text)}
            leftIconType="MaterialIcons"
            TextColor={COLORS.textPrimary}
            leftIconSource="search"
            leftIconColor={COLORS.textPrimary}
            placeholderTextColor={COLORS.textPrimary}
            CustomRadius={RADIUS[14]}
            BorderColor={COLORS.textTeritary}
            BgColor={COLORS.white}
            fontSize="md"
            textInputStyle={{
              borderWidth: 0.5,
              height: verticalScale(55),
            }}
          />
        </Container>
        <Container scrollable backgroundColor={COLORS.white}>
          <Column style={[styles.ListCardContainer]}>
            {data.map((item, index) => {
              return (
                <ListCard
                  key={index}
                  onPress={()=>{
                    navigation.navigate(ROUTES.SingleHealthTracker)
                  }}
                  list_item_style={[styles.list_item_style]}
                  Conatinerstyle={[styles.ListCardStyle]}>
                  <Row align="center" justify="space-between">
                    {/* <HighlightedText
                      text={item}
                      highlight={search}
                      textStyle={styles.text}
                      highlightStyle={[styles.HighlightedText]}
                    /> */}
                    <Text style={[styles.text]}>{item}</Text>
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
          {/* <Row align="center" justify="center">
            <Text
              style={[
                commonstyles.textPrimary,
                commonstyles.font14,
                commonstyles.fontMedium,
              ]}>
              No results found for your search.
            </Text>
          </Row> */}
        </Container>
      </SafeArea>
      <Footer />
    </>
  );
};

export default SearchHealthTracker;
