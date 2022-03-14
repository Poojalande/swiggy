import React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import More from '../../components/More';
import {CustomText} from '../../components/Text';

function Account() {
  const routes = [
    {
      name: 'My Account',
      subTitle: 'Favourite, Offers & Settings',
      isMore: true,
      bottomLine: true,
      list: [
        {
          name: 'Offers',
        },
        {
          name: 'Favourites',
        },
      ],
    },
    {
      name: 'Addresses',
      subTitle: 'Edit & Add New Addresses',
      isMore: false,
      bottomLine: true,
    },
    {
      name: 'Payments & Refunds',
      subTitle: 'Refunds Status & Payment Modes',
      isMore: true,
      bottomLine: true,
      list: [
        {
          name: 'Payment Modes',
        },
        {
          name: 'Refund Status',
        },
      ],
    },
    {
      name: 'Swiggy Money',
      subTitle: 'View Account Balance & Transactions History',
      isMore: false,
      bottomLine: true,
    },
    {
      name: 'FAQ',
      subTitle: 'View Questions Asked...',
      isMore: false,
      bottomLine: true,
    },
    {
      name: 'Help',
      subTitle: 'FAQs & Links',
      isMore: false,
    },
  ];

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <View
            style={{
              borderBottomWidth: 2,
              paddingBottom: 20,
              marginHorizontal: 15,
              paddingTop: 25,
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <CustomText
                style={{fontWeight: '800', fontSize: 15, marginBottom: 5}}>
                POOJA
              </CustomText>
              <TouchableOpacity>
                <CustomText style={{color: 'orange'}}>EDIT</CustomText>
              </TouchableOpacity>
            </View>
            <CustomText style={{fontSize: 12, color: 'gray'}}>
              +91 - 9834931514 - pooja.lande@gmail.com
            </CustomText>
          </View>
          {routes.map(route => {
            return <More {...route} />;
          })}
        </View>

        <View
          style={{paddingVertical: 5, backgroundColor: 'white', marginTop: 30}}>
          <More name="LOGOUT OPTIONS" />
        </View>

        <CustomText
          style={{
            fontSize: 10,
            color: 'gray',
            textAlign: 'center',
            marginTop: 30,
            marginBottom: 100,
          }}>
          App version 1.0.0 (10273)
        </CustomText>
      </ScrollView>
    </View>
  );
}

export default Account;
