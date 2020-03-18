var fs = require('fs');
var str = fs.readFileSync('./捐款记录.txt').toString();
var arr = str.split('\r\n');          //将换行符去掉,添上引号
//但里面含有姓名 空格 ，不是单纯数字，要继续拆。名字与数字之间含有与空格，所有以空格拆
//先遍历数组
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    var item = arr[i];
    var _arr = item.split(' ');       //空格被去掉了，加上引号 拆字符串用split（''）很常用
    console.log(_arr);
    sum+=Number(_arr[1]);

}
console.log(sum);

