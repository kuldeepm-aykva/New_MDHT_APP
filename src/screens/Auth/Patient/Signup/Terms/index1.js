import {View, Text, TouchableOpacity} from 'react-native';
import {Center, Container, SafeArea} from '../../../../../components/layout';
import {PatientIcon} from '../../../../../assets/svgImage';
import commonstyles from '../../../../../constants/common';
import CommonAuthStyles from '../../../styles';
import { COLORS } from '../../../../../constants';

const AccountCreated = () => {
  return (
    <SafeArea backgroundColor={COLORS.white} statusBarStyle="dark-content">
      <Container padding="xlarge" centered keyboardAware>
        <Center style={[CommonAuthStyles.img_container]}>
          <PatientIcon width={180} height={110} margin={5} />
        </Center>

        <Text style={[commonstyles.title, commonstyles.black]}>
          Account Created!
        </Text>
        <Text style={[commonstyles.subtitle]}>
          All set! Your account has been {'\n'}successfully verified.
        </Text>
      </Container>
    </SafeArea>
  );
};

export default AccountCreated;
