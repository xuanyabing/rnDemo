import { combineReducers } from 'redux';
import { CHANGE_TEXT, changeText, GET_NAME } from '../action/mailList';


/*
const mainReducer = (state = changeText('click me try'), action) => {  // state = changeText('click me try')初始化state的值

  const newState = state;
  const text = action.text;
  const list = action.list;

  // 判断 action 类型
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...newState,
        text: '改变了' + text
      };
    case GET_NAME:
      return {
        ...newState,
        nameList: list
      };
    default:
      return {
        ...newState,
        text:state.text
      }
  }
};

export default mainReducer;
*/



// saga

// const mainReducer = (state = changeText('click me try'), action) => {
const rootReducer = (state = changeText('click me try'), action) => {
  console.log(345555);
  console.log(action);
  console.log(state);

  const text = action.text;
  const list = action.list;

  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: text
      };
    case GET_NAME:
      return {
        ...state,
        nameList: list
      };
    default:
      return {
        ...state
      }
  }
};
/*function timer(state = defaultState, action) {
  switch (action.type) {
    case START:
      return { ...state, runStatus: true };
    case STOP:
      return { ...state, runStatus: false };
    case RESET:
      return { ...state, seconds: 0 };
    case RUN_TIMER:
      return { ...state, seconds: state.seconds + 1 };
    default:
      return state;
  }
}*/

/*export default rootReducer = combineReducers({
  mainReducer
});*/
export default rootReducer