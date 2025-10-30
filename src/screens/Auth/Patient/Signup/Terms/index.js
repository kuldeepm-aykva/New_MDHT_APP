import {View, Text, TouchableOpacity, Pressable, Image} from 'react-native';
import {useState} from 'react';
import {
  Center,
  Column,
  Container,
  Row,
  SafeArea,
} from '../../../../../components/layout';
import {PatientIcon} from '../../../../../assets/svgImage';
import commonstyles from '../../../../../constants/common';
import CommonAuthStyles from '../../../styles';
import {COLORS} from '../../../../../constants';
import {verticalScale} from '../../../../../constants/responsive';
import CommonCheckBox from '../../../../../components/forms/Checkbox';
import styles from './styles';
import {DynamicIcon} from '../../../../../components/common/Icon';

const ConsentTerms = () => {
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [consent, setConsent] = useState(false);
  return (
    <SafeArea backgroundColor={COLORS.white} statusBarStyle="dark-content">
      <Container padding="xlarge" centered keyboardAware>
        <Center style={[CommonAuthStyles.img_container]}>
          <PatientIcon width={180} height={110} margin={5} />
        </Center>

        <Text style={[commonstyles.title, commonstyles.black]}>
          Almost there!
        </Text>
        <Text style={[commonstyles.subtitle]}>
          Please read our{' '}
          <TouchableOpacity>
            <Text
              style={[
                commonstyles.primary,
                commonstyles.fontSemiBold,
                {top: verticalScale(4)},
              ]}>
              Privacy Policy
            </Text>
          </TouchableOpacity>
          {'\n'} to confirm the following declarations.
        </Text>

        <Column
          align="center"
          justify="center"
          style={[styles.terms_container]}>
          <CommonCheckBox
            value={agreeTerms}
            onValueChange={setAgreeTerms}
            label="I agree to MDHealthTrak’s 
and confirm that I am at least 16 years old."
            linkText="Terms of Use"
            onLinkPress={() => console.log('Terms pressed')}
          />
          <CommonCheckBox
            value={consent}
            onValueChange={setConsent}
            label="I consent to MDHealthTrak using any personal health data. I voluntarily share here so MDHealthTrak can create and personalise my account and provide health assessments and guidance."
          />
        </Column>

        <TouchableOpacity style={[styles.main_container]}>
          <Row
            justify="center"
            align="center"
            style={[commonstyles.active_arrow]}>
            <DynamicIcon
              type="FontAwesome6"
              name="arrow-right-long"
              color={COLORS.white}
            />
          </Row>
        </TouchableOpacity>
      </Container>
    </SafeArea>
  );
};

export default ConsentTerms;
