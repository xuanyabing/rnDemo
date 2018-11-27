import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar, Button, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import Dimensions from 'Dimensions'
import PropTypes from 'prop-types'; // 新版本需要用这个，npm install--save prop-types


/*const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
  'Double tap R on your keyboard to reload,\n' +
  'Shake or press menu button for dev menu',
});*/


type Props = {};
export default class SwiperPage extends Component<Props> {

  static propTypes = {
    height: PropTypes.number,
    horizontal: PropTypes.bool,
    showsButtons: PropTypes.bool,
    loop: PropTypes.bool,
    autoplay: PropTypes.bool,
    dot: PropTypes.element, // 默认圆点的样式
    activeDot: PropTypes.element, // 当前选中圆点的样式
    imgArr: PropTypes.array,  // 图片数组
  };

  static defaultProps = {
    height: 180,
    horizontal: true,
    showsButtons:false,
    loop: true,
    autoplay: true,
    dot: <View style={{           //未选中的圆点样式
      backgroundColor: 'rgba(0,0,0,.2)',
      width: 8,
      height: 8,
      borderRadius: 4,
      marginLeft: 6,
      marginRight: 6,
      marginTop: 9,
      marginBottom: 0,
    }}/> ,
    activeDot: <View style={{    //选中的圆点样式
      backgroundColor: '#fe7e3f',
      width: 8,
      height: 8,
      borderRadius: 4,
      marginLeft: 6,
      marginRight: 6,
      marginTop: 9,
      marginBottom: 0,
    }}/> ,
  };

  componentDidMount () {

  }
  render() {
    const {height, horizontal, showsButtons, loop, autoplay, imgArr, dot, activeDot} = this.props;
    return (
      <View style={{height: height}}>
        {/*轮播图*/}
        <Swiper
          height={height}
          horizontal={horizontal}
          paginationStyle={{bottom: 10}}
          showsButtons={showsButtons}
          loop={loop}
          autoplay={autoplay}
          dot={dot}
          activeDot={activeDot}
        >
          {
            imgArr.length ? imgArr.map(item =>
                <Image key={item.id} source={item.url} style={{height: height, width: Dimensions.get('window').width }}/>
              )
              : <Text>''</Text>
          }
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({


});