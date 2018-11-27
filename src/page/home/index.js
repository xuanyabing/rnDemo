import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Button, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import px from '../../utils/px';
import HttpUtils from '../../utils/requst';
import TopScreen from '../../components/header';
import SwiperPage from '../../components/swiper';
import banner from '../../asset/img/banner.png';
import bacx from '../../asset/img/icon_bgcx.png';


export default class Index extends Component {
  /*static navigationOptions = ({navigation}) => ({
    title: 'One', // 设置头部标题
    headerRight: <TouchableOpacity
      onPress={() => navigation.state.params.rightBtnFun()}
    >
      <Text style={{color: '#fff', paddingRight: 10}}>修改</Text>
    </TouchableOpacity>
  });*/

  state = {
    result: '',
    navList: [
      {
        url: bacx,
        text: '健康咨询',
        id: 1
      },{
        url: bacx,
        text: '预约挂号',
        id: 2
      },{
        url: bacx,
        text: '地点',
        id: 3
      },{
        url: bacx,
        text: '健康云',
        id: 4
      },{
        url: bacx,
        text: '云计算',
        id: 5
      },{
        url: bacx,
        text: '大数据',
        id: 6
      }
    ],
    tabList: [
      {
        title: '新闻',
        id: 'xw',
        tab: 1
      },{
        title: '娱乐',
        id: 'yl',
        tab: 2
      },{
        title: '阅读',
        id: 'yd',
        tab: 3
      },{
        title: '运动',
        id: 'ydong',
        tab: 4
      },{
        title: '金融',
        id: 'jr',
        tab: 5
      }
    ],
    acTab: 1,
    newList: [],
    extraData: [
      {
        name: '最新'
      }
    ],
    refresh: true
  };


  componentDidMount(){
    console.log(222);
    console.log(this.props);
    // alert(222);
    const url = 'http://10.67.78.120:10080/demotest/login';
    const paramsData = {
      "userName":"admin",
      "password":"202cb962ac59075b964b07152d234b70"
    };
    HttpUtils.post(url, paramsData)
      .then(result=>{
        alert(5);
        alert(result);
        // console.log(result);
        this.setState({
          result:JSON.stringify(result)
        })
      })
      .catch(error=>{
        console.log(error);
        /*this.setState({
          result:JSON.stringify(error)
        })*/
      })
    // HttpUtils.post(url, paramsData);



    setTimeout(() => {
      this.setState({
        newList: [
          {
            title: '李永去世',
            con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
            id: 1,
            url: banner
          }, {
            title: '李永去世',
            con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
            id: 2,
            url: banner
          }, {
            title: '李永去世',
            con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
            id: 3,
            url: banner
          }, {
            title: '李永去世',
            con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
            id: 4,
            url: banner
          }, {
            title: '李永去世',
            con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
            id: 5,
            url: banner
          }, {
            title: '李永去世',
            con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
            id: 6,
            url: banner
          }, {
            title: '李永去世',
            con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
            id: 7,
            url: banner
          }, {
            title: '李永去世',
            con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
            id: 8,
            url: banner
          }
        ]
      },() => {
        this.setState({
          refresh: false
        })
      })
    },3000);
  }

  // go details
  goNext = (item) => {

    if(item.id === 2){
      this.props.navigation.push('HospitalArea',{listOne: item});
    }else{
      this.props.navigation.push('Details',{listOne: item});
    }

  };

  // tabSwitch
  tabSwitch = (item) => {
    console.log(item.tab);
    const tab = item.tab;
    this.setState({
      acTab: item.tab
    })
    if (tab === 2){
      this.setState({
        refresh: true
      });
        setTimeout(() => {
        this.setState({
          newList: [
            {
              title: '这条新闻关于杨澜',
              con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
              id: 1,
              url: banner
            }, {
              title: '李永去世',
              con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
              id: 2,
              url: banner
            }, {
              title: '李永去世',
              con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
              id: 3,
              url: banner
            }
          ]
        },() => {
          this.setState({
            refresh: false
          })
        })
      },3000);
    } else if(tab === 1){
      this.setState({
        refresh: true
      })
      setTimeout(() => {
        this.setState({
          newList: [
            {
              title: '李永去世',
              con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
              id: 1,
              url: banner
            }, {
              title: '李永去世',
              con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
              id: 2,
              url: banner
            }, {
              title: '李永去世',
              con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
              id: 3,
              url: banner
            }, {
              title: '李永去世',
              con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
              id: 4,
              url: banner
            }, {
              title: '李永去世',
              con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
              id: 5,
              url: banner
            }, {
              title: '李永去世',
              con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
              id: 6,
              url: banner
            }, {
              title: '李永去世',
              con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
              id: 7,
              url: banner
            }, {
              title: '李永去世',
              con: '50岁李永刚走，又一个主持人传来不好的消息，网友无言以对',
              id: 8,
              url: banner
            }
          ]
        },() => {
          this.setState({
            refresh: false
          })
        })
      },3000);

    } else {
      this.setState({
        refresh: true
      })
      setTimeout(() => {
        this.setState({
          newList: []
        },() => {
          this.setState({
            refresh: false
          })
        })
      },3000);
    }
  };
  // new details
  goNewDetail = () => {

  };

