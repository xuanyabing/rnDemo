import React , {Component} from 'react';
import {Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';
import TopScreen from '../../components/header';

// type Props = {};
export default class Details extends Component{
  /*static navigationOptions = ({navigation}) => ({
    title: 'One', // 设置头部标题
    headerRight: <TouchableOpacity
      onPress={() => navigation.state.params.rightBtnFun()}
    >
      <Text style={{color: '#fff', paddingRight: 10}}>修改</Text>
    </TouchableOpacity>
  });*/
  componentDidMount(){
    console.log(this.props);
  }

  render(){
    const {listOne} = this.props.navigation.state.params;

    return(
      <View>
        {/*<TopScreen

          titleName='详情页'

          style={{
            backgroundColor:"#fe7e3f",
            borderBottomWidth:1,
            borderBottomColor:"#ddd",
          }}

          leftButton={<TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
          >
            <Text style={{color: '#fff'}}>返回</Text>
          </TouchableOpacity>}
        />*/}
        <View style={styles.conDetails}>
          <Text style={styles.title}>{listOne.text}</Text>
          <Text>的详情页面</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.push('One', {name: 'miranda'})}
            style={{width: 200, height: 50, borderWidth: 2, borderRadius: 25, borderColor: '#ddd', marginTop: 30}}
          >
            <Text style={{textAlign: 'center', lineHeight: 46 }}>点击可以看到你的名字</Text>
          </TouchableOpacity>
        </View>



      </View>
    )
  }
}

const styles = StyleSheet.create({
  conDetails:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 22,
    marginTop: 200,
    marginBottom:10
  }
});
