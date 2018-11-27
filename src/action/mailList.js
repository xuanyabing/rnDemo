export const CHANGE_TEXT = 'CHANGE_TEXT';
export const GET_NAME = 'GET_NAME';

// 初始化 CHANGE_TEXT 对象
export const changeText = (text) => {
  return {
    type: CHANGE_TEXT,
    text
  }
};

// 获取联系人列表

export const getNameList = (list) => {
  return {
    type: GET_NAME,
    list
  }
};


// saga

/*export const changeText = (text) => ({
  type: CHANGE_TEXT,
  payload: {
    text: text
  }
});
export const getNameList = (list) => ({
  type: GET_NAME ,
  payload: {
    list: list
  }
});*/
