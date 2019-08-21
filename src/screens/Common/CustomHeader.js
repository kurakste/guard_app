import React from 'react';
import { withNavigation } from 'react-navigation';

import { Header, Body, Icon, Title, Left, Right, Button } from 'native-base';
// import Icon from 'react-native-vector-icons/Ionicons';

const CustomHeader = props => (
  <Header
    key={
      props.navigation.state.params
        ? props.navigation.state.params.DLabel
        : 'header'
    }
    androidStatusBarColor="#757171"
    style={styles.header}>
    <Left>
      <Button transparent onPress={() => props.drawerOpen()}>
        <Icon name="ios-menu" style={styles.leftButtonIcon} />
      </Button>
    </Left>
    <Body>
      <Title style={styles.body}>{props.title}</Title>
    </Body>
    <Right>{props.right}</Right>
  </Header>
);

export default withNavigation(CustomHeader);

const styles = {
  header: {
    backgroundColor: '#525050',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 2,
  },
  leftButtonIcon: {
    fontSize: 30,
    color: 'white',
  },
  body: {
    color: 'white',
    textAlign: 'left',
  },
};
