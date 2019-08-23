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
        </View>
        <TextInput
          // Adding hint in Text Input using Place holder.
          placeholder="Enter Text in TextInput"
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
          // Calling the custom TextInputStyleClass.
          style={styles.TextInputStyleClass}
        />

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
    alignItems: 'center',
  },
  loginText: {
    fontSize: 23,
    color: '#FFF',
  },
  TextInputStyleClass: {
    // Setting up Hint Align center.
    textAlign: 'center',
    // Setting up TextInput height as 50 pixel.
    height: 50,
    // Set border width.
    borderWidth: 2,
    // Set border Hex Color Code Here.
    // borderColor: '#FF5722',
    // Set border Radius.
    borderRadius: 20,

    //Set background color of Text Input.
    backgroundColor: 'gray',
  },
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
