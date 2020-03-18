//请先从百度网盘下载一个txt文件。这个文件中是2000个学生的考试成绩。请分别统计语文、数学和英语的及格率，及格线均为60分。
var fs = require('fs');
var str = fs.readFileSync('./考试成绩.txt').toString();
// console.log(str);
var arr=str.split('\r\n');
//  console.log(arr);

//遍历数组，继续拆
for(var i=0;i<arr.length;i++){
    var item=arr[i];
    _arr=item.split(' ')
   console.log(_arr);
   
不会
}




