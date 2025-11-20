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
  LINE_HEIGHT,
  RADIUS,
  SPACING,
} from '../../../constants';
import CustomText from '../../../components/common/CustomText/CustomText';
import Slider from '../../../components/common/slider';
import CircularIcon from '../../../components/common/CircularIcon';
import {handleUploadDocument} from '../../../utils/imagePicker';
import {DynamicIcon} from '../../../components/common/Icon';
import FileUploadSection from '../../../components/common/FileUpload';
import CustomModal from '../../../components/common/Modal';

const SingleHealthTracker = ({navigation}) => {
  const [firstTime, setFirstTime] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [uploads, setUploads] = useState([]);
  const [symptomValues, setSymptomValues] = useState({});
  const [InfoModal, setInfoModal] = useState(false);
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  const conditionData = {
    name: 'Acyanotic Heart Disease',
    description:
      'Acyanotic heart disease refers to a group of congenital heart defects where oxygen-rich blood continues to circulate through the body, so the skin doesn"t turn blue (no cyanosis). Common types include ventricular septal defect (VSD) and atrial septal defect (ASD). It may cause symptoms like fatigue, rapid breathing, or poor growth in children.',
  };

  const symptoms = [
    {
      id: '1',
      title: 'Heart Murmur Severity ?',
      description:
        'A heart murmur is an unusual sound heard during a heartbeat, often described as a whooshing or swishing noise. It can be harmless (innocent) or signal an underlying heart problem like valve issues or congenital defects. Tracking heart murmurs over time helps detect changes in severity, monitor symptoms like shortness of breath or fatigue, and supports early diagnosis or treatment if the condition worsens.',
    },
    {
      id: '2',
      title: 'Breathlessness',
      description:
        'A heart murmur is an unusual sound heard during a heartbeat, often described as a whooshing or swishing noise. It can be harmless (innocent) or signal an underlying heart problem like valve issues or congenital defects. Tracking heart murmurs over time helps detect changes in severity, monitor symptoms like shortness of breath or fatigue, and supports early diagnosis or treatment if the condition worsens.',
    },
    {
      id: '3',
      title: 'Dizziness',
      description:
        'A heart murmur is an unusual sound heard during a heartbeat, often described as a whooshing or swishing noise. It can be harmless (innocent) or signal an underlying heart problem like valve issues or congenital defects. Tracking heart murmurs over time helps detect changes in severity, monitor symptoms like shortness of breath or fatigue, and supports early diagnosis or treatment if the condition worsens.',
    },
    {
      id: '4',
      title: 'Fatigue',
      description:
        'A heart murmur is an unusual sound heard during a heartbeat, often described as a whooshing or swishing noise. It can be harmless (innocent) or signal an underlying heart problem like valve issues or congenital defects. Tracking heart murmurs over time helps detect changes in severity, monitor symptoms like shortness of breath or fatigue, and supports early diagnosis or treatment if the condition worsens..',
    },
    {
      id: '5',
      title: 'Fainting',
      description:
        'A heart murmur is an unusual sound heard during a heartbeat, often described as a whooshing or swishing noise. It can be harmless (innocent) or signal an underlying heart problem like valve issues or congenital defects. Tracking heart murmurs over time helps detect changes in severity, monitor symptoms like shortness of breath or fatigue, and supports early diagnosis or treatment if the condition worsens.',
    },
  ];

  const handleNext = () => {
    if (currentStep === 0) {
      // Move from intro to first symptom
      setCurrentStep(1);
    } else if (currentStep <= symptoms.length) {
      // Move to next symptom or upload section
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSkip = () => {
    if (currentStep > 0 && currentStep <= symptoms.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSliderChange = (symptomId, value) => {
    setSymptomValues(prev => ({
      ...prev,
      [symptomId]: value,
    }));
  };

  const handleSubmit = () => {
    // Save data and mark as not first time
    console.log('Symptom Values:', symptomValues);
    console.log('Uploads:', uploads);
    setFirstTime(false);
    // Reset for next time
    setCurrentStep(0);
  };

  // FIRST TIME FLOW - Multi-step wizard
  if (firstTime) {
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
          <Container>
            <Container py={0} px={0} style={[styles.main_card]}>
              {/* Step 0: Introduction */}
              {currentStep === 0 && (
                <>
                  <Container flex={1} py={0} px={0} scrollable>
                    <CustomText
                      TextColor={COLORS.black}
                      fontWeight={FONT_WEIGHT.medium}
                      BgColor={COLORS.transparent}
                      mb="sm">
                      {conditionData.name}
                    </CustomText>
                    <CustomText
                      TextColor={COLORS.textPrimary}
                      BgColor={COLORS.transparent}
                      fontSize={FONT_SIZE.sm}
                      fontWeight={FONT_WEIGHT.regular}>
                      {conditionData.description}
                    </CustomText>
                  </Container>
                  <Container py={SPACING.sm} px={0} flex={0}>
                    <CustomButton
                      text="Start Symptom Tracking"
                      CustomRadius={RADIUS.lg}
                      onPress={handleNext}
                    />
                  </Container>
                </>
              )}

              {/* Steps 1-5: Individual Symptoms */}
              {currentStep > 0 && currentStep <= symptoms.length && (
                <>
                  <Container flex={1} py={0} px={0} scrollable>
                    <CustomText
                      TextColor={COLORS.black}
                      fontWeight={FONT_WEIGHT.medium}
                      BgColor={COLORS.transparent}
                      mb="sm">
                      {symptoms[currentStep - 1].title}
                    </CustomText>

                    <CustomText
                      TextColor={COLORS.textPrimary}
                      BgColor={COLORS.transparent}
                      fontSize={FONT_SIZE.sm}
                      fontWeight={FONT_WEIGHT.regular}
                      mb="md">
                      {symptoms[currentStep - 1].description}
                    </CustomText>
                  </Container>

                  <Container py={SPACING.sm} px={0} flex={0}>
                    <Slider
                      label={symptoms[currentStep - 1].title}
                      minValue={0}
                      maxValue={10}
                      value={symptomValues[symptoms[currentStep - 1].id] ?? 0} // FIX
                      onValueChange={value =>
                        handleSliderChange(symptoms[currentStep - 1].id, value)
                      }
                      colors={['#6CC884', '#FFD242', '#FF6B7A']}
                    />

                    <Row
                      align="center"
                      justify="space-between"
                      style={{marginTop: scale(20)}}>
                      <CustomButton
                        text="Back"
                        variant="outline"
                        BorderColor={COLORS.borderSecondary}
                        CustomRadius={RADIUS.lg}
                        size="small"
                        px={SPACING.xl}
                        onPress={handleBack}
                      />

                      <CustomButton
                        text="Skip"
                        variant="white"
                        fontWeight={FONT_WEIGHT.regular}
                        TextColor={COLORS.textPrimary}
                        onPress={handleSkip}
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
                        onPress={handleNext}
                      />
                    </Row>
                  </Container>
                </>
              )}

              {/* Step 6: Upload Section */}
              {currentStep === symptoms.length + 1 && (
                <>
                  <Container flex={1} py={0} px={0} scrollable></Container>
                  <Container px={0} flex={0}>
                    <FileUploadSection
                      uploads={uploads}
                      setUploads={setUploads}
                      onUpload={() => handleUploadDocument({setUploads})}
                    />
                    <CustomButton
                      CustomRadius={RADIUS.lg}
                      BorderColor={COLORS.borderSecondary}
                      text="Submit New Record"
                      variant="outline"
                      fullWidth
                      fontWeight={FONT_WEIGHT.bold}
                      onPress={() => {
                        console.log('Submitting:', symptomValues, uploads);
                      }}
                    />
                  </Container>
                </>
              )}
            </Container>
          </Container>
        </SafeArea>
        <Footer />
      </>
    );
  }

  // SUBSEQUENT TIMES - Single page with all symptoms
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
          <View style={styles.main_card}>
            <Column>
              <CustomText
                TextColor={COLORS.black}
                fontWeight={FONT_WEIGHT.medium}
                BgColor={COLORS.transparent}
                mb="sm">
                {conditionData.name}
              </CustomText>
              <CustomText
                TextColor={COLORS.textPrimary}
                BgColor={COLORS.transparent}
                fontSize={FONT_SIZE.sm}
                fontWeight={FONT_WEIGHT.regular}
                mb="md">
                {conditionData.description}
              </CustomText>
            </Column>

            {/* All Sliders at once */}
            <Column>
              {symptoms.map((item, index) => {
                return (
                  <Slider
                    key={item.id}
                    label={item.title}
                    containerStyle={{marginTop: index === 0 ? 0 : scale(16)}}
                    skipLabel="Skip"
                    onInfoPress={() => {
                      setInfoModal(true);
                      setSelectedSymptom(item);
                    }}
                    minValue={0}
                    maxValue={10}
                 
                    value={symptomValues[item.id]}
                    onValueChange={value => handleSliderChange(item.id, value)}
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
            onPress={() => {
              console.log('Submitting:', symptomValues, uploads);
              // Handle submission
            }}
          />
        </Container>
      </SafeArea>
      <Footer />
      <CustomModal
        OnclosePress={() => {
          setInfoModal(!InfoModal);
          setSelectedSymptom(null);
        }}
        modalContainerStyle={[styles.InfoModal]}
        visible={InfoModal}
        onClose={() => setInfoModal(false)}>
        <CustomText
          fontSize={FONT_SIZE.base}
          fontWeight={FONT_WEIGHT.semiBold}
          TextColor={COLORS.textDark}
          mb={SPACING.sm}
          numberOfLines={2}>
          {selectedSymptom?.title || 'Symptom Information'}
        </CustomText>
        <CustomText
          fontSize={FONT_SIZE.sm}
          fontWeight={FONT_WEIGHT.regular}
          TextColor={COLORS.textPrimary}>
          {selectedSymptom?.description || 'No description available'}
        </CustomText>
      </CustomModal>
    </>
  );
};

export default SingleHealthTracker;
