import React from 'react';
import { DrawerItems } from 'react-navigation';
import { Image, SafeAreaView } from 'react-native';
import { Container, Content, Header, Body } from 'native-base';

import images from '../../images';

const DrawerScreen = props => (
  <Container>
    <SafeAreaView
      style={styles.safeAreaView}
      forceInset={{ top: 'always', horizontal: 'never' }}>
      {/* <StatusBar barStyle="dark-content" backgroundColor="#757171" /> */}
      <Header androidStatusBarColor="#31312f" style={styles.drawerHeader}>
        <Body>
          <Image
            resizeMode="cover"
            style={styles.drawerImage}
            source={images.logo}
          />
        </Body>
      </Header>
      <Content>
        <DrawerItems {...props} />
      </Content>
    </SafeAreaView>
  </Container>
);

export default DrawerScreen;

const styles = {
  safeAreaView: {
    flex: 1,
  },
  menuItem: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  drawerHeader: {
    height: 180,
    backgroundColor: 'white',
  },
  drawerImage: {
    height: 180,
    width: 300,
    alignSelf: 'center',
  },
};
