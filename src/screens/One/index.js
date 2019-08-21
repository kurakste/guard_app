import React, { Component, Fragment } from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';
import CustomHeader from '../Common/CustomHeader';

class One extends Component<Props, State> {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      header: null,
      headerStyle: {
        backgroundColor: '#525050',
      },
      title: 'one', // drawer label initialization
      drawerLabel: params && params.DLabel,
      drawerIcon: ({ tintColor }) => (
        <Icon
          type="FontAwesome"
          name="retweet"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{ fontSize: 22, color: tintColor }}
        />
      ),
    };
  };

  render() {
    return (
      <Fragment>
        <CustomHeader
          title={'One'}
          drawerOpen={() => this.props.navigation.openDrawer()}
        />
        <View>
          <Text> One </Text>
        </View>
      </Fragment>
    );
  }
}

export default One;
