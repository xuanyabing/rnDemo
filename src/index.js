/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View, StyleSheet, Image, StatusBar} from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import rootSaga from './sagas/index';
import Icon from "react-native-vector-icons/FontAwesome"
//添加路由组件
import Navigation, { createStackNavigator,createBottomTabNavigator} from 'react-navigation';

//添加展示用的首页
import Home from './page/home/index'
import Discover from './page/home/discover'
import MailList from './page/home/mailList'
import My from './page/home/my'
import One from './page/indexPage/one'
import Details from './page/details/details'
import HospitalArea from './page/yygh/hospitalArea'
import Department from './page/yygh/Department'
import DoctorType from './page/yygh/doctorType'
import WelCome from './page/welcome/welcome'

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});*/

/*type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}*/

// 调用 store 文件中的 mainReducer常量中保存的方法
const store = configureStore();
store.runSaga(rootSaga);

//创建tab页的顶部样式
const styles = StyleSheet.create({
  tabLabel: {
    marginBottom: 4
  }
});

//创建首页的tab页
const Tabs = createBottomTabNavigator({
  'Home': {
    screen: Home,
    navigationOptions: ({ navigation, screenProps }) => {
      return {
        tabBarLabel: '首页',
        /*tabBarOnPress: (params) => {
          const {setParams} = params.navigation;
          setParams({path: 'home'});
          return true;
        }*/
        tabBarIcon: (opt) => {
          if (opt.focused) return <Icon name="glass" size={20} color="#fe7e3f" />;
          return <Icon name="glass" size={20} color="#999" />;
        }
      }
    }
  },
  'MailList': {
    screen: MailList,
    navigationOptions: ({ navigation, screenProps }) => {
      return {
        tabBarLabel: '通讯录',
        tabBarIcon: (opt) => {
          if (opt.focused) return <Icon name="glass" size={20} color="#fe7e3f" />;
          return <Icon name="glass" size={20} color="#999" />;
        }
      }
    }
  },
  'Discover': {
    screen: Discover,
    navigationOptions: ({ navigation, screenProps }) => {
      return {
        tabBarLabel: '发现',
        tabBarIcon: (opt) => {
          if (opt.focused) return <Icon name="glass" size={20} color="#fe7e3f" />;
          return <Icon name="glass" size={20} color="#999" />;
        }
      }
    }
  },
  'My': {
    screen: My,
    navigationOptions: ({ navigation, screenProps }) => {
      return {
        tabBarLabel: '我的',
        tabBarIcon: (opt) => {
          if (opt.focused) return <Icon name="glass" size={20} color="#fe7e3f" />;
          return <Icon name="glass" size={20} color="#999" />;
        }
      }
    }
  },
}, {
  //设置tab使用的组件
  // tabBarComponent: Navigation.TabBarBottom,
  //点击哪个才加载哪个tab里的页面
  lazy: true,
  //设置tab放在界面的底部
  tabBarPosition: 'bottom',
  //设置tab里面的样式
  tabBarOptions: {
    style: {
      // height: 50,
      backgroundColor: '#fbfafc',
      borderTopColor: '#ddd'
    },
    labelStyle: {
      // height: 50,
      // lineHeight: 50,
      // fontSize: 14,
      paddingBottom: 6
    },
    // activeBackgroundColor: '#fe7e3f',
    showIcon: true,
    activeTintColor:'#fe7e3f',
    inactiveTintColor: '#999'
  },

});

const Page = createStackNavigator(
  {
    WelCome: {
      screen: WelCome,
      navigationOptions:(navigation) => ({
        // header: null
      })
    },
    Tab: {
      screen:Tabs,
      navigationOptions:(navigation) => {
        let title = '首页';
        const {routes} = navigation.navigation.state;
        return {
          title: title,
          headerBackTitle: null
        }
      }
    },
    // Home: {screen: Home},
    One: {
      screen: One,
      navigationOptions: (navigation) => {
        return {
          title: '二级跳转',
          headerBackTitle: null
        }
      }
    },
    Details: {
      screen: Details,
      navigationOptions: (navigation) => {
        return {
          title: '详情',
          headerBackTitle: null
        }
      }
    },
    HospitalArea: {
      screen: HospitalArea,
      navigationOptions: (navigation) => {
        return {
          title: '选择院区',
          headerBackTitle: null
        }
      }
    },
    Department: {
      screen: Department,
      navigationOptions: (navigation) => {
        return {
          title: '选择科室',
          headerBackTitle: null
        }
      }
    },
    DoctorType: {
      screen: DoctorType,
      navigationOptions: (navigation) => {
        return {
          title: '选择医生',
          headerBackTitle: null
        }
      }
    }

  },
  {
    initialRouteName: 'Tab',
    /// headerMode: 'none',
    /* 这里定义的头部样式对栈中的每个屏幕生效除非那个屏幕类覆盖了改定义 */
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#fe7e3f',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal'
      },
    },
  },
 {
  //这里做了一个页面跳转的动画
  transitionConfig: () => ({
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;
      //设置页面跳转的动画
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [layout.initWidth, 0, 0]
      });
      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index, index + 0.99, index + 1],
        outputRange: [0, 1, 1, 0.3, 0]
      });
      return { opacity, transform: [{ translateX }] };
    }
  }),
  navigationOptions: {
    header: null
  }
});

//创建一个自己的容器,方便以后对路由做一些处理
export default class routerNav extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Page onNavigationStateChange={this.listenChange.bind(this)} />
      </Provider>
    )
  }
  //监听路由的跳转
  listenChange(state1, state2, action) {

  }
}



