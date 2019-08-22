/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Button } from 'native-base';

class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    // drawerLockMode: 'locked-closed',
    headerTitle: <Text style={styles.headerText}>Назад</Text>,
    headerStyle: {
      backgroundColor: '#31312f',
    },
    headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // },
    // headerMode: 'float',
  });

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#31312f" />
        <View style={styles.hi}>
          <Text style={styles.buttonText}>Авторизация</Text>
        </View>
        <View style={styles.footer}>
          <Button
            transparent
            onPress={() => {
              this.props.navigation.navigate('One');
            }}>
            <Text style={[styles.buttonText, { marginRight: 20 }]}>One</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#31312f',
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
