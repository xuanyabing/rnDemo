// 用于存放日志
let logs = [];

// 如果日志超过200条，就释放最早的一条
function add(log) {
  logs.push(log);
  if(logs.length > 200) logs.shift();
}

// 返回日志
exports.getLogs = function(){
  return logs;
}

// 获取单个日志内容
exports.getLog = function (index) {
  return logs[index];
}

// 输出信息
exports.log = function (...args) {
  add(args);
  if (__DEV__){
    let info = args.concat();
    info[0] = '%c' + info[0];
    info.splice(0, 1, 'color: #3fc1fe');
    console.log(...info);
  }
}

// 输出警告
exports.logWarm = function (...args) {
  add(args);
  if (__DEV__){
    let info = args.concat();
    info[0] = '%c' + info[0];
    info.splice(0, 1, 'color: #febd3f');
    console.log(...info);
  }
}

// 输出错误
exports.logErr = function (...args) {
  add(args);
  if (__DEV__){
    let info = args.concat();
    info[0] = '%c' + info[0];
    info.splice(0, 1, 'color: #fe3f3f');
    console.log(...info);
  }
}