import {View, Image} from 'react-native';
import {CustomText} from '../../../components/Text';
import React from 'react';

const CurationsCard = props => {
  return (
    <View style={{width: 80, marginRight: 25, marginBottom: 20}}>
      <Image
        source={{uri: props.imageURI}}
        style={{width: 80, height: 80, borderRadius: 80}}
      />
      <CustomText
        style={{
          textAlign: 'center',
          marginTop: 10,
          fontSize: 12,
          color: '#232629',
        }}>
        {props.name}
      </CustomText>
    </View>
  );
};

export default CurationsCard;
