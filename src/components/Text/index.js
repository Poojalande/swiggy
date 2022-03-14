import React from 'react';
import {Text, Platform} from 'react-native';

export const CustomText = props => {
  return (
    <Text
      {...props}
      style={
        Platform.OS == 'android'
          ? {color: 'black', ...props.style}
          : {...props.style}
      }>
      {props.children}
    </Text>
  );
};
