import React from 'react';
import {Text, View, FlatList, Image, ScrollView} from 'react-native';
import LocationHeader from '../../components/LocationHeader';
import FoodCard from '../../components/FoodCard';
import {CustomText} from '../../components/Text';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Seperator from '../../components/Seperator';

function Food() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{paddingHorizontal: 15, paddingTop: 10}}>
        <LocationHeader />
      </View>
      <ScrollView>
        <View style={{marginLeft: 15, marginTop: 10}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={[{}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <>
                  <Image
                    resizeMode="cover"
                    style={{
                      width: 250,
                      height: 200,
                      borderRadius: 10,
                      marginRight: 15,
                    }}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7Q47bULjfjqf7KEsnfsKD5TDyR51m5iRcQ&usqp=CAU',
                    }}
                  />
                  <Image
                    style={{
                      width: 300,
                      height: 200,
                      marginRight: 15,
                      borderRadius: 10,
                    }}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9782YJdsAnSYS7E7C9DAuYQd3q6mVhyIHA&usqp=CAU',
                    }}
                  />
                  <Image
                    style={{
                      width: 300,
                      height: 200,
                      marginRight: 15,
                      borderRadius: 10,
                    }}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4ZFA38o-pJFauTqqihImi9YhaGir8C7fmQ&usqp=CAU',
                    }}
                  />
                </>
              );
            }}
          />
        </View>

        <View
          style={{
            borderColor: '#dddddd',
            borderWidth: 0.5,
            marginVertical: 5,
          }}></View>
        <View style={{marginBottom: 20}}>
          <View style={{marginVertical: 10, marginHorizontal: 15}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={[{}, {}, {}, {}, {}, {}, {}]}
              renderItem={({item}) => {
                return (
                  <>
                    <View>
                      <View
                        style={{
                          backgroundColor: '#dddddd',
                          width: 50,
                          height: 30,
                          marginRight: 20,
                          marginVertical: 10,
                          borderRadius: 5,
                        }}>
                        <Icon
                          style={{
                            marginTop: 15,
                            position: 'absolute',
                            // marginLeft: 15,
                            alignSelf: 'center',
                          }}
                          name="medal"
                          size={22}
                          color="black"
                        />
                      </View>
                      <CustomText
                        numberOfLines={2}
                        style={{
                          color: 'gray',
                          fontSize: 12,
                          width: 50,
                          textAlign: 'center',
                        }}>
                        Top Rated
                      </CustomText>
                      <Text numberOfLines={2}></Text>
                    </View>
                  </>
                );
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
            }}>
            <CustomText
              style={{
                color: 'black',
                fontSize: 10,
                opacity: 0.5,
                letterSpacing: 1.5,
              }}>
              ALL RESTAURANT
            </CustomText>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Icon2
                name="sort-alphabetical-descending"
                size={20}
                color="black"
              />
              <CustomText style={{color: 'gray', fontSize: 12, marginLeft: 5}}>
                SORT / FILTER
              </CustomText>
            </View>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={[{}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 10}}>
                  <FoodCard
                    image={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZUcZKAj4d4uQhbTj4ymFcplbrS6o_maO1Q&usqp=CAU'
                    }
                  />
                </View>
              );
            }}
          />
        </View>
        <Seperator />
        <View style={{marginVertical: 10}}>
          <CustomText
            style={{paddingHorizontal: 15, marginTop: 20, fontWeight: 'bold'}}>
            Restaurants Curated For
          </CustomText>

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={[{}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginVertical: 10,
                    marginHorizontal: 10,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderRadius: 50,
                      backgroundColor: '#aebafe',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: 10,
                    }}>
                    <Image
                      style={{width: 60, height: 60, borderRadius: 50}}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsMdn2-IxcOJuLHR0w8TeIs0_bHRAXXWNuA&usqp=CAU',
                      }}
                    />
                  </View>
                  <CustomText
                    // numberOfLines={1}
                    style={{
                      fontSize: 12,
                      width: 70,
                      textAlign: 'center',
                      marginTop: 7,
                      fontWeight: '800',
                    }}>
                    BIRYANI
                  </CustomText>

                  <CustomText
                    // numberOfLines={1}
                    style={{
                      fontSize: 9,
                      width: 70,
                      textAlign: 'center',
                      marginTop: 10,
                      color: 'gray',
                    }}>
                    10 OPTIONS
                  </CustomText>
                </View>
              );
            }}
          />
        </View>

        <Seperator />

        <FlatList
          style={{marginTop: 20}}
          showsHorizontalScrollIndicator={false}
          data={[{}, {}, {}, {}]}
          renderItem={({item}) => {
            return (
              <View style={{marginVertical: 15}}>
                <FoodCard
                  image={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSohVWEcsQgzCQYZs-3TkB3UhJTHJYImwp1cg&usqp=CAU'
                  }
                />
              </View>
            );
          }}
        />

        <Seperator />

        <View style={{marginVertical: 20, marginBottom: 30, paddingright: 15}}>
          <CustomText
            style={{
              paddingHorizontal: 15,
              marginTop: 20,
              fontWeight: 'bold',
              marginVertical: 10,
              fontSize: 18,
              marginBottom: 20,
            }}>
            Only on Swiggy
          </CustomText>

          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[{}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 10}}>
                  <FoodCard
                    image={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FPRwuj7CRPd3meIQPw3JMMJlDDQCwH8Bqg&usqp=CAU'
                    }
                  />
                </View>
              );
            }}
          />
        </View>
        <Seperator />

        <FlatList
          style={{marginTop: 20, marginBottom: 20}}
          showsHorizontalScrollIndicator={false}
          data={[{}, {}, {}, {}, {}, {}]}
          renderItem={({item}) => {
            return (
              <View style={{marginVertical: 10}}>
                <FoodCard
                  image={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVRRahgkWhaiZiHmh8zn8cBQt2A7S-kycwRQ&usqp=CAU'
                  }
                />
              </View>
            );
          }}
        />
        <Seperator />

        <View style={{marginVertical: 20, marginBottom: 30, paddingright: 15}}>
          <CustomText
            style={{
              paddingHorizontal: 15,
              marginTop: 20,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            Express Delivery
          </CustomText>

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={[{}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 10}}>
                  <FoodCard
                    image={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIxdoBdNZ1B_bLxCZrd3U8_SdgRRvYIHqpQ&usqp=CAU'
                    }
                  />
                </View>
              );
            }}
          />
        </View>
        <Seperator />

        <FlatList
          style={{marginTop: 20, marginBottom: 20}}
          showsHorizontalScrollIndicator={false}
          data={[{}, {}, {}, {}, {}, {}, {}]}
          renderItem={({item}) => {
            return (
              <View style={{marginVertical: 10}}>
                <FoodCard
                  image={
                    'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wfjvzbsyjruydaozbnzo'
                  }
                />
              </View>
            );
          }}
        />
        <Seperator />

        <View style={{marginVertical: 20, marginBottom: 30, paddingright: 15}}>
          <CustomText
            style={{
              paddingHorizontal: 15,
              marginTop: 20,
              fontWeight: 'bold',
              marginVertical: 10,
            }}>
            WHAT'S NEW
          </CustomText>

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={[{}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 10}}>
                  <FoodCard
                    image={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAk8sFye5W_JpgBLuG0AjBuU1k2B6WRprKgQ&usqp=CAU'
                    }
                  />
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Food;
