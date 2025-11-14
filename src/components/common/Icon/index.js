import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from "react-native-vector-icons/Octicons";

// Dynamic icons
export const DynamicIcon = ({
  type,
  name,
  size = 15,
  color = 'black',
  style,
}) => {
  let IconComponent;
  switch (type) {
    case 'AntDesign':
      IconComponent = AntDesign;
      break;
    case 'Foundation':
      IconComponent = Foundation;
      break;
    case 'Feather':
      IconComponent = Feather;
      break;
    case 'FontAwesome5':
      IconComponent = FontAwesome5;
      break;
    case 'Ionicons':
      IconComponent = Ionicons;
      break;
    case 'SimpleLineIcons':
      IconComponent = SimpleLineIcons;
      break;
    case 'MaterialIcons':
      IconComponent = MaterialIcons;
      break;
    case 'Entypo':
      IconComponent = Entypo;
      break;
    case 'FontAwesome6':
      IconComponent = FontAwesome6;
      break;
    case 'Fontisto':
      IconComponent = Fontisto;
      break;
    case 'Octicons':
      IconComponent = Octicons;
      break;
    default:
      IconComponent = AntDesign;
  }

  return (
    <IconComponent name={name} size={size} color={color} style={[style]} />
  );
};
