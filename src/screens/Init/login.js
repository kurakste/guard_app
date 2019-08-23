/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StatusBar, Platform, TextInput } from 'react-native';
import { Button } from 'native-base';

class Login extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle:
      Platform.OS === 'android' ? (
        <Text style={styles.headerText}>Назад</Text>
      ) : null,
    headerBackTitle:
      Platform.OS === 'ios' ? (
        <Text style={styles.headerText}>Назад</Text>
      ) : null,
    headerStyle: {
      backgroundColor: '#000000',
    },
    headerTintColor: '#fff',
  });

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#000000" />
        <View style={styles.login}>
          <Text style={styles.loginText}>Авторизация</Text>
          <View style={styles.inputBlock}>
            <Text style={styles.inputText}>E-mail</Text>
            <TextInput
              placeholder="email@example.com"
              placeholderTextColor="lightgray"
              selectionColor="#FFF"
              underlineColorAndroid="transparent"
              style={styles.input}
            />
            <Text style={styles.inputText}>Пароль</Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={styles.input}
            />
            <Text
              style={[
                styles.inputText,
                { fontSize: 12, textDecorationLine: 'underline' },
              ]}>
              Забыли пароль?
            </Text>
            <Text style={styles.footerText}>
              При авторизации Вы принимаете условие{' '}
              <Text style={{ textDecorationLine: 'underline' }}>
                {' '}
                соглашения с конечным пользователем.
              </Text>
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Button
            block
            style={{ backgroundColor: '#474747' }}
            onPress={() => {
              this.props.navigation.navigate('One');
            }}>
            <Text style={styles.buttonText}>Войти</Text>
          </Button>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = {
  headerText: {
    color: '#FFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'flex-start',
  },
  login: {
    flex: 1,
  },
  loginText: {
    fontSize: 23,
    color: '#FFF',
    textAlign: 'center',
  },
  inputBlock: { marginTop: 15, marginLeft: 30, marginRight: 30 },
  inputText: {
    fontSize: 16,
    color: '#FFF',
    marginLeft: 10,
  },
  input: {
    color: '#FFF',
    textAlign: 'center',
    height: 50,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: '#474747',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 13,
    color: '#FFF',
    marginTop: 20,
  },
  footer: {
    // flex: 1,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
  },
};
