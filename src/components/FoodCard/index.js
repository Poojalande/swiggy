import {View, Text, Image} from 'react-native';
import React from 'react';
import {CustomText} from '../Text';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const index = ({image}) => {
  return (
    <View style={{paddingHorizontal: 15, flexDirection: 'row'}}>
      <View>
        <Image
          style={{width: 80, height: 100, borderRadius: 5}}
          source={{
            uri: image,
          }}
        />
        <View
          style={{
            backgroundColor: 'white',
            width: 70,
            height: 30,
            paddingHorizontal: 5,
            marginTop: -26,
            marginLeft: 5,
            borderRadius: 5,
          }}>
          <CustomText
            style={{
              fontSize: 12,
              color: '#E45826',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            80% OFF
          </CustomText>
          <CustomText
            style={{
              color: '#E45826',
              fontSize: 8,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            UPTO ₹ 700
          </CustomText>
        </View>
      </View>

      <View
        style={{
          paddingLeft: 15,
          justifyContent: 'center',
        }}>
        <CustomText style={{fontSize: 16, fontWeight: 'bold'}}>
          Little King
        </CustomText>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon2 name="star" size={20} color="gray" />
          <CustomText style={{fontSize: 12}}> 3.9 - </CustomText>
          <CustomText style={{fontSize: 12}}> 34 mins -</CustomText>
          <CustomText style={{fontSize: 12}}> ₹ 500 for two </CustomText>
        </View>
        <CustomText style={{fontSize: 12, color: 'gray', opacity: 0.8}}>
          North Indian, Chinese, Combo, Desserts
        </CustomText>
        <CustomText style={{fontSize: 12, color: 'gray', opacity: 0.8}}>
          Mira Road
        </CustomText>
      </View>
    </View>
  );
};

export default index;
