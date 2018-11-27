import {Dimensions, Platform, PixelRatio} from 'react-native';

const DeviceWidth = Dimensions.get('window').width;
export default function px(size) {
  const p = PixelRatio.get();
  const o = Platform.OS;
  if ( p >= 3 && o == 'ios' && size == 1 ){
    return size;
  }

  return DeviceWidth / 750 * size;
}