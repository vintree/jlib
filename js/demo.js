var map = new Map();

//map.put('a', 1);
//map.put('b', 2);
//map.put('c', 3);
//map.put('d', '4');
//
//console.log(map);

var list = [100,200,300,400,20000,500,300,200,900];

//var num = list.reduce(function(previous, current, index, array) {
//  
//  console.log(previous);
//  console.log(current);
//  console.log(index);
//  console.log(array);
//  return previous + current;
//});

//function decodeQuery(v) {
//    var search = decodeURI(document.location.search);
//    return search.replace(/(^\?)/, '').split('&').reduce(function(result, item){
//      var values = item.split('=');
//      result[values[0]] = values[1];
//      return result;
//    });
//}
//console.log(decodeQuery());
//
//function GetRequest() {
//  
//  var url = location.search; //获取url中"?"符后的字串
//   var theRequest = new Object();
//   if (url.indexOf("?") != -1) {
//      var str = url.substr(1);
//      strs = str.split("&");
//      for(var i = 0; i < strs.length; i ++) {
//         theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
//      }
//   }
//   return theRequest;
//}
//console.log(GetRequest());


var array = new Array('1','2','3','4','5','4','2','4');
console.log('---Array---数组');
console.log('按下标找到：' + array.ix(4));
console.log('按下标全部找到：' + array.ixAll(4));
console.log('按值删除：' + array.rmVal(2));
console.log('按值全部删除：' + array.rmValAll(2));
console.log('按下标删除：' + array.rmIx(0));
console.log('去重：' + array.unique());
console.log('加强排序：' + array.sort());
console.log('\n');

var error = new Error();
console.log('---Error---错误');
console.log('null，undefined，NaN，\'\'，0返回undefined：' + error.init(NaN));
console.log('\n');


var type = new Type();
console.log('---Type---类型');
console.log('找到类型：' + type.init(123));
console.log('Array类型：' + type.isArray([1,2,3,4]));
console.log('Object类型：' + type.isObject({ jlib: 1024 }));
console.log('Number类型：' + type.isNumber(1024));
console.log('String类型：' + type.isString('1024'));
console.log('\n');


var localstor = new Localstor();
console.log('---Localstor---持久缓存');
console.log('支持：' + localstor.init());
console.log('设置：' + localstor.set('jlib', 512));
console.log('得到：' + localstor.get('jlib'));
console.log('删除：' + localstor.remove('jlib'));
console.log('清空：' + localstor.clear());
console.log('\n');


var sessionstor = new Sessionstor();
console.log('---Sessionstor---会话缓存');
console.log('支持：' + sessionstor.init());
console.log('设置：' + sessionstor.set('jlib', 1024));
console.log('得到：' + sessionstor.get('jlib'));
console.log('删除：' + sessionstor.remove('jlib'));
console.log('清空：' + sessionstor.clear());
console.log('\n');


var getsearch = new getSearch();
console.log('---getSearch---查询url');
console.log('url参数对象：');
console.log(getsearch);
console.log('\n');


var verify = new Verify();
console.log('---Verify---验证');
console.log('验证数字：' + verify.number(1024));
console.log('验证手机号：' + verify.mobile(13877442211));
console.log('验证E-mail：' + verify.email('co_wgz@jlib.com'));
console.log('\n');









