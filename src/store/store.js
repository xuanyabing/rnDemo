/*import Reducer from '../reducers/reducers';
import { createStore } from 'redux';

export default () => {

  // 根据 reducer 初始化 store
  const store = createStore(Reducer);

  return store;
}*/





// saga

import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware,{ END } from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/reducers';

const middlewares = [];//中间件列表
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

if (__DEV__) {
  middlewares.push(createLogger());
}

const initialState = {};//初始化state
export default function configureStore(){

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}



/*
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import {createLogger} from 'redux-logger';
import rootReducer from '../reducers/reducers';
import saga from '../saga/saga';

const configureStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState,
    compose (
      applyMiddleware(sagaMiddleware, createLogger())
    )
  );

  sagaMiddleware.run(saga);
  store.close = () => store.dispatch(END);
  return store;
};

const store = configureStore();
export default store;*/
