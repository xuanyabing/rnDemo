import React , {Component} from 'react';
import {Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';
import TopScreen from '../../components/header';

type Props = {};
export default class DoctorType extends Component<Props>{
  /*static navigationOptions = ({navigation}) => ({
    title: 'One', // 设置头部标题
    headerRight: <TouchableOpacity
      onPress={() => navigation.state.params.rightBtnFun()}
    >
      <Text style={{color: '#fff', paddingRight: 10}}>修改</Text>
    </TouchableOpacity>
  });*/
  state = {
    docType: []
  };


  componentDidMount(){
    const docType = this.props.navigation.getParam('docType');
    this.setState({
      docType
    })

  }
  render(){
    const {docType} = this.state;

    return(
      <View style={styles.hospital}>
        {/*<TopScreen

          titleName='选择挂号类型'

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


        <View style={styles.hospitalCon}>
          {
            docType ? docType.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.hospitalCell}
                onPress={() => alert('挂号成功！')}
              >
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.right}> > </Text>
              </TouchableOpacity>
            )): <Text>没有数据</Text>
          }
        </View>



      </View>
    )
  }
}

const styles = StyleSheet.create({
  hospital:{
    flex: 1,

  },
  hospitalCon: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  hospitalCell: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 16,
    paddingBottom: 16,
  },
  title:{
    fontSize: 16,
  },
  right: {
    color: '#999'
  }

});
