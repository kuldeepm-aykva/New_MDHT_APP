import {View, Text, Image, Button} from 'react-native';
import {useState} from 'react';
import {ROUTES} from '../../../navigation/routes';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import {Column, Container, Row, SafeArea} from '../../../components/layout';
import {scale} from '../../../constants/responsive';
import styles from './styles';
import CustomButton from '../../../components/common/Button';
import {
  COLORS,
  FONT_SIZE,
  FONT_WEIGHT,
  RADIUS,
  SPACING,
} from '../../../constants';
import CustomText from '../../../components/common/CustomText/CustomText';
import Slider from '../../../components/common/slider';
import CircularIcon from '../../../components/common/CircularIcon';
import {handleUploadDocument} from '../../../utils/imagePicker';
import {DynamicIcon} from '../../../components/common/Icon';
import FileUploadSection from '../../../components/common/FileUpload';

const SingleHealthTracker = ({navigation}) => {
  const [firstTime, setFirstTime] = useState(true);
  const [uploads, setUploads] = useState([]);

  const data = [
    {
      id: '1',
      title: 'Heart Murmur Severity?',
    },
    {
      id: '2',
      title: 'Breathlessness',
    },
    {
      id: '3',
      title: 'Dizziness',
    },
    {
      id: '4',
      title: 'Fatigue',
    },
    {
      id: '5',
      title: 'Fainting',
    },
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
      <SafeArea style={{paddingTop: scale(0)}}>
        {firstTime ? (
          // FIRST TIME VIEW - Image 1
          // <Container>
          //   <View style={styles.main_card}>
          //     <Container px={0} py={0} scrollable>
          //       <Column>
          //         <CustomText
          //           TextColor={COLORS.black}
          //           fontWeight={FONT_WEIGHT.medium}
          //           BgColor={COLORS.transparent}
          //           mb="sm">
          //           Heart Murmur
          //         </CustomText>
          //         <CustomText
          //           TextColor={COLORS.textPrimary}
          //           BgColor={COLORS.transparent}
          //           fontSize={FONT_SIZE.sm}
          //           fontWeight={FONT_WEIGHT.regular}>
          //           A heart murmur is an unusual sound heard during a heartbeat,
          //           often described as a whooshing or swishing noise. It can be
          //           harmless (innocent) or signal an underlying heart problem
          //           like valve issues or congenital defects. Tracking heart
          //           murmurs over time helps detect changes in severity, monitor
          //           symptoms like shortness of breath or fatigue, and supports
          //           early diagnosis or treatment if the condition worsens.
          //         </CustomText>
          //       </Column>
          //     </Container>

          //     <View style={{paddingTop: scale(20)}}>
          //       <Slider
          //         label="Heart Murmur Severity?"
          //         minValue={0}
          //         maxValue={10}
          //         colors={['#6CC884', '#FFD242', '#FF6B7A']}
          //       />
          //       <Row
          //         align="center"
          //         justify="space-between"
          //         style={{marginTop: scale(20)}}>
          //         <CustomButton
          //           text="Back"
          //           variant="outline"
          //           BorderColor={COLORS.borderSecondary}
          //           CustomRadius={RADIUS.lg}
          //           size="small"
          //           px={SPACING.xl}
          //         />
          //         <CustomButton
          //           text="Skip"
          //           variant="white"
          //           fontWeight={FONT_WEIGHT.regular}
          //           TextColor={COLORS.textPrimary}
          //           onPress={() => setFirstTime(false)}
          //         />
          //         <CustomButton
          //           text="Next"
          //           variant="outline"
          //           BorderColor={COLORS.primary}
          //           CustomRadius={RADIUS.lg}
          //           size="small"
          //           fontWeight={FONT_WEIGHT.regular}
          //           TextColor={COLORS.primary}
          //           px={SPACING.xl}
          //           onPress={() => setFirstTime(false)}
          //         />
          //       </Row>
          //     </View>
          //   </View>

          // </Container>
          <>
            <Container>
              <View style={[styles.main_card]}>
                <Container>
                  <CustomText
                    TextColor={COLORS.black}
                    fontWeight={FONT_WEIGHT.medium}
                    BgColor={COLORS.transparent}
                    mb="sm">
                    Heart Murmur
                  </CustomText>
                  <CustomText
                    TextColor={COLORS.textPrimary}
                    BgColor={COLORS.transparent}
                    fontSize={FONT_SIZE.sm}
                    fontWeight={FONT_WEIGHT.regular}>
                    A heart murmur is an unusual sound heard during a heartbeat,
                    often described as a whooshing or swishing noise. It can be
                    harmless (innocent) or signal an underlying heart problem
                    like valve issues or congenital defects. Tracking heart
                    murmurs over time helps detect changes in severity, monitor
                    symptoms like shortness of breath or fatigue, and supports
                    early diagnosis or treatment if the condition worsens.
                  </CustomText>
                </Container>
              </View>
            </Container>
          </>
        ) : (
          // SUBSEQUENT TIMES VIEW - Image 2
          <Container scrollable>
            <View style={styles.main_card}>
              <Column>
                <CustomText
                  TextColor={COLORS.black}
                  fontWeight={FONT_WEIGHT.medium}
                  BgColor={COLORS.transparent}
                  mb="sm">
                  Acyanotic Heart Disease
                </CustomText>
                <CustomText
                  TextColor={COLORS.textPrimary}
                  BgColor={COLORS.transparent}
                  fontSize={FONT_SIZE.sm}
                  fontWeight={FONT_WEIGHT.regular}
                  mb="md">
                  Acyanotic heart disease refers to a group of congenital heart
                  defects where oxygen-rich blood continues to circulate through
                  the body, so the skin doesn't turn blue (no cyanosis). Common
                  types include ventricular septal defect (VSD) and atrial
                  septal defect (ASD). It may cause symptoms like fatigue, rapid
                  breathing, or poor growth in children.
                </CustomText>
              </Column>

              {/* Multiple Sliders */}
              <Column>
                {data.map((item, index) => {
                  return (
                    <Slider
                      key={item.id}
                      label={item.title}
                      containerStyle={{marginTop: index === 0 ? 0 : scale(22)}}
                      skipLabel="Skip"
                      onInfoPress
                      minValue={0}
                      maxValue={10}
                      colors={['#6CC884', '#FFD242', '#FF6B7A']}
                    />
                  );
                })}
              </Column>
            </View>

            {/* File Upload Section */}
            <FileUploadSection
              uploads={uploads}
              setUploads={setUploads}
              onUpload={() => handleUploadDocument({setUploads})}
            />

            {/* Submit Button */}
            <CustomButton
              CustomRadius={RADIUS.lg}
              BorderColor={COLORS.borderSecondary}
              text="Submit New Record"
              variant="outline"
              fullWidth
              fontWeight={FONT_WEIGHT.bold}
            />
          </Container>
        )}
      </SafeArea>

      <Footer />
    </>
  );
};

export default SingleHealthTracker;
