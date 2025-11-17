import {View, Text, Image} from 'react-native';
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
  const [firstTime, setfirstTime] = useState(false);
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
        <Container scrollable>
          <View style={[styles.main_card]}>
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
                fontWeight={FONT_WEIGHT.regular}>
                Acyanotic heart disease refers to a group of congenital heart
                defects where oxygen-rich blood continues to circulate through
                the body, so the skin doesn't turn blue (no cyanosis). Common
                types include ventricular septal defect (VSD) and atrial septal
                defect (ASD). It may cause symptoms like fatigue, rapid
                breathing, or poor growth in children.
              </CustomText>
            </Column>
            <Column>
              {data.map((data, index) => {
                return (
                  <Slider
                    key={index}
                    label={data.title}
                    containerStyle={{marginTop: scale(22)}}
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

          {/* <View style={[styles.main_card]}>
            <Row align="center" style={[styles.upload_file]} justify="space-between">
              <Column>
                <CustomText
                  TextColor={COLORS.black}
                  fontWeight={FONT_WEIGHT.bold}
                  fontSize={FONT_SIZE.sm}>
                  Upload file
                </CustomText>
                <CustomText
                  TextColor={COLORS.textPrimary}
                  fontWeight={FONT_WEIGHT.medium}>
                  Images
                </CustomText>
              </Column>
              <CustomButton
                text="Upload"
                variant="outline"
                BorderColor={COLORS.borderSecondary}
                CustomRadius={RADIUS.lg}
                size="small"
                icon="download"
                onPress={() => handleUploadDocument({setUploads})}
                iconSize={scale(14)}
                icontype="Feather"
                iconcolor={COLORS.primary}
              />
            </Row>

            <View>
              <Column
              style={[styles.PdfList]}
                spacing={scale(10)}
                >
                {uploads.map((file, index) => {
                  if (!file.isImage) {
                    return (
                      <Row
                        key={index}
                        align="center"
                        justify="space-between"
                        style={styles.PdfContainer}>
                        <Row
                          align="center"
                          spacing={scale(10)}
                          style={{flex: 1, marginRight: scale(10)}}>
                          <DynamicIcon
                            name="file-pdf"
                            color={COLORS.error}
                            size={scale(18)}
                            type="FontAwesome5"
                          />
                          <CustomText
                            fontWeight={FONT_WEIGHT.semiBold}
                            fontSize={FONT_SIZE.sm}
                            TextColor={COLORS.black}
                            numberOfLines={1}
                            style={{flex: 1}}>
                            {file.name}
                          </CustomText>
                        </Row>
                        <CircularIcon
                          name="close"
                          type="Ionicons"
                          iconColor={COLORS.textPrimary}
                          variant="ghost"
                          size={scale(18)}
                          onPress={() => {
                            setUploads(prev =>
                              prev.filter((_, i) => i !== index),
                            );
                          }}
                        />
                      </Row>
                    );
                  }
                  return null;
                })}
              </Column>
              <Row
                align="flex-start"
                spacing={scale(10)}
                style={{flexWrap: 'wrap',}}>
                {uploads.map((file, index) => {
                  if (file.isImage) {
                    return (
                      <View key={index} style={styles.ImageUploadContainer}>
                        <View style={styles.Image_Container}>
                          <Image
                            source={{uri: file.uri}}
                            style={styles.upload_images}
                          />
                        </View>
                        <CircularIcon
                          name="cross"
                          type="Entypo"
                          iconColor={COLORS.white}
                          variant="outline"
                          BgColor={COLORS.error}
                          containerStyle={styles.CrossStyle}
                          Radius="full"
                          size={scale(14)}
                          p={3}
                          BorderColor={COLORS.transparent}
                          onPress={() => {
                            setUploads(prev =>
                              prev.filter((_, i) => i !== index),
                            );
                          }}
                        />
                      </View>
                    );
                  }
                  return null;
                })}
              </Row>
            </View>

            <CustomButton
              text="Add Comments for Care Team"
              variant="outline"
              textAlign="left"
              icon="plus"
              mt={SPACING.md}
              btnStyle={{
                justifyContent: 'flex-start',
              }}
              iconSize={scale(16)}
              iconcolor={COLORS.textPrimary}
              icontype="Entypo"
              BorderColor={COLORS.borderSecondary}
              TextColor={COLORS.textPrimary}
              fontSize="sm"
              size="small"
              textStyle={{
                textAlign: 'start',
              }}
              py={15}
              CustomRadius={RADIUS.lg}
            />
          </View> */}
          <FileUploadSection
            uploads={uploads}
            setUploads={setUploads}
            onUpload={() => handleUploadDocument({setUploads})}
          />

          <CustomButton
            CustomRadius={RADIUS[14]}
            BorderColor={COLORS.borderSecondary}
            text="Submit New Record"
            variant="outline"
          />
        </Container>

        {firstTime && (
          <Container style={[styles.btn_container]} flex={0}>
            <CustomButton
              fullWidth
              Radius="lg"
              variant="primary"
              fontSize="sm"
              TextColor={COLORS.white}
              text="Start Symptom Tracking"
            />
            <Slider
              label="Heart Murmur Severity ?"
              minValue={0}
              maxValue={10}
              colors={['#6CC884', '#FFD242', '#FF6B7A']}
            />
            <Row align="center" justify="space-between">
              <CustomButton
                text="Back"
                variant="outline"
                BorderColor={COLORS.borderSecondary}
                CustomRadius={RADIUS.lg}
                size="small"
                px={SPACING.xl}
              />
              <CustomButton
                text="Skip"
                variant="white"
                fontWeight={FONT_WEIGHT.regular}
                TextColor={COLORS.textPrimary}
              />
              <CustomButton
                text="Next"
                variant="outline"
                BorderColor={COLORS.primary}
                CustomRadius={RADIUS.lg}
                size="small"
                fontWeight={FONT_WEIGHT.regular}
                TextColor={COLORS.primary}
                px={SPACING.xl}
              />
            </Row>
          </Container>
        )}
      </SafeArea>

      <Footer />
    </>
  );
};

export default SingleHealthTracker;
