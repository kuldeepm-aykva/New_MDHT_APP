import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const defaultOptions = {
  mediaType: 'photo',
  includeBase64: false,
  selectionLimit: 1,
};

// Updated to accept setUploads instead of setFiles
export const handleUploadDocument = async ({ setUploads }) => {
  try {
    const result = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
      allowMultiSelection: false,
    });

    const file = result[0];

    setUploads(prev => [
      ...prev,
      {
        uri: file.uri,
        name: file.name,
        type: file.type,
        isImage: file.type?.includes('image'),
      },
    ]);
  } catch (err) {
    if (!DocumentPicker.isCancel(err)) {
      Alert.alert('File Error', 'Unable to pick document');
      console.log('Document picker error:', err);
    }
  }
};

// gallery
export const handleUploadFromGallery = ({ setUploads }) => {
  launchImageLibrary(defaultOptions, response => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorCode) {
      Alert.alert('Gallery Error', response.errorMessage || 'Something went wrong');
    } else {
      const source = response.assets?.[0];
      if (source) {
        setUploads(prev => [
          ...prev,
          {
            uri: source.uri,
            type: source.type,
            name: source.fileName,
            isImage: true,
          },
        ]);
      }
    }
  });
};

// camera
export const handleTakePhoto = async ({ setUploads }) => {
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
      const source = response.assets?.[0];
      if (source) {
        setUploads(prev => [
          ...prev,
          {
            uri: source.uri,
            type: source.type,
            name: source.fileName,
            isImage: true,
          },
        ]);
      }
    }
  });
};