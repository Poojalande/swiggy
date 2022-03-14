import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {CustomText} from '../Text';

const TagCard = props => {
  return (
    <View style={{maxWidth: 140, height: 40, marginBottom: 10}}>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 0.4,
          borderRadius: 20,
          borderColor: 'gray',
          marginRight: 10,
          overflow: 'hidden',
          height: '100%',
        }}>
        <Icon name="history" size={20} color="gray" style={{opacity: 0.5}} />
        <View style={{marginRight: 4}}>
          <CustomText
            numberOfLines={1}
            style={{paddingLeft: 7, fontSize: 10, opacity: 0.7}}>
            {props.name}
          </CustomText>
        </View>
      </View>
    </View>
  );
};

export default TagCard;
