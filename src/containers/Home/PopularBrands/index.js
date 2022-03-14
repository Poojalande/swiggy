import {View, Text, Image} from 'react-native';
import React from 'react';
import {CustomText} from '../../../components/Text';

const PopularBrandsCard = props => {
  return (
    <View
      style={{
        marginRight: 30,
        marginBottom: 5,
        // backgroundColor: 'red',
        height: 190,
      }}>
      <View
        style={{
          width: 100,
          borderRadius: 10,
          borderWidth: 0.5,
          borderColor: 'gray',
        }}>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: 'gray',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingVertical: 5,
            paddingHorizontal: 5,
            height: 80,
          }}>
          <Image
            resizeMode="contain"
            source={{uri: props.imageURI}}
            style={{width: 60, height: 40}}
          />
        </View>
        <View style={{alignItems: 'center', paddingVertical: 2}}>
          <CustomText style={{color: 'red', fontSize: 10, fontWeight: '800'}}>
            {props.off} OFF
          </CustomText>
          <CustomText style={{color: 'red', fontSize: 8}}>
            UPTO ₹{props.upTo}
          </CustomText>
        </View>
      </View>
      <CustomText
        style={{fontSize: 12, marginTop: 8, fontWeight: '600', marginLeft: 5}}>
        {props.name}
      </CustomText>
      <CustomText
        style={{fontSize: 11, color: 'gray', marginTop: 5, marginLeft: 5}}>
        {props.time}
      </CustomText>
    </View>
  );
};

export default PopularBrandsCard;
