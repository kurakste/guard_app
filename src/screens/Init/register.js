/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, Text, StatusBar, Platform, TextInput } from 'react-native';
import { Button, Icon, CheckBox } from 'native-base';

class Register extends Component {
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
        <View style={styles.register}>
          <View style={styles.circle}>
            <Icon type="MaterialIcons" name="add-a-photo" style={styles.icon} />
          </View>
          <View style={styles.inputBlock}>
            <Text style={styles.inputText}>ФИО</Text>
            <TextInput
              selectionColor="#FFF"
              underlineColorAndroid="transparent"
              style={styles.input}
            />
            <Text style={styles.inputText}>E-mail</Text>
            <TextInput
              selectionColor="#FFF"
              underlineColorAndroid="transparent"
              style={styles.input}
            />
            <Text style={styles.inputText}>Пароль</Text>
            <TextInput
              selectionColor="#FFF"
              underlineColorAndroid="transparent"
              style={styles.input}
            />
            <Text style={styles.inputText}>Повторите пароль</Text>
            <TextInput
              selectionColor="#FFF"
              underlineColorAndroid="transparent"
              style={styles.input}
            />
            <Text style={styles.inputText}>Тел.</Text>
            <TextInput
              selectionColor="#FFF"
              underlineColorAndroid="transparent"
              style={styles.input}
              defaultValue="+7"
            />
            <Text style={styles.inputText}>
              Фотография паспорта (1 разворот)
            </Text>
            <TextInput
              selectionColor="#FFF"
              underlineColorAndroid="transparent"
              style={styles.input}
            />
            <Text style={styles.inputText}>
              Фотография паспорта (регистрация)
            </Text>
            <TextInput
              selectionColor="#FFF"
              underlineColorAndroid="transparent"
              style={styles.input}
            />
          </View>
          <View style={styles.footer}>
            {/* <View>
              <CheckBox color="white" checked={false} />
              <Text style={styles.buttonText}>
                Я прочитал и принимаю соглашения с конечным пользователем
              </Text>
            </View>
            <View>
              <CheckBox color="white" checked={false} />
            </View> */}
          </View>
        </View>
        <Button
          block
          style={{ backgroundColor: '#474747' }}
          onPress={() => {
            this.props.navigation.navigate('One');
          }}>
          <Text style={styles.buttonText}>Зарегистрироваться</Text>
        </Button>
      </View>
    );
  }
}

export default Register;

const styles = {
  headerText: {
    color: '#FFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'flex-start',
  },
  register: {
    flex: 1,
  },
  circle: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    borderWidth: 1.5,
    borderColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: 'white',
    // fontSize: 22,
  },
  registerText: {
    fontSize: 23,
    color: '#FFF',
    textAlign: 'center',
  },
  inputBlock: { marginTop: 7, marginLeft: 30, marginRight: 30 },
  inputText: {
    fontSize: 16,
    color: '#FFF',
    marginLeft: 10,
  },
  input: {
    color: '#FFF',
    marginLeft: 10,
    height: 42,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#474747',
  },
  footer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
  },
};