  // flatList 分割线组件
  getBorder = () => {
    return <View style={{height: 1, backgroundColor: '#eee' }}/>
  };
  // flatList内容为空的组件
  getEmpty = () => {
    return <Text style={{alignSelf: 'center',marginTop: 100, marginBottom: 100 }}>
      {
        this.state.refresh ? '' : '该项没有数据哦！'
      }

    </Text>
  };

  // refresh
  refreshFun = () => {
    alert('onRefresh: nothing to refresh :P');
  };

  render() {
    const { navList, tabList, acTab, newList, extraData, refresh } = this.state;
    console.log('render');
    console.log(refresh);
    return (


        <View style={styles.container}>
          <StatusBar barStyle={'light-content'} />
          {/*<TopScreen
            style={{
              backgroundColor:"#fe7e3f",
              borderBottomWidth:1,
              borderBottomColor:"#ddd",
            }}

            rightButton={<TouchableOpacity
              onPress={() => console.log(11)}
            >
              <Text style={{color: '#fff'}}>撤销</Text>
            </TouchableOpacity>}
          />*/}

          <ScrollView
            // ref={(scrollView) => { _scrollView = scrollView; }}
            automaticallyAdjustContentInsets={false}
            // horizontal={true}
            style={styles.scrollView}>

          <SwiperPage
            height={180}
            horizontal= {true}
            showsButtons= {false}
            loop= {true}
            autoplay= {true}
            imgArr={[
              {
                url: banner,
                id: 1
              },
              {
                url: banner,
                id: 2
              },
              {
                url: banner,
                id: 3
              },
            ]}
          />

          <View style={styles.navListCon}>
            {
              navList.length ? navList.map(item => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.navListCell}
                  onPress={() => {this.goNext(item);}} >
                  <Image source={item.url} style={styles.navImg} />
                  <Text style={styles.navText}>{item.text}</Text>
                </TouchableOpacity>
              )): <Text/>
            }
          </View>
          <View style={styles.tabCon}>
            {
              tabList ? tabList.map((item) => (
                <Text
                  key={item.id}
                  style={[styles.tabText, acTab === item.tab ? styles.activeTab : '']}
                  onPress={() => this.tabSwitch(item)}
                >{item.title}</Text>
              )) : <Text/>
            }
          </View>

          <FlatList
            ItemSeparatorComponent={this.getBorder}
            ListEmptyComponent={this.getEmpty}
            // ListFooterComponent={<Text>这是尾部</Text>}
            // ListHeaderComponent={<Text>这是头部</Text>}
            keyExtractor={(item, index) => item.id.toString()}
            data={newList}
            initialNumToRender={5}
            onRefresh={this.refreshFun}
            refreshing={refresh}
            // extraData={extraData}
            renderItem={({item, separators}) =>(
              <TouchableOpacity
                // key={item.id}
                onPress={() => {this.goNewDetail(item)} }
                style={styles.newListCell}
              >
                <Image source={item.url} style={styles.imgLeft}/>
                <View style={styles.newCon}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.newConText}>{item.con}</Text>
                </View>
              </TouchableOpacity>
            )}
          />

          </ScrollView>
        </View>


    );
  }
}

const styles = StyleSheet.create({
  contentContainer:{
    flex: 1
  },
  test:{
    width: px(750),
    backgroundColor: '#fe7e3f'
  },
  test2:{
    textAlign: 'center',
    fontSize: px(36)
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
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
  navListCon:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'flex-start',
    alignItems: 'flex-start',
    backgroundColor:'#fff',
    paddingBottom: 14
  },
  navText: {
    marginTop: 6,
  },
  navListCell:{
    marginTop: 10,
    width: '25%',
    alignItems: 'center',
  },
  tabCon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
    backgroundColor: '#fff',
    paddingLeft:10,
    paddingRight:10,
    overflow: 'scroll'
  },
  tabText:{
    lineHeight: 50,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18
  },
  activeTab: {
    color: '#fe7e3f'
  },
  newListCell: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
  },
  imgLeft:{
    flex: 2,
    // width: 100,
    height: 70,
    marginRight: 10
  },
  newCon:{
    paddingRight: 10,
    flex: 5
  },
  title: {
    fontSize: 18,
    color: '#333',
    marginBottom: 10
  },
  newConText:{
    fontSize: 14,
    color: '#666',
    lineHeight: 16
  }
});