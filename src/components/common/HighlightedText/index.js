import React from 'react';
import {Text} from 'react-native';
import {COLORS, FONT_WEIGHT} from '../../../constants';

const HighlightedText = ({text, highlight, highlightStyle, textStyle}) => {
  if (!highlight) {
    return <Text style={textStyle}>{text}</Text>;
  }

  const regex = new RegExp(`(${highlight})`, 'ig');
  const parts = text.split(regex);

  return (
    <Text style={textStyle}>
      {parts.map((part, index) => {
        const isMatch = part.toLowerCase() === highlight.toLowerCase();
        return (
          <Text key={index} style={isMatch ? [highlightStyle] : null}>
            {part}
          </Text>
        );
      })}
    </Text>
  );
};

export default HighlightedText;
