/** @format */

import {AppRegistry, YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);
import routerNav from './src/index';
import WelCome from './src/page/welcome/welcome'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => routerNav);
