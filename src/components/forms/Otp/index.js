import { View, TextInput } from 'react-native';
import React, { useRef, useState } from "react";
import styles from './styles';


const OtpInput = ({ length = 4, onOtpChange ,mainConatinerStyle,OtpInputStyle}) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    onOtpChange && onOtpChange(newOtp.join(""));

    if (text && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = ({ nativeEvent }, index) => {
    if (nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputs.current[index - 1].focus();
      onOtpChange && onOtpChange(newOtp.join(""));
    }
  };

  return (
    <View style={[styles.container,mainConatinerStyle]}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputs.current[index] = ref)}
          style={[styles.input,OtpInputStyle]}
          value={digit}
          keyboardType="number-pad"
          maxLength={1}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
        />
      ))}
    </View>
  );
};


export default OtpInput;
