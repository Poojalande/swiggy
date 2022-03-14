import React from 'react';
import {
  Text,
  View,
  TextInput,
  Image,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {CustomText} from '../../components/Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InstamartCard from '../../components/InstamartCard';
import Icon4 from 'react-native-vector-icons/SimpleLineIcons';
import LinearGradient from 'react-native-linear-gradient';

function Instamart() {
  const popularBrands = [
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwssBmrmVtNpiPOACyShA4W5cSsEYF99WNnQ&usqp=CAU',
      name: 'Fruits and vegetable',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJaTic2VtLESM01VxsN8ljEhNc9J2TAE_ryA&usqp=CAU',
      name: 'Dairy brad and eggs',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0atcOASPSLIvIWNlBO8WBOOfW2CLqyi0Lw&usqp=CAU',

      name: 'atta dal and oils ',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfj4zvKPn_ZnLnkZjz_ucr31GPmSLey-8ZHw&usqp=CAU',

      name: 'masala and more',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8KnMshe-oySNKCycQpochv0cMiM8DVcpDg&usqp=CAU',

      name: 'Beverage',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtl7sbDxBSNIiB2r5V36UZkzb6rXMkaU1U-w&usqp=CAU',

      name: 'Munchies',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbnDBfSgzpVkWJH96cud7QE3wSgcCkB4q8g&usqp=CAU',

      name: 'Biscuit',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQMue96Cm2qDcGoj5i1cXt-d8VYzt0qJJFg&usqp=CAU',

      name: 'Sweet Tooth',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXEg_hzPn6Ml3iiRHBBh4MFqi5VevK3_4IeA&usqp=CAU',

      name: 'Meat',
    },

    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhO3qwKf4vIZgVoR1UvJs9cd2COIuZzqoXdg&usqp=CAU',

      name: 'Meat',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6FV6iPedWkdGqomG0PeIkqdeBaZMEkHe8Q&usqp=CAU',

      name: 'Meat',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZiCol9MwfPq8S3SuNYqQoA6Xy2ooTukHQPw&usqp=CAU',

      name: 'Meat',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkiUJ1tBJPR1pdkhy3J4KBgHs-F6AiQpQ8A&usqp=CAU',

      name: 'Meat',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNNHci6qILCmZs0s7QoHLJ0t-GoBapd4lV9g&usqp=CAU',

      name: 'Meat',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5SVewPbQZ1mQ55x7XmpD8vPMiTh5WIjcog&usqp=CAU',

      name: 'Meat',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzTUTSiZZ-cGftv_ao7nNeSC656Mb0Qohxw&usqp=CAU',

      name: 'Meat',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXEg_hzPn6Ml3iiRHBBh4MFqi5VevK3_4IeA&usqp=CAU',

      name: 'Meat',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXEg_hzPn6Ml3iiRHBBh4MFqi5VevK3_4IeA&usqp=CAU',

      name: 'Meat',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMy2Enzy0JDcZ7Tj2ixgk71TmpTBhPHaXXMA&usqp=CAU',

      name: 'Meat',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzTUTSiZZ-cGftv_ao7nNeSC656Mb0Qohxw&usqp=CAU',

      name: 'Meat',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 15,
            marginTop: 30,
            alignItems: 'center',
          }}>
          <CustomText
            style={{
              color: '#9A0680',
              fontSize: 30,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            ιηѕтαмαят
          </CustomText>
        </View>
        <View
          style={{
            borderColor: 'orange',
            borderWidth: 0.3,
            marginHorizontal: 15,
            marginVertical: 5,
          }}></View>
        <CustomText
          numberOfLines={2}
          style={{
            color: '#9A0680',
            fontSize: 13,
            marginHorizontal: 15,
          }}>
          POWERED BY SWIGGY
        </CustomText>
        <View
          style={{
            padding: 15,
            flexDirection: 'row',
            paddingBottom: 20,
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              width: '100%',
              height: 50,
              borderColor: '#dddddd',
              borderWidth: 0.5,
              paddingLeft: 20,
              borderRadius: 5,
              backgroundColor: 'white',
            }}
            placeholder="Search for items in instamart "
            placeholderTextColor={'gray'}
          />
          <AntDesign style={{marginLeft: -40}} name="search1" size={22} />
        </View>

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['white', 'rgba(255, 208, 198 ,0.8)']}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: 8,
            marginHorizontal: 15,
          }}>
          <CustomText
            style={{
              color: '#FF7F3F',
              fontSize: 30,
              paddingRight: 10,
              fontWeight: 'bold',
            }}>
            ơŋɛ
          </CustomText>
          <View style={{flexDirection: 'column'}}>
            <View style={{flexDirection: 'row'}}>
              <CustomText
                style={{
                  fontSize: 12,
                  marginRight: 5,
                }}>
                Get
              </CustomText>
              <CustomText
                numberOfLines={1}
                style={{
                  fontWeight: 'bold',
                  fontSize: 12,
                }}>
                Unlimited Free Delivery above just ₹199!
              </CustomText>
            </View>
            <View style={{flexDirection: 'row'}}>
              <CustomText
                style={{
                  fontSize: 12,
                }}>
                Don't missed out{' '}
              </CustomText>
              <CustomText
                style={{
                  color: '#FF7F3F',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}>
                Buy @₹75/month {'>>'}
              </CustomText>
            </View>
          </View>
        </LinearGradient>
        <View style={{paddingHorizontal: 15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              marginVertical: 15,
              alignItems: 'center',
            }}>
            <View>
              <CustomText
                style={{
                  fontSize: 16,
                  fontWeight: '800',
                }}>
                Frequently brought items
              </CustomText>
              <CustomText
                style={{
                  color: 'gray',
                  fontSize: 12,
                }}>
                Grate options for your first order
              </CustomText>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <CustomText style={{fontSize: 12, fontWeight: '600'}}>
                SEE ALL
              </CustomText>
              <View
                style={{
                  marginLeft: 8,
                  padding: 5,
                  backgroundColor: '#FF7F50',
                  borderRadius: 30,
                }}>
                <Icon4 name="arrow-right" size={12} color="white" />
              </View>
            </View>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[{}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <InstamartCard
                  image={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4uRxDBnbZ9QVRkLsXldBsUc3CUQX369rQg&usqp=CAU'
                  }
                />
              );
            }}
          />
          <View style={{marginVertical: 20}}>
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
                        width: 300,
                        height: 200,
                        borderRadius: 5,
                        marginRight: 15,
                      }}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7Q47bULjfjqf7KEsnfsKD5TDyR51m5iRcQ&usqp=CAU',
                      }}
                    />
                    <Image
                      style={{width: 300, height: 200, marginRight: 15}}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9782YJdsAnSYS7E7C9DAuYQd3q6mVhyIHA&usqp=CAU',
                      }}
                    />
                  </>
                );
              }}
            />

            <CustomText
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginVertical: 15,
              }}>
              Coupons for you
            </CustomText>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={[{}, {}, {}, {}, {}]}
              renderItem={({item}) => {
                return (
                  <View style={{flexDirection: 'row', marginRight: 10}}>
                    <View
                      style={{
                        backgroundColor: '#F8EEEC',
                        width: 60,
                        height: 60,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Image
                        resizeMode="contain"
                        style={{width: 50, height: 50}}
                        source={{
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzLAyOicIWbKKJYvlV6lz1JRKsxe8nk-rEgw&usqp=CAU',
                        }}
                      />
                    </View>

                    <View
                      style={{
                        backgroundColor: '#FBEAEA',
                        width: 220,
                        height: 60,
                        paddingHorizontal: 10,
                        justifyContent: 'center',
                        marginLeft: 1,
                      }}>
                      <CustomText
                        style={{
                          fontSize: 14,
                          fontWeight: 'bold',
                        }}>
                        Free delivery on first 2 orders
                      </CustomText>
                      <CustomText
                        style={{
                          fontSize: 13,
                        }}>
                        Use Code FASTTWO
                      </CustomText>
                    </View>
                  </View>
                );
              }}
            />
          </View>
          <View>
            <CustomText
              numberOfLines={2}
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginVertical: 5,
              }}>
              Shop by category
            </CustomText>

            <FlatList
              numColumns={4}
              data={popularBrands}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <>
                    <View
                      style={{
                        marginRight: 13,
                        borderRadius: 5,
                      }}>
                      <Image
                        style={{
                          width: 80,
                          height: 80,
                          marginTop: 10,
                          borderRadius: 8,
                        }}
                        source={{
                          uri: item.imageURI,
                        }}
                      />
                      <CustomText
                        numberOfLines={2}
                        style={{
                          fontSize: 12,
                          width: 70,
                          marginVertical: 5,
                          textAlign: 'center',
                          lineHeight: 19,
                        }}>
                        {item.name}
                      </CustomText>
                    </View>
                  </>
                );
              }}
            />
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'rgba(253, 188, 180,0.3)',
            paddingVertical: 15,
            paddingHorizontal: 15,
            marginVertical: 40,
          }}>
          <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <CustomText
                style={{
                  fontSize: 18,
                  color: 'red',

                  fontWeight: 'bold',
                }}>
                Deals you shouldn't miss{' '}
                <CustomText
                  style={{
                    fontSize: 18,
                    fontWeight: '400',
                    color: 'red',
                  }}>
                  out on before they are gone!
                </CustomText>
              </CustomText>
            </View>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[{}, {}, {}, {}, {}, {}, {}, {}]}
            renderItem={({}) => {
              return (
                <View
                  style={{
                    backgroundColor: 'white',
                    padding: 5,
                    alignItems: 'center',
                    width: 130,
                    height: 145,
                    borderRadius: 12,
                    marginVertical: 10,
                    borderColor: 'red',
                    borderWidth: 0.6,
                    marginRight: 20,
                    overflow: 'hidden',
                  }}>
                  <CustomText
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: 'red',
                    }}>
                    upto 30% off
                  </CustomText>
                  <CustomText
                    style={{
                      fontSize: 18,
                      color: '#A3423C',
                    }}>
                    -----
                  </CustomText>
                  <CustomText
                    style={{
                      fontSize: 16,
                      color: '#A3423C',
                      textAlign: 'center',
                    }}>
                    Fruits & Veggies Market
                  </CustomText>
                  <Image
                    style={{width: 90, height: 50, marginTop: 5}}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD8sNxfHdK5bObndZOFyTNft0i_nB5E6WipQ&usqp=CAU',
                    }}
                  />
                </View>
              );
            }}
          />
        </View>

        <View
          style={{
            paddingHorizontal: 15,
          }}>
          <CustomText
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Explore more categories
          </CustomText>
          <FlatList
            horizontal={true}
            data={[{}, {}, {}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{flexDirection: 'column', marginVertical: 15}}>
                  <View style={{flexDirection: 'row'}}>
                    <ImageBackground
                      style={{
                        width: 150,
                        height: 150,
                        marginRight: 20,
                        borderRadius: 20,
                        overflow: 'hidden',
                      }}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-20s0lLuJERJdbCD7CLyxCPYCHNAPfKEDVg&usqp=CAU',
                      }}>
                      <CustomText
                        style={{
                          fontSize: 18,
                          width: 100,
                          color: 'white',
                          paddingHorizontal: 10,
                          fontWeight: 'bold',
                          marginTop: 10,
                          marginLeft: 5,
                        }}>
                        Awesome food collection over it
                      </CustomText>
                    </ImageBackground>
                    <ImageBackground
                      style={{
                        width: 150,
                        height: 150,
                        marginRight: 20,
                        borderRadius: 20,
                        overflow: 'hidden',
                      }}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Knwo1weP93D6XMQtg-T6sdAQa-L55y1_gA&usqp=CAU',
                      }}>
                      <CustomText
                        style={{
                          fontSize: 18,
                          width: 100,
                          color: 'white',
                          paddingHorizontal: 10,
                          fontWeight: 'bold',
                          marginTop: 10,
                          marginLeft: 5,
                        }}>
                        Never stop beign foody
                      </CustomText>
                    </ImageBackground>
                  </View>

                  <View style={{flexDirection: 'row', marginTop: 20}}>
                    <ImageBackground
                      style={{
                        width: 150,
                        height: 150,
                        marginRight: 20,
                        borderRadius: 20,
                        overflow: 'hidden',
                      }}
                      source={{
                        uri: 'https://cpb-us-w2.wpmucdn.com/blog.smu.edu/dist/d/10/files/2010/11/heinz_ketchup_21.jpg',
                      }}>
                      <CustomText
                        style={{
                          fontSize: 18,
                          width: 100,
                          color: 'white',
                          paddingHorizontal: 10,
                          fontWeight: 'bold',
                          marginTop: 10,
                          marginLeft: 5,
                        }}>
                        What's holi tested like
                      </CustomText>
                    </ImageBackground>
                    <ImageBackground
                      style={{
                        width: 150,
                        height: 150,
                        marginRight: 20,
                        borderRadius: 20,
                        overflow: 'hidden',
                      }}
                      source={{
                        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Knwo1weP93D6XMQtg-T6sdAQa-L55y1_gA&usqp=CAU',
                      }}>
                      <CustomText
                        style={{
                          fontSize: 18,
                          width: 100,
                          color: 'white',
                          paddingHorizontal: 10,
                          fontWeight: 'bold',
                          marginTop: 10,
                          marginLeft: 5,
                        }}>
                        What's holi tested like
                      </CustomText>
                    </ImageBackground>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            marginVertical: 20,
            paddingHorizontal: 15,
          }}>
          <CustomText
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Household favourite
          </CustomText>
          <CustomText
            style={{
              fontSize: 14,
              color: 'gray',
            }}>
            Items from your trusted
          </CustomText>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={[{}, {}, {}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View style={{marginVertical: 15, flexDirection: 'row'}}>
                  <ImageBackground
                    style={{
                      width: 140,
                      height: 200,
                      borderRadius: 10,
                      marginRight: 15,
                    }}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyXBQoktmdoYUPtf410rrDH65omGF7QdEThQ&usqp=CAU',
                    }}>
                    <View
                      style={{
                        backgroundColor: 'white',
                        borderRadius: 50,
                        width: 80,
                        height: 80,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: 20,
                      }}>
                      <Image
                        style={{width: 50, height: 50}}
                        source={{
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkwZ7ywjTgqO-qeHOeCvFOmtrSQrmUU8Q-rg&usqp=CAU',
                        }}
                      />
                    </View>
                    <CustomText
                      style={{
                        fontSize: 16,
                        color: 'white',
                        marginVertical: 5,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      Beauty at it Best
                    </CustomText>
                  </ImageBackground>
                  <ImageBackground
                    style={{
                      width: 140,
                      height: 200,
                      borderRadius: 50,
                      marginRight: 15,
                    }}
                    source={{
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXa4IaPrO5EgpP309LbgtEgdG19GeAizP4g&usqp=CAU',
                    }}>
                    <View
                      style={{
                        backgroundColor: 'white',
                        borderRadius: 50,
                        width: 80,
                        height: 80,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: 20,
                      }}>
                      <Image
                        style={{width: 50, height: 50, borderRadius: 50}}
                        source={{
                          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYXa4IaPrO5EgpP309LbgtEgdG19GeAizP4g&usqp=CAU',
                        }}
                      />
                    </View>
                    <CustomText
                      style={{
                        fontSize: 16,
                        color: 'white',
                        marginVertical: 5,
                        fontWeight: 'bold',
                        textAlign: 'center',
                      }}>
                      Beauty at it Best
                    </CustomText>
                  </ImageBackground>
                </View>
              );
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 15,
            marginHorizontal: 15,
          }}>
          <View style={{flex:1,paddingRight:10}}>
            <CustomText
              style={{
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              The Universal Happiness!
            </CustomText>
            <CustomText
              style={{
                color: 'gray',
                fontSize: 13,
              }}>
              Just one bite to take you into the world of warmth & happiness
              this Holi.
            </CustomText>
          </View>
          <View style={{flexDirection: 'row', alignItem: 'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomText style={{fontSize: 12, fontWeight: '600'}}>
              SEE ALL
            </CustomText>
            <View
              style={{
                marginLeft: 8,
                padding: 5,
                backgroundColor: '#FF7F50',
                borderRadius: 30,
              }}>
              <Icon4 name="arrow-right" size={12} color="white" />
            </View>
          </View>
          </View>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={[{}, {}, {}, {}, {}, {}]}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginHorizontal: 10,
                }}>
                <InstamartCard
                  image={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGSW_IomSz5fhL9kOCZk1YH623j-JlLZ_gg&usqp=CAU'
                  }
                />
              </View>
            );
          }}
        />
        <View
          style={{
            borderColor: '#dddddd',
            borderWidth: 0.5,
            marginHorizontal: 15,
            marginVertical: 20,
          }}></View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginVertical: 15,
            marginHorizontal: 15,
          }}>
          <View style={{flex:1,paddingRight:10}}>
            <CustomText
              style={{
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              Unlimited Protection!
            </CustomText>
            <CustomText
              style={{
                color: 'gray',
                fontSize: 13,
              }}>
              Sheild yourself and your loved ones from illness causing germs
            </CustomText>
          </View>
          
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CustomText style={{fontSize: 12, fontWeight: '600'}}>
              SEE ALL
            </CustomText>
            <View
              style={{
                marginLeft: 8,
                padding: 5,
                backgroundColor: '#FF7F50',
                borderRadius: 30,
              }}>
              <Icon4 name="arrow-right" size={12} color="white" />
            </View>
          </View>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={[{}, {}, {}, {}, {}, {}]}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  marginHorizontal: 10,
                }}>
                <InstamartCard
                  image={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrxhIeUv8oqQGf4h3YNrMm9JP9fN0ts7a6Nw&usqp=CAU'
                  }
                />
              </View>
            );
          }}
        />

        <View
          style={{
            backgroundColor: '#B8E4F0',
            paddingVertical: 10,
            paddingHorizontal: 15,
            marginTop: 20,
          }}>
          <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <CustomText
                style={{
                  fontSize: 18,
                  color: '#A3423C',

                  fontWeight: 'bold',
                }}>
                Irresistible offers
              </CustomText>
              <CustomText
                style={{
                  fontSize: 18,

                  color: '#A3423C',
                }}>
                {' '}
                are waiting for yoy
              </CustomText>
            </View>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[{}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 20,
                  }}>
                  <InstamartCard
                    image={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtim-JlM5hZh4q2IoR14y60k1Bjmt1WNVMkv9b8zj3pBBz3e9NFXip36AM0_uVFormrsI&usqp=CAU'
                    }
                  />
                </View>
              );
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: '#FFFCDC',
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}>
          <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <CustomText
                style={{
                  fontSize: 18,
                  color: '#A3423C',

                  fontWeight: 'bold',
                }}>
                Fresh Vegitable
              </CustomText>
              <CustomText
                style={{
                  fontSize: 18,

                  color: '#A3423C',
                }}>
                {' '}
                Vegetables that have balanced nutrients for a healthy lifestyle
              </CustomText>
            </View>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[{}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 20,
                  }}>
                  <InstamartCard
                    image={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDvfDInFcsz3Hb6nH1Xl0SVDtQV6xiMqWfQ&usqp=CAU'
                    }
                  />
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#CEE5D0',
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}>
          <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <CustomText
                style={{
                  fontSize: 18,
                  color: '#A3423C',

                  fontWeight: 'bold',
                }}>
                Breakfast needs
              </CustomText>
              <CustomText
                style={{
                  fontSize: 18,

                  color: '#A3423C',
                }}>
                {' '}
                Sorted with fresh bread and eggs
              </CustomText>
            </View>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[{}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 20,
                  }}>
                  <InstamartCard
                    image={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxHnGQIy-Ips7QPQmsp8dCn6wZpQp1aJbs8A&usqp=CAU'
                    }
                  />
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#FEF5ED',
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}>
          <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <CustomText
                style={{
                  fontSize: 18,
                  color: '#A3423C',

                  fontWeight: 'bold',
                }}>
                Your Holi laundry
              </CustomText>
              <CustomText
                style={{
                  fontSize: 18,

                  color: '#A3423C',
                }}>
                {' '}
                is stored with ariel
              </CustomText>
            </View>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[{}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 20,
                  }}>
                  <InstamartCard
                    image={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dS7HGabIfSwe_NyUJZhJkVrd4nUMTFmAGQ&usqp=CAU'
                    }
                  />
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#FFCCD2',
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}>
          <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <CustomText
                style={{
                  fontSize: 18,
                  color: '#A3423C',

                  fontWeight: 'bold',
                }}>
                Staple collection
              </CustomText>
              <CustomText
                style={{
                  fontSize: 18,

                  color: '#A3423C',
                }}>
                {' '}
                All The kitchen staples are now under one roof
              </CustomText>
            </View>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[{}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 20,
                  }}>
                  <InstamartCard
                    image={
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt3qBNBP9AXpHK_o_n8PGf8VXxolKY-km4Og&usqp=CAU'
                    }
                  />
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#CEE5D0',
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}>
          <View>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              <CustomText
                style={{
                  fontSize: 18,
                  color: '#A3423C',

                  fontWeight: 'bold',
                }}>
                Delicious juice & fruits drinks
              </CustomText>
              <CustomText
                style={{
                  fontSize: 18,

                  color: '#A3423C',
                }}>
                {' '}
                to whip amazing beverage & refreshment
              </CustomText>
            </View>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[{}, {}, {}, {}, {}, {}]}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 20,
                  }}>
                  <InstamartCard
                    image={
                      'https://5.imimg.com/data5/IY/HN/MY-25220361/thumbsup-500x500.jpg'
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

export default Instamart;
