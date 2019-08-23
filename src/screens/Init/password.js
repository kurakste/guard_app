/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StatusBar, Platform, TextInput } from 'react-native';
import { Button } from 'native-base';

class Password extends Component {
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
        <View style={styles.password}>
          <Text style={styles.passwordText}>Восстановление пароля</Text>
          <View style={styles.inputBlock}>
            <Text style={styles.inputText}>E-mail</Text>
            <TextInput
              placeholderTextColor="lightgray"
              selectionColor="#FFF"
              underlineColorAndroid="transparent"
              style={styles.input}
            />
          </View>
        </View>
        <Button
          block
          style={{ backgroundColor: '#474747' }}
          onPress={() => {
            this.props.navigation.navigate('One');
          }}>
          <Text style={styles.buttonText}>Далее</Text>
        </Button>
      </View>
    );
  }
}

export default Password;

const styles = {
  headerText: {
    color: '#FFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'flex-start',
  },
  password: {
    flex: 1,
  },
  passwordText: {
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
  buttonText: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
  },
};
