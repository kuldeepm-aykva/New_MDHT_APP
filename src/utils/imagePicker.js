import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Alert, PermissionsAndroid, Platform} from 'react-native';

const defaultOptions = {
  mediaType: 'photo',
  includeBase64: false,
  selectionLimit: 1,
};


// gallery 
export const handleUploadFromGallery = ({
  setImage,
  setErrors,
  setModal,
  key = 'UserProfile',
}) => {
  const options = {...defaultOptions};

  launchImageLibrary(options, response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorCode) {
      Alert.alert(
        'Gallery Error',
        response.errorMessage || 'Something went wrong',
      );
    } else {
      const source = response.assets?.[0]?.uri;
      if (source) {
        setImage(prev => ({...prev, [key]: source}));
        setErrors(prev => ({...prev, [key]: ''}));
        if (setModal) setModal(false);
      }
    }
  });
};

// camera 
export const handleTakePhoto = async ({
  setImage,
  setErrors,
  setModal,
  key = 'UserProfile',
}) => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Camera Permission',
        message: 'App needs camera access to take your photo',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert('Permission Denied', 'Camera access was not granted.');
      return;
    }
  }

  const options = {...defaultOptions, saveToPhotos: true};

  launchCamera(options, response => {
    if (response.didCancel) {
      console.log('User cancelled camera');
    } else if (response.errorCode) {
      Alert.alert('Camera Error', response.errorMessage || 'Something went wrong');
    } else {
      const source = response.assets?.[0]?.uri;
      if (source) {
        setImage(prev => ({...prev, [key]: source}));
        setErrors(prev => ({...prev, [key]: ''}));
        if (setModal) setModal(false);
      }
    }
  });
};
