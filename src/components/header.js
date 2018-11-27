import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 新版本需要用这个，npm install--save prop-types
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  View,
  Text,
  Button,
  StatusBar,
  Platform
} from 'react-native';
let ScreenWidth = Dimensions.get('window').width;
let ScreenHeight = Dimensions.get('window').height;
const NAVBAR_HEIGHT_ANDROID=50;
const NAVBAR_HEIGHT_IOS=44;
const STATUS_BAR_HEIGHT=20;

const StatusBarShape={
  backgroundColor:PropTypes.string,
  barStyle:PropTypes.oneOf(['default', 'light-content', 'dark-content']),
  hidden:PropTypes.bool
};

class TopScreen extends React.Component{
  static propTypes = {
    // style: View.PropTypes.style,  // 对早期版本不兼容
    titleName: PropTypes.string,
    titleView: PropTypes.element, // 当标题传递的参数为元素的时候使用该变量
    leftButton: PropTypes.element, // 左边按钮
    rightButton: PropTypes.element, // 右边按钮
    statusBar: PropTypes.shape(StatusBarShape)
  };
  static defaultProps = {
    titleName: '首页',
    statusBar:{
      barStyle: 'light-content',
      hide:false,
      backgroundColor: '#fe7e3f'
    }
  };
  render(){
    const { titleName, leftButton, rightButton, titleView } = this.props;
    return(
      <View style={[{paddingTop: Platform.OS === 'ios' ? 30 : 0}, this.props.style]}>
        <StatusBar {...this.props.statusBar}/>
        <View style={styles.secHeader}>
          <View style={styles.leftCon}>
            {leftButton}
          </View>
          <View style={styles.titleCon}>
            {
              titleView ? titleView : <Text style={styles.secTitleText}>{titleName}</Text>
            }
          </View>
          <View style={styles.rightCon}>
            {rightButton}
          </View>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  secHeader:{
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent:'space-between',
    alignItems: 'center',
    height:Platform.OS === 'ios'? NAVBAR_HEIGHT_IOS:NAVBAR_HEIGHT_ANDROID,
  },
  secTitleText:{
    fontSize:18,
    fontWeight:'600',
    color: '#fff'
  },
  statusBar: {
    height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0   // android
  },
  titleCon:{
    position: 'absolute',
    left: 40,
    right: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightCon:{
    position: 'absolute',
    right: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftCon:{
    position: 'absolute',
    left: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

module.exports=TopScreen;