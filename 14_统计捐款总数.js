var fs = require('fs');

var str = fs.readFileSync('./捐款记录.txt').toString();

// console.log(str);

// 按换行符拆
var arr = str.split('\r\n');

// 累加器
var sum = 0;

// 遍历
for (var i = 0; i < arr.length; i++) {
    // 这项，是包括名，然后空格，然后数额
    var item = arr[i];
    // 继续拆！用空格拆！
    var _arr = item.split(' ');
    // 拆之后，_arr[0]这项，就是名字。_arr[1]这项，就是数额。
    sum += Number(_arr[1]);
}

console.log(sum);
