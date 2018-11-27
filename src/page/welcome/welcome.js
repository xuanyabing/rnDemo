import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Button, TouchableOpacity} from 'react-native';
import Navigation, { createStackNavigator,createBottomTabNavigator} from 'react-navigation';



type Props = {};
let timer = null;
export default class One extends Component<Props> {

  componentDidMount () {
    console.log(3333);
    console.log(this.Props);
    // timer = setTimeout(() => {d
      // this.props.navigation.push('Tab')
    // }, 2000)

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.con}>ReactNative欢迎你</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fe7e3f'
  },
  con: {
    color: '#fff',
    fontSize: 30
  }
});