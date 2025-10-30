import {View, Text, Pressable, Image} from 'react-native';
import Styles from './Styles';
import {DynamicIcon} from '../../../../components/common/Icon';
import {scale} from '../../../../constants/responsive';
import {COLORS} from '../../../../constants';
const RecommendedDoctor = ({data}) => {
  const {status, name, rating, specialist, doctor_experience, onPress} = data;
  return (
    <View style={[Styles.doctor_card]}>
      <View style={[Styles.upper_card]}>
        <View style={[Styles.upper_card_one]}>
          <View>
            <Image
              source={{uri: 'https://i.pravatar.cc/100'}}
              style={[Styles.doctor_image]}
            />
          </View>
          <View>
            <View
              style={
                status === 'Available'
                  ? Styles.doctor_available
                  : Styles.doctor_unavailable
              }>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={
                  status === 'Available'
                    ? Styles.available_text
                    : Styles.unavailable_text
                }>
                {status}
              </Text>
            </View>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[Styles.doctor_name]}>
              {name}
            </Text>
            <View style={[Styles.doctor_rating]}>
              <DynamicIcon
                type="AntDesign"
                size={scale(10)}
                name="star"
                color={COLORS.warning}
              />
              <Text style={[Styles.doctor_specialist]}>{rating}{" "} |</Text>
              <Text
                style={[Styles.doctor_specialist]}
                numberOfLines={1}
                ellipsizeMode="tail">
                {specialist}
              </Text>
            </View>
          </View>
          <View style={[Styles.doctor_experience]}>
            <Text numberOfLines={1} ellipsizeMode="tail" style={[Styles.years]}>
              {doctor_experience}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[Styles.years_text]}>
              Yrs Exp.
            </Text>
          </View>
        </View>
      </View>
      <View style={[Styles.bottom_card]}>
        <Pressable
          style={({pressed}) => [ pressed && {opacity: 0.8}]}
          android_ripple={{color: 'rgba(0, 0, 0, 0.05)'}}
          onPress={onPress}>
          <Text style={Styles.book_appointments_btn}>Book Appointment</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RecommendedDoctor;
