import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, TextInput, Switch} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import TopScreen from '../../components/header';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});*/

export default class My extends Component {
  state = {
    text: '',
    switch: false,
    textList: ''
  };
  componentDidMount(){
    // alert(1111);
  }


  render() {
    const { list } = this.state;
    return (
      <View style={styles.con}>
        {/*<TopScreen
          style={{
            backgroundColor:"#fe7e3f",
            borderBottomWidth:1,
            borderBottomColor:"#ddd",
          }}

          titleName='我的'

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

        <View style={styles.inputCon}>

          <TextInput
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            style={styles.text}
          />
          <TouchableOpacity
            onPress={() => alert(this.state.text)}
            style={styles.sureBtn}
          >
            <Text style={{color: '#fff', height: 40, lineHeight: 40, textAlign: 'center',}}>确定</Text>
          </TouchableOpacity>
        </View>

        <KeyboardAwareScrollView>
          <View style={styles.inputCon}>
            <View style={styles.listCell}>
              <Text style={styles.listTitle}>时间</Text>
              <Text style={styles.listRight}>2018-11-20</Text>
            </View>
            <View style={styles.listCell}>
              <Text style={styles.listTitle}>地点</Text>
              <Text style={styles.listRight}>北京市朝阳区</Text>
            </View>
            <View style={styles.listCell}>
              <Text style={styles.listTitle}>开关</Text>
              <Switch value={this.state.switch} onValueChange={(value) => this.setState({switch: value}) } />
            </View>
            <View style={styles.listCell}>
              <Text style={styles.listTitle}>姓名</Text>
              <TextInput
                // multiline = {true}
                maxLength={100}
                // numberOfLines={2}
                placeholder={'我可以编辑'}
                onChangeText={(textList) => this.setState({textList})}
                value={this.state.textList}
                style={styles.textList}
              />
            </View>

          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  con:{
    flex: 1,
    backgroundColor: '#fff'
  },
  inputCon:{
    padding: 10
  },
  contentContainer:{
    flex: 1,
    height: 400
  },
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    // margin: 100,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text:{
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 6,
    paddingRight: 60
  },
  sureBtn:{
    position: 'absolute',
    right: 10,
    top: 10,
    width: 60,
    backgroundColor: '#fe7e3f',
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6
  },
  listCell:{
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 4,
    paddingRight: 4
  },
  listTitle:{
    fontSize: 16,
    // verticalAlign: 'middle'
  },
  listRight: {
    fontSize: 14,
    color: '#999'
  },
  textList: {
    borderWidth: 0,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 0,
    paddingBottom: 0,
    color: '#999',
    // textAlignVertical: 'top',
    // verticalAlign: 'middle'
  }
});