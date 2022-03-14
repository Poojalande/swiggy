import React from 'react';
import {View, ImageBackground} from 'react-native';
import {CustomText} from '../../../components/Text';

export const TopPicCard = props => {
  return (
    <View style={{width: 74, marginRight: 20,height:160}}>
      <ImageBackground
        style={{
          width: 74,
          height: 85,
          borderRadius: 12,
          overflow: 'hidden',
          justifyContent: 'flex-end',
          paddingBottom: 5,
          paddingLeft: 3,
        }}
        source={{uri: props.imageURI}}>
        {props.off ? (
          <View
            style={{
              width: 74,
              height: 85,
              backgroundColor: 'rgba(0,0,0,0.4)',
              position: 'absolute',
            }}></View>
        ) : null}
        {props.off ? (
          <>
            <CustomText
              style={{
                color: 'white',
                fontWeight: '800',
                fontSize: 12,
                marginLeft: 5,
              }}>
              {props.off} OFF
            </CustomText>
            <CustomText
              style={{
                color: 'white',
                opacity: 0.9,
                fontSize: 9,
                marginLeft: 5,
                fontWeight: '600',
              }}>
              UPTO ₹{props.upTo}
            </CustomText>
          </>
        ) : null}
      </ImageBackground>
      <CustomText
        style={{fontSize: 12, marginTop: 5, marginLeft: 2, fontWeight: '600'}}>
        {props.name}
      </CustomText>
      <CustomText style={{fontSize: 10, marginTop: 5, marginLeft: 2}}>
        {props.time}
      </CustomText>
    </View>
  );
};
