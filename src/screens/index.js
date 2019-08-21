// @flow
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  getActiveChildNavigationOptions,
} from 'react-navigation';
import React, { Component } from 'react';
import One from './One';
import Two from './Two';
import DrawerScreen from './Common/DrawerScreen';

const Navigator = createDrawerNavigator(
  {
    One,
    Two,
  },
  {
    initialRouteName: 'One',
    contentComponent: DrawerScreen,
    drawerWidth: 300,
    // drawerBackgroundColor: 'transparent',
    // unmountInactiveRoutes: true,
    contentOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: '#525050',
    },
  },
);

const AppContainer = createAppContainer(Navigator);

type Props = {};

class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}
export default App;
