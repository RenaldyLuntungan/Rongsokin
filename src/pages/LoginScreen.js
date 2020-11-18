import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import Logos from '../images/Logos.png';
import LogosHP from '../images/LogosHP.png';

class LoginScreen extends Component {
  LoginFunction = () => {
    this.props.navigation.navigate('HomeScreen');
  };

  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#ffffff',
              height: '57%',
              justifyContent: 'center',
            }}>
            <Image
              source={Logos}
              style={{
                width: 82,
                height: 99,
                alignSelf: 'center',
              }}
            />
          </View>
          <View style={{backgroundColor: '#20A856', height: '43%'}}>
            <Text
              style={{
                fontSize: 24,
                marginLeft: 16,
                marginTop: 32,
                marginBottom: 2,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Selamat Datang!
            </Text>
            <Text
              style={{
                fontSize: 14,
                marginLeft: 16,
                marginBottom: 33,
                color: 'white',
              }}>
              Penyelamat Lingkungan
            </Text>
            <View>
              <TextInput
                placeholder="Nomor Handphone"
                style={{
                  height: 40,
                  backgroundColor: '#F8FCFA',
                  borderRadius: 4,
                  alignItems: 'stretch',
                  marginHorizontal: 32,
                  paddingLeft: 56,
                  color: '#BDBDBD',
                  fontSize: 14,
                }}></TextInput>
              <Image
                source={LogosHP}
                style={{
                  width: 14,
                  height: 22,
                  position: 'absolute',
                  left: 53,
                  top: 9,
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                style={{
                  marginTop: 40,
                  width: '40%',
                  height: 39,
                  borderRadius: 4,
                  backgroundColor: '#F8FCFA',
                  marginLeft: 32,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#08A563',
                  }}>
                  Daftar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  marginTop: 40,
                  width: '40%',
                  height: 39,
                  borderRadius: 4,
                  backgroundColor: '#FBDA58',
                  marginRight: 32,
                  justifyContent: 'center',
                }}
                onPress={this.LoginFunction}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#404C60',
                  }}>
                  Masuk
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
export default LoginScreen;
