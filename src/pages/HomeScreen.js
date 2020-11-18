import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import ImageSlide from '../images/ImagSlide.png';
import Arrow from '../images/Arrow.png';
import Location from '../images/Location.png';
import Bell from '../images/Bell.png';

import Love from '../images/Love.png';
import Wallet from '../images/Wallet.png';
import Coin from '../images/Coin.png';

import Jual from '../images/Jual.png';
import Donasi from '../images/Donasi.png';
import Lelang from '../images/Lelang.png';

import Rongskokin from '../images/Rongsokin.png';
import Paper from '../images/Paper.png';
import Beranda from '../images/Beranda.png';
import Pesan from '../images/Pesan.png';
import Transaksi from '../images/Transaksi.png';
import Profil from '../images/Profil.png';

class HomeScreen extends Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: 56,
            backgroundColor: '#20A856',
          }}>
          <Text
            style={{
              marginTop: 5,
              color: '#FDFDFD',
              fontSize: 12,
              fontWeight: '400',
              marginLeft: 18,
            }}>
            Lokasi anda
            <Image source={Arrow} style={{width: 13, height: 13}} />
          </Text>
          <Text
            style={{
              color: '#F8FCFA',
              fontSize: 17,
              fontWeight: '700',
              marginLeft: 15,
            }}>
            <Image source={Location} style={{width: 15, height: 15}} />
            Denpasar
          </Text>
          <Image
            source={Bell}
            style={{
              width: 21,
              height: 21,
              position: 'absolute',
              right: 18,
              bottom: 18,
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 145,
            backgroundColor: 'red',
          }}>
          <Image source={ImageSlide} style={{width: '100%', height: 180}} />
        </View>
        <View
          style={{
            height: 89,
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#F3F3F3',
            borderWidth: 1,
            borderBottomColor: '#F4F4F4',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              height: 89,
              width: 125,
              alignSelf: 'center',
            }}>
            <Image
              source={Love}
              style={{alignSelf: 'center', width: 27, height: 27, marginTop: 8}}
            />
            <Text style={{marginTop: 5, marginLeft: 8}}>DoPoint</Text>
            <Text style={{marginLeft: 8}}>4500pts</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 89,
              width: 150,
              alignSelf: 'center',
            }}>
            <Image
              source={Wallet}
              style={{alignSelf: 'center', width: 27, height: 27, marginTop: 8}}
            />
            <Text style={{marginTop: 5, marginLeft: 8}}>RoPay</Text>
            <Text style={{marginLeft: 8}}>Rp.450.000</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 89,
              width: 125,
              alignSelf: 'center',
            }}>
            <Image
              source={Coin}
              style={{alignSelf: 'center', width: 27, height: 27, marginTop: 8}}
            />
            <Text style={{marginTop: 5, marginLeft: 8}}>RoPoint</Text>
            <Text style={{marginLeft: 8}}>4500pts</Text>
          </View>
        </View>

        <View style={{marginHorizontal: 16, marginTop: 10}}>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Mulai Aksimu</Text>
          <View
            style={{
              height: 120,
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: '#F3F3F3',
            }}>
            <View
              style={{
                marginLeft: 10,
                height: 80,
                width: 80,
                borderRadiusL: 6.4,
                alignSelf: 'center',
              }}>
              <Image source={Jual} style={{alignSelf: 'center'}} />
            </View>

            <View
              style={{
                height: 102,
                width: 102,
                borderRadius: 8.16,
                alignSelf: 'center',
              }}>
              <Image source={Donasi} style={{alignSelf: 'center'}} />
            </View>
            <View
              style={{
                marginRight: 10,

                height: 80,
                width: 80,
                borderRadius: 6.4,
                alignSelf: 'center',
              }}>
              <Image source={Lelang} style={{alignSelf: 'center'}} />
            </View>
          </View>
        </View>

        <View style={{marginHorizontal: 16, marginTop: 10}}>
          <Text style={{fontSize: 16, fontWeight: '600'}}>Penjualanmu</Text>
          <View
            style={{
              height: 130,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
              backgroundColor: '#F3F3F3',
            }}>
            <View
              style={{
                backgroundColor: '#FBDA58',

                height: 80,
                width: 80,
                borderRadius: 6.4,
                alignSelf: 'center',
                marginRight: 10,
              }}
            />
            <View
              style={{
                backgroundColor: '#7DB424',
                height: 102,
                width: 260,
                borderRadius: 8.16,
                alignSelf: 'center',
              }}>
              <Image
                source={Rongskokin}
                style={{marginTop: 8, marginLeft: 13}}
              />
              <Text
                style={{
                  marginTop: 7,
                  marginLeft: 13,
                  color: '#F8FCFA',
                  fontSize: 14,
                }}>
                Penjualan Rongkos Kertas
              </Text>
              <Text
                style={{
                  marginLeft: 13,
                  color: '#F8FCFA',
                  fontSize: 22,
                  fontWeight: '700',
                }}>
                25 kg
              </Text>
              <Image
                source={Paper}
                style={{position: 'absolute', left: 170, top: 15}}
              />
            </View>
            <View
              style={{
                backgroundColor: '#2498B2',
                height: 80,
                width: 80,
                borderRadius: 6.4,
                alignSelf: 'center',
                marginLeft: 10,
              }}
            />
          </View>
        </View>

        <View
          style={{
            height: 56,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'flex-end',
            backgroundColor: 'white',
          }}>
          <Image
            source={Beranda}
            style={{
              height: 43,
              width: 46,
              alignSelf: 'center',
            }}
          />
          <Image
            source={Pesan}
            style={{
              height: 43,
              width: 33,
              alignSelf: 'center',
            }}
          />
          <Image
            source={Transaksi}
            style={{
              height: 43,
              width: 49,
              alignSelf: 'center',
            }}
          />
          <Image
            source={Profil}
            style={{
              height: 43,
              width: 28,
              alignSelf: 'center',
            }}
          />
        </View>
      </ScrollView>
    );
  }
}
export default HomeScreen;
