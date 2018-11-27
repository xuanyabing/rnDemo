import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Button, TouchableOpacity} from 'react-native';
import px from '../../utils/px';
import TopScreen from '../../components/header';


/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});*/



type Props = {};
export default class One extends Component<Props> {
  /*static navigationOptions = ({navigation}) => ({
      title: 'One',
      headerRight: <TouchableOpacity
        onPress={() => navigation.state.params.rightBtnFun()}
      >
        <Text style={{color: '#fff', paddingRight: 10}}>修改</Text>
      </TouchableOpacity>
  });*/
  state={
    name: ''
  };
  componentDidMount () {
    const name = this.props.navigation.getParam('name');
    this.setState({
      name: name
    });

    this.props.navigation.setParams({rightBtnFun: this.rightBtnFun})

    console.log('one');
    console.log(this.props);
  }

  rightBtnFun = () => {
    alert(8888);
  };
  render() {
    const { name } = this.state;
    return (
      <View style={styles.container}>
        {/*<TopScreen
          style={{
            backgroundColor:"#fe7e3f",
            borderBottomWidth:1,
            borderBottomColor:"#ddd",
          }}

          titleName='第一个页面'

          leftButton={<TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
          >
            <Text style={{color: '#fff'}}>返回</Text>
          </TouchableOpacity>}

          rightButton={<TouchableOpacity
            onPress={() => console.log(11)}
          >
            <Text style={{color: '#fff'}}>撤销</Text>
          </TouchableOpacity>}

        />*/}
        <View style={styles.conBottom}>
          <Text>我有一个新名字：{this.state.name}</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.popToTop()}
            style={{width: 200, height: 50, borderWidth: 2, borderRadius: 25, borderColor: '#ddd', marginTop: 30}}
          >
            <Text style={{textAlign: 'center', lineHeight: 46 }}>跳转到首页</Text>
          </TouchableOpacity>

        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  test:{
    width: px(750),
    backgroundColor: '#fe7e3f'
  },
  test2:{
    textAlign: 'center',
    fontSize: px(36)
  },
  container: {
    width: '100%',
    height: '100%',
    /*flex: 1,
    justifyContent: 'center',
    alignItems: 'center',*/
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  conBottom:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40
  }
});