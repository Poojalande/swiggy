import React from 'react';
import {View, Image} from 'react-native';
import {CustomText} from '../Text';

export const CategoryCard = ({title, imgSrc}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        width: 70,
      }}>
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 15,
          overflow: 'hidden',
          borderWidth: 0.5,
          borderColor: 'gray',
          alignItems: 'center',
        }}>
        <Image
          resizeMode="contain"
          style={{width: 60, height: 90}}
          source={{uri: imgSrc}}
        />
      </View>
      <CustomText
        style={{marginTop: 3, fontWeight: '700', textAlign: 'center'}}
        numberOfLines={1}>
        {title}
      </CustomText>
    </View>
  );
};
