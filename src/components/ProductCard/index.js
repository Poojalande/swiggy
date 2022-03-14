import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {CustomText} from '../Text';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductCard = () => {
  return (
    <View style={{width: 150, marginRight: 20, marginBottom: 20}}>
      <ImageBackground
        style={{width: 150, height: 100, justifyContent: 'flex-end'}}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0zT2-2s9hjWzJ_CkYD79XVoOEwJrHK88-Q&usqp=CAU',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            paddingHorizontal: 5,
            paddingVertical: 3,
            width: 120,
            marginBottom: 10,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 5,
          }}>
          <CustomText
            numberOfLines={1}
            style={{color: 'red', fontWeight: '800', fontSize: 11}}>
            60% OFF
          </CustomText>
          <CustomText numberOfLines={1} style={{color: 'red', fontSize: 11}}>
            {' '}
            UPTO ₹180
          </CustomText>
        </View>
      </ImageBackground>
      <CustomText
        numberOfLines={1}
        style={{fontSize: 13, marginBottom: 5, marginTop: 5}}>
        Chaitanya Parathas
      </CustomText>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon2 name="star" size={16} color="#F0A500" />
        <Icon2 name="star" size={16} color="#F0A500" />

        <CustomText style={{fontSize: 11}}> 4.4 - </CustomText>
        <CustomText style={{fontSize: 11}}> 34 mins</CustomText>
      </View>
    </View>
  );
};

export default ProductCard;
