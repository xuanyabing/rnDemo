import { call, put, take, select, all, takeEvery, takeLatest, fork } from 'redux-saga/effects';
import { changeText, getNameList } from '../action/mailList';
import banner from '../asset/img/banner.png';

export function* changeTextFun(params) {
  try {

    yield put(changeText(params))

  } catch (e) {

    console.log('detail fetchBookDetail:', e.message);

  }

};
export function* getNameListFun() {
  try {
    const response = yield call(() => {
        return setTimeout(() => {
          return [
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
        })
    }
    );
    // console.log('------------');
    // console.log(response);
    yield put(getNameList(
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
    ))

  } catch (e) {

    console.log('detail fetchBookDetail:', e.message);

  }

};

// export default function* rootSaga() {
  /*yield [
    fork(getNameListFun)
  ];*/
  // yield takeLatest('GET_NAME', getNameListFun);
  /*yield all([
    changeTextFun('hhhhhhhhhh'),
    getNameListFun(),
  ])*/
// }

const rootSaga = function* root() {
  /*console.log(3333);
  yield all([
    getNameListFun()
  ])*/
};
export default rootSaga;
