import React , {Component} from 'react';
import {Text, Button, View, StyleSheet, TouchableOpacity} from 'react-native';
import TopScreen from '../../components/header';

type Props = {};
export default class HospitalArea extends Component<Props>{
  /*static navigationOptions = ({navigation}) => ({
    title: 'One', // 设置头部标题
    headerRight: <TouchableOpacity
      onPress={() => navigation.state.params.rightBtnFun()}
    >
      <Text style={{color: '#fff', paddingRight: 10}}>修改</Text>
    </TouchableOpacity>
  });*/
  state = {
    hospitalList: []
  };


  componentDidMount(){
    console.log(this.props);
    let arr = '{"hospitalArea":[{"name":"东院区","id":"dq"},{"name":"西院区","id":"xq"},{"name":"一区","id":"yq"},{"name":"二区","id":"eq"}],"Department":[{"name":"内科","id":"nk","child":true,"twoList":[{"name":"呼吸科","id":"hxk"},{"name":"老年病科","id":"lnbk"},{"name":"免疫科","id":"myk"},{"name":"肾病内科","id":"sbnk"}]},{"name":"外科","id":"wk","child":true,"twoList":[{"name":"肝胆外科","id":"gdwk"},{"name":"普外科","id":"pwk"}]},{"name":"儿科","id":"erk","child":false},{"name":"耳鼻喉科","id":"ebk","child":false},{"name":"妇产科","id":"fck","child":false},{"name":"精神心理科","id":"jsxlk","child":false},{"name":"口腔科","id":"kqk","child":false}],"checkListDoc":[{"name":"专家号","id":"zjh"},{"name":"普通号","id":"pth"}]}';
    arr = JSON.parse(arr);
    this.setState({
      hospitalList: arr
    })
  }

  render(){
    const {hospitalList} = this.state;
    const {hospitalArea, Department, checkListDoc} = hospitalList;
    console.log(hospitalArea);
    console.log(hospitalArea instanceof Array);

    return(
      <View style={styles.hospital}>
        {/*<TopScreen

          titleName='选择院区'

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
            hospitalArea ? hospitalArea.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.hospitalCell}
                onPress={() => this.props.navigation.push('Department', {department: Department, docType: checkListDoc})}
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
