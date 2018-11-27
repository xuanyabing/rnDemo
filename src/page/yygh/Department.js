import React , {Component} from 'react';
import {Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';
import TopScreen from '../../components/header';

type Props = {};
export default class Department extends Component<Props>{
  /*static navigationOptions = ({navigation}) => ({
    title: 'One', // 设置头部标题
    headerRight: <TouchableOpacity
      onPress={() => navigation.state.params.rightBtnFun()}
    >
      <Text style={{color: '#fff', paddingRight: 10}}>修改</Text>
    </TouchableOpacity>
  });*/
  state = {
    department: [],
    current: 0,
    twoList: [],
    docType: []
  };


  componentDidMount(){
    const department = this.props.navigation.getParam('department');
    const docType = this.props.navigation.getParam('docType');


    const twoList = department[0].twoList ? department[0].twoList : null;
    console.log(567890);
    console.log(department);
    this.setState({
      department,
      twoList,
      docType
    });
  }

  oneDepFun = (item, index) => {
    console.log(333);
    console.log(item);

    this.setState({
      current: index
    })

    if (item.twoList){
      this.setState({
        twoList: item.twoList
      })
    } else {
      let arr = [];
      arr.push(item);
      this.setState({
        twoList: arr
      })
    }

  };

  twoDepFun = (item) => {

  };

  render(){
    const {department, current, twoList, docType} = this.state;

    return(
      <View style={styles.hospital}>
        {/*<TopScreen

          titleName='选择科室'

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
          <View style={styles.hLeft}>
            {
              department ? department.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  style={[{backgroundColor: current === index ? '#fff' : '#efefef'}, styles.oneDep]}
                  onPress={() => this.oneDepFun(item, index)}
                >
                  <Text >
                    {item.name}
                  </Text>
                </TouchableOpacity>

              )): <Text />
            }
          </View>
          <View style={styles.hRight}>
            {
              twoList ? twoList.map((item, index) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.twoDep}
                  onPress={() => this.props.navigation.push('DoctorType', {docType: docType})}
                >
                  <Text >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )) : <Text>没有二级科室</Text>
            }
          </View>
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
    // padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center'
  },
  hLeft:{
    flex: 1,
    // padding: 10,
    backgroundColor: '#efefef',
  },
  hRight:{
    flex: 2
  },
  oneDep: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  twoDep:{
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 10,
    paddingRight: 10,
  }

});
