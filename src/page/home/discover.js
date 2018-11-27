import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import TopScreen from '../../components/header';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});*/

type Props = {};
export default class Discover extends Component<Props> {
  /*static navigationOptions = ({navigation}) => ({
    title: 'One', // 设置头部标题
    headerRight: <TouchableOpacity
      onPress={() => navigation.state.params.rightBtnFun()}
    >
      <Text style={{color: '#fff', paddingRight: 10}}>修改</Text>
    </TouchableOpacity>
  });*/

  render() {
    return (
      <View>
        {/*<TopScreen
          style={{
            backgroundColor:"#fe7e3f",
            borderBottomWidth:1,
            borderBottomColor:"#ddd",
          }}

          titleName='发现'

          rightButton={<TouchableOpacity
            onPress={() => console.log(11)}
          >
            <Text style={{color: '#fff'}}>撤销</Text>
          </TouchableOpacity>}

          leftButton={<TouchableOpacity
            onPress={() => console.log(11)}
          >
            <Text style={{color: '#fff'}}>定位</Text>
          </TouchableOpacity>}
        />*/}
        <View style={styles.container}>
          <Text style={styles.welcome}>发现</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 100,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});