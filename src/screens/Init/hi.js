import React, { Component } from 'react';
import { View, ImageBackground, Text, StatusBar } from 'react-native';
import { Button } from 'native-base';
import images from '../../images';

class Hi extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  });
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#31312f" />
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
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}>
              <Text style={styles.buttonText}>Авторизоваться</Text>
            </Button>
            <Button
              transparent
              style={styles.button}
              onPress={() => {
                this.props.navigation.navigate('Login');
              }}>
              <Text style={styles.buttonText}>Регистрация</Text>
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
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    textAlign: 'center',
  },
};
