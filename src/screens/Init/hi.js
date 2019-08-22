import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

class Hi extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.hi}>
          <Text>Hi Screen</Text>
        </View>
        <View>
          <Button
            transparent
            // light
            onPress={() => {
              this.props.navigation.navigate('Login');
            }}>
            <Text>Push me</Text>
          </Button>
        </View>
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
  hi: { flex: 1, alignItems: 'center', justifyContent: 'center' },
};
