import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {CustomText} from '../Text';

function LocationHeader() {
  return (
    <View style={{flexDirection: 'row', paddingVertical: 5}}>
      <View style={{flex: 1, paddingRight: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="location" size={25} color="green" />
          <CustomText style={{fontWeight: '900', fontSize: 17, marginLeft: 5}}>
            Erandwane Pune
          </CustomText>
        </View>
        <CustomText
          numberOfLines={1}
          style={{
            color: '#9AA0A6',
            fontWeight: '600',
            marginTop: 3,
            fontSize: 13,
          }}>
          Krishna nagar society,near mantri hospital
        </CustomText>
      </View>
      <View
        style={{
          width: 80,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon2 name="brightness-percent" size={25} color="blue" />
        <CustomText
          numberOfLines={1}
          style={{marginLeft: 8, fontWeight: '600'}}>
          Offers
        </CustomText>
      </View>
    </View>
  );
}

export default LocationHeader;
