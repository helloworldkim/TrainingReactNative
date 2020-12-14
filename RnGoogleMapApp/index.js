/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import App from './apps/App';
import { name as appName } from './app.json';
import Main from './apps/Main';

AppRegistry.registerComponent(appName, () => Main);
