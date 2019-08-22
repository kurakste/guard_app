import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.hi}>
          <Text>Login Screen</Text>
        </View>
        <View>
          <Button
            transparent
            // light
            onPress={() => {
              console.log('123');
              this.props.navigation.navigate('One');
            }}>
            <Text>Push me</Text>
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
  },
  hi: { flex: 1, alignItems: 'center', justifyContent: 'center' },
};
