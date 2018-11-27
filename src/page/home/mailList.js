import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Platform, StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Image, Modal, TouchableHighlight, Switch} from 'react-native';
import TopScreen from '../../components/header';
import { changeText, getNameList } from '../../action/mailList';
import banner from '../../asset/img/banner.png';

/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});*/

class MailList extends Component {
  state = {
    modalVisible: false,
    transparent: true,
    madalShowName: '',
    phone: ''
  };
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(changeText('点我试试'));
    dispatch(getNameList(
      [
        {
          name: '小红',
          url: banner,
          id: 1,
          phone: '18097685546'
        }, {
        name: '明明',
        url: banner,
        id: 2,
        phone: '12246798763'
      }, {
        name: '猪猪',
        url: banner,
        id: 3,
        phone: '4763982'
      }
      ]
    ));
    // const {onGetNameList} = this.props;
    /*onGetNameList([
      {
        name: '小红',
        url: banner,
        id: 1,
        phone: '18097685546'
      }, {
        name: '明明',
        url: banner,
        id: 2,
        phone: '12246798763'
      }, {
        name: '猪猪',
        url: banner,
        id: 3,
        phone: '4763982'
      }
    ]);*/
  }
  onChangeText = () => {
    const {onChangeText, dispatch} = this.props;
    dispatch(changeText('我是从store中取的数据哦'))
  };
  // flatList 分割线组件
  getBorder = () => {
    return <View style={{height: 1, backgroundColor: '#eee' }}/>
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  };

  modalFun = (item) => {
    console.log(item);
    console.log(777);
    this.setState({
      madalShowName: item.name,
      phone: item.phone
    }, () => {
      this.setModalVisible(true)
    });
  };


  render() {
    const {text, nameList} = this.props;
    const { madalShowName, phone } = this.state;
    const modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
    };
    const innerContainerTransparentStyle = this.state.transparent
      ? {backgroundColor: '#fff', padding: 20}
      : null;
    return (
      <View>
        {/*<TopScreen
          style={{
            backgroundColor:"#fe7e3f",
            borderBottomWidth:1,
            borderBottomColor:"#ddd",
          }}

          titleName='通讯录'

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
          <TouchableOpacity
            onPress={this.onChangeText}
          >
            <Text style={styles.testText}>{text}</Text>
          </TouchableOpacity>

          <FlatList
            ItemSeparatorComponent={this.getBorder}
            keyExtractor={(item, index) => item.id.toString()}
            data={nameList}
            initialNumToRender={5}
            renderItem={({item, separators}) =>(
              <TouchableOpacity
                style={styles.nameListCell}
                onPress={() => {
                  this.modalFun(item);
                }}
              >
                <Image source={item.url} style={styles.imgLeft}/>
                <Text style={styles.title}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />

        </View>

        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >
          <View style={[styles.modalContainer, modalBackgroundStyle]}>
            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
              <Text style={styles.modalTitle}>{madalShowName}</Text>
              <Text>{phone}</Text>

              <View style={styles.modalButtonCon}>
                  <Text
                    style={styles.modalConfirm}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible)
                    }}
                  >打电话</Text>

                  <Text
                    style={styles.modalCancel}
                    onPress={() => {
                      this.setModalVisible(!this.state.modalVisible)
                    }}
                  >取消</Text>
              </View>

            </View>
          </View>
        </Modal>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  modalTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  modalConfirm: {
    color: '#fe7e3f',
  },
  modalCancel:{
    color: '#999',
  },
  modalButtonCon:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 20,
    borderTopColor: '#EEE',
    borderTopWidth: 1
  },
  container: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  innerContainer: {
    borderRadius: 10,
    alignItems: 'center',
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
  testText:{
    fontSize: 14,
    margin: 20,
    textAlign: 'center'
  },
  nameListCell:{
    flexDirection: 'row',
    // textAlign: 'left'
    padding: 10,
  },
  imgLeft: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginLeft: 10
  },
  title: {
    lineHeight: 40
  },
});

// 获取 state 变化
const mapStateToProps = (state) => {
  console.log(56789);
  console.log(state);
  const { text, nameList } = state;
  return {
    // 获取 state 变化
    text, nameList
  }
};

// 发送行为
/*const mapDispatchToProps = (dispatch) => {
  console.log(dispatch);

  return {
    // 发送行为
    onChangeText:(text) => dispatch(changeText(text)),
    onGetNameList:(list) => dispatch(getNameList(list)),
  }
};*/

// 进行第二层包装,生成的新组件拥有 接收和发送 数据的能力
// export default connect(mapStateToProps, mapDispatchToProps)(MailList);
export default connect(mapStateToProps)(MailList);