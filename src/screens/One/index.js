import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import CustomHeader from '../Common/CustomHeader';

const One = () => (
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

export default One;
