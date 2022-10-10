/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './android/src/navigations/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
