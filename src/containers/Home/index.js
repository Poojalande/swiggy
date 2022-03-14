import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {ADS} from '../../components/Ads';
import LocationHeader from '../../components/LocationHeader';
import {CategoryCard} from '../../components/CategoryCard';
import {CustomText} from '../../components/Text';
import {TopPicCard} from './TopPicCard/index';
import Icon from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/SimpleLineIcons';
import PopularBrandsCard from './PopularBrands';
import Seperator from '../../components/Seperator';
import CurationsCard from './PopularCurations';
import FoodCard from '../../components/FoodCard';
import ProductCard from '../../components/ProductCard';

function Home() {
  const data = [
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3krFR6Pgvx0-ThU2ojnGT6axsbsEjcwCMgw&usqp=CAU',
      title: 'Food',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlaxE2hcmTVZ6kb0quZ1gX8YuUuekl31caA&usqp=CAU',
      title: 'Instamart',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8yMIHkxs901EzRfpvMq6gIEfDADZcfbJxLw&usqp=CAU',
      title: 'Genie',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy2c2AiWkDi7fEGLpxHIcaYY6rVsHPHJ5LOA&usqp=CAU',
      title: 'Meat Stores',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2y5j0obBS4DNbORuc2NfqmDAhIyGu6dhtjA&usqp=CAU',
      title: 'Moments',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx7C1wtETNE8OQZ9UILB9sztjVRgBW_qIPfQ&usqp=CAU',
      title: 'Health Hub',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZy1V2vbVmjyHfgyiYA62IJRUVrD3kdCKLgg&usqp=CAU',
      title: 'Scootsy',
    },
    {
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXRrAVGUGlNSjdgl5tOfeYobAXGVgVjCtYeQ&usqp=CAU',
      title: 'Speciality Stores',
    },
  ];

  const topPics = [
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzSBpWClWImLC0-cGDXin_kyrEQWqOS_Lgfw&usqp=CAU',
      off: '60%',
      upTo: '80',
      name: 'Spicy Red Chilly',
      time: '35 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ-1S7KOcEV0pldk3zdv02cky2wYqzqcrvYA&usqp=CAU',
      off: '70%',
      upTo: '190',
      name: 'Red Hot Chillies',
      time: '85 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1SHLyad_FvJ3Ew-4LKXh9bhLXiLxbekr2_w&usqp=CAU',
      off: '10%',
      upTo: '10',
      name: 'The Thali',
      time: '34 mins',
    },

    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFIfJCtuWW9P-wF2vRvvI2COOs8zmB_IHwtQ&usqp=CAU',
      off: '50%',
      upTo: '110',
      name: 'Fried Nation',
      time: '32 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoNyuIRCzGhCL9bpCshxhOlflQ4yZETjKYw&usqp=CAU',
      // off:'10%',
      // upTo:'10',
      name: 'The Thali',
      time: '34 mins',
    },
    {
      imageURI:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wfjvzbsyjruydaozbnzo',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
    {
      imageURI:
        'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/wfjvzbsyjruydaozbnzo',
      // off:'10%',
      // upTo:'10',
      name: 'The Thali',
      time: '34 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnoNyuIRCzGhCL9bpCshxhOlflQ4yZETjKYw&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Red Hot Chillies',
      time: '29 mins',
    },
  ];

  const popularBrands = [
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwssBmrmVtNpiPOACyShA4W5cSsEYF99WNnQ&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Iranic Cafe',
      time: '34 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJaTic2VtLESM01VxsN8ljEhNc9J2TAE_ryA&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Cafe Goodluck',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0atcOASPSLIvIWNlBO8WBOOfW2CLqyi0Lw&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Samundra veg',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfj4zvKPn_ZnLnkZjz_ucr31GPmSLey-8ZHw&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Starbucks Coffee',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8KnMshe-oySNKCycQpochv0cMiM8DVcpDg&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Faasos Wraps &',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtl7sbDxBSNIiB2r5V36UZkzb6rXMkaU1U-w&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Subway',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbnDBfSgzpVkWJH96cud7QE3wSgcCkB4q8g&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Barista',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXQMue96Cm2qDcGoj5i1cXt-d8VYzt0qJJFg&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'Natural Ice Cream',
      time: '29 mins',
    },
    {
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXEg_hzPn6Ml3iiRHBBh4MFqi5VevK3_4IeA&usqp=CAU',
      off: '90%',
      upTo: '120',
      name: 'LunchBox',
      time: '29 mins',
    },
  ];

  const curations = [
    {
      name: 'Appe',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhO3qwKf4vIZgVoR1UvJs9cd2COIuZzqoXdg&usqp=CAU',
    },
    {
      name: 'Ulid Vada',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk6FV6iPedWkdGqomG0PeIkqdeBaZMEkHe8Q&usqp=CAU',
    },
    {
      name: 'Dosa',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZiCol9MwfPq8S3SuNYqQoA6Xy2ooTukHQPw&usqp=CAU',
    },
    {
      name: 'Biryani',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAkiUJ1tBJPR1pdkhy3J4KBgHs-F6AiQpQ8A&usqp=CAU',
    },
    {
      name: 'Dosa',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNNHci6qILCmZs0s7QoHLJ0t-GoBapd4lV9g&usqp=CAU',
    },
    {
      name: 'Biryani',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5SVewPbQZ1mQ55x7XmpD8vPMiTh5WIjcog&usqp=CAU',
    },
    {
      name: 'Biryani',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzTUTSiZZ-cGftv_ao7nNeSC656Mb0Qohxw&usqp=CAU',
    },
    {
      name: 'Biryani',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzTUTSiZZ-cGftv_ao7nNeSC656Mb0Qohxw&usqp=CAU',
    },
    {
      name: 'Pizza',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMy2Enzy0JDcZ7Tj2ixgk71TmpTBhPHaXXMA&usqp=CAU',
    },
    {
      name: 'Pizza',
      imageURI:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGTB8X0lJN1Blpe9aos9c8-Oj7lZ0J_pDrgw&usqp=CAU',
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ScrollView>
        <View style={{paddingHorizontal: 15, marginTop: 10}}>
          <LocationHeader />
          <View style={{marginTop: 10}}>
            <ADS />
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              // flexWrap: 'wrap',
              justifyContent: 'flex-start',
              marginTop: 20,
            }}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={({item, i}) => {
                return (
                  <View>
                    <CategoryCard title={item.title} imgSrc={item.imgSrc} />
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            width: '100%',
            marginBottom: 30,
            marginTop: 20,
          }}>
          <Image
            style={{width: '100%', height: 180, borderRadius: 10}}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4ZFA38o-pJFauTqqihImi9YhaGir8C7fmQ&usqp=CAU',
            }}
          />
        </View>
        <View
          style={{flexDirection: 'row', paddingLeft: 15, alignItems: 'center'}}>
          <Icon4 name="like" size={20} color="black" />
          <CustomText style={{marginLeft: 8, fontWeight: '800', fontSize: 15}}>
            Top Picks For You
          </CustomText>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{paddingLeft: 15, marginTop: 18, marginBottom: 10}}>
          {topPics.map((prod, index) => {
            return (
              <View>
                <TopPicCard key={index} {...prod} />
                <TopPicCard key={index} {...prod} />
              </View>
            );
          })}
        </ScrollView>

        <Seperator />
        <CustomText
          style={{
            paddingLeft: 15,
            marginTop: 30,
            marginBottom: 10,
            fontWeight: '800',
            fontSize: 16,
          }}>
          Popular Brands
        </CustomText>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{paddingLeft: 15, marginTop: 18, marginBottom: 30}}>
          {popularBrands.map((prod, index) => {
            return (
              <View>
                <PopularBrandsCard {...prod} />
                <PopularBrandsCard {...prod} />
                <PopularBrandsCard {...prod} />
              </View>
            );
          })}
        </ScrollView>

        <Seperator />
        <CustomText
          style={{
            paddingLeft: 15,
            marginTop: 30,
            marginBottom: 10,
            fontWeight: '800',
            fontSize: 16,
          }}>
          Popular Curations
        </CustomText>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{paddingLeft: 15, marginTop: 18, marginBottom: 30}}>
          {curations.map((prod, index) => {
            return (
              <View>
                <CurationsCard {...prod} />
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            paddingHorizontal: 15,
            width: '100%',
            marginBottom: 30,
            marginTop: 20,
          }}>
          <Image
            style={{width: '100%', height: 180, borderRadius: 10}}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDT7PmhcHNqX-nsfUXSMdrB803qQmZ9ZoBVQ&usqp=CAU',
            }}
          />
        </View>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'brown',
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 15,
              borderRadius: 10,
              paddingVertical: 10,
            }}>
            <CustomText
              style={{
                fontWeight: '800',
                fontSize: 16,
                color: 'white',
              }}>
              Browse more on Instamart
            </CustomText>
          </TouchableOpacity>
        </View>

        <Seperator />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: 10,
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 15,
                marginTop: 30,
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <View
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 30,
                  borderWidth: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="lightbulb" size={15} color="black" />
              </View>
              <CustomText
                style={{
                  fontWeight: '800',
                  fontSize: 16,
                  marginLeft: 10,
                }}>
                In the Spotlight
              </CustomText>
            </View>
            <CustomText
              style={{
                paddingLeft: 15,
                marginTop: 0,
                marginBottom: 10,
                fontSize: 14,
                color: 'gray',
              }}>
              Explore sponsored partner brands
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
          style={{paddingLeft: 15}}
          data={[{}, {}, {}, {}, {}, {}]}
          renderItem={({item}) => {
            return (
              <View style={{marginVertical: 20}}>
                <ProductCard />
                <ProductCard />
              </View>
            );
          }}
        />
        <Seperator />

        <View
          style={{
            marginVertical: 20,
            paddingHorizontal: 15,
          }}>
          <CustomText
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              color: 'brown',
            }}>
            DO MORE WITH SWIGGY
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
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzXGNiIqejsF-S0cECT41DkPCMtvNR2j55w&usqp=CAU',
                    }}>
                    <CustomText
                      style={{
                        fontSize: 18,
                        color: 'black',
                        width: 80,
                        marginVertical: 5,
                        fontWeight: 'bold',
                        paddingLeft: 10,
                      }}>
                      Genie 40% OFF
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
                      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsr2JV0LRt0hEa8hVQmBdYWaDNjeBdA0fbEw&usqp=CAU',
                    }}>
                    <CustomText
                      style={{
                        fontSize: 18,
                        color: 'black',
                        width: 80,
                        marginVertical: 5,
                        fontWeight: 'bold',
                        paddingLeft: 10,
                      }}>
                      Meat 60% off
                    </CustomText>
                  </ImageBackground>
                </View>
              );
            }}
          />
        </View>

        <Seperator />
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 15,
            marginTop: 30,
            alignItems: 'center',
            marginBottom: 5,
          }}>
          <View
            style={{
              width: 25,
              height: 25,
              borderRadius: 30,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon2 name="restaurant" size={15} color="black" />
          </View>
          <CustomText
            style={{
              fontWeight: '800',
              fontSize: 16,
              marginLeft: 10,
            }}>
            All Restaurants Nearby
          </CustomText>
        </View>
        <CustomText
          style={{
            paddingLeft: 15,
            marginTop: 0,
            marginBottom: 10,
            fontSize: 14,
            color: 'gray',
          }}>
          Discover unique taste near you
        </CustomText>

        <FlatList
          showsHorizontalScrollIndicator={false}
          data={[{}, {}, {}, {}, {}, {}]}
          renderItem={({item}) => {
            return (
              <View style={{marginVertical: 20}}>
                <FoodCard
                  image={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7lt2ZS5UywBZWvJD53BEjz5erSkGbx7Vu1A&usqp=CAU'
                  }
                />
              </View>
            );
          }}
        />

        <View
          style={{
            marginTop: 50,
            paddingTop: 50,
            paddingBottom: 40,
            backgroundColor: '#F4F4F5',
            paddingLeft: 20,
          }}>
          <CustomText
            style={{
              fontSize: 70,
              fontWeight: '900',
              color: 'gray',
              opacity: 0.3,
            }}>
            𝗟𝗜𝗩𝗘
          </CustomText>
          <CustomText
            style={{
              fontSize: 70,
              fontWeight: '900',
              color: 'gray',
              opacity: 0.3,
              marginTop: -35,
            }}>
            𝗙𝗢𝗥
          </CustomText>
          <CustomText
            style={{
              fontSize: 70,
              fontWeight: '900',
              color: 'gray',
              opacity: 0.3,
              marginTop: -35,
            }}>
            𝗙𝗢𝗢𝗗
          </CustomText>

          <CustomText
            style={{
              fontSize: 12,
              color: 'gray',
              opacity: 0.4,
              marginTop: 25,
              fontWeight: '700',
            }}>
            MADE BY FOOD LOVERS
          </CustomText>

          <CustomText
            style={{
              fontSize: 12,
              color: 'gray',
              opacity: 0.4,
              fontWeight: '700',
            }}>
            SWIGGY HQ. BANGALORE
          </CustomText>

          <View
            style={{
              width: 60,
              height: 2,
              backgroundColor: 'gray',
              opacity: 0.2,
              marginTop: 30,
            }}></View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
