/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { Button } from 'native-base';
import images from '../../images';

class Hi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          resizeMode="cover"
          style={styles.background}
          source={images.logo}>
          <View style={styles.hi}>
            <Text style={styles.buttonText}>Guard</Text>
          </View>
          <View style={styles.footer}>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}>
              <Text style={[styles.buttonText, { marginRight: 20 }]}>
                Авторизоваться
              </Text>
            </Button>
            <View style={styles.divider} />
            <Button
              transparent
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}>
              <Text style={[styles.buttonText, { marginLeft: 20 }]}>
                Регистрация
              </Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Hi;

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    height: null,
    width: null,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  hi: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  footer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
  },
  divider: {
    borderLeftWidth: 0.55,
    borderColor: '#FFF',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
  },
};
