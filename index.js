/**
 * @format
 */

import { AppRegistry, YellowBox } from 'react-native';
import App from './src/screens';
import { name as appName } from './app.json';

YellowBox.ignoreWarnings([
  'Warning: componentWillUpdate is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

AppRegistry.registerComponent(appName, () => App);
