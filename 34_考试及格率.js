//请先从百度网盘下载一个txt文件。这个文件中是20000个学生的考试成绩。请分别统计语文、数学和英语的及格率，及格线均为60分。
var fs = require('fs');
var str = fs.readFileSync('./考试成绩.txt').toString();
// console.log(str);
var arr=str.split('\r\n');
//  console.log(arr);

//遍历数组，继续拆
var yw=0;
var sx=0;
var yy=0;

for(var i=0;i<arr.length;i++){
    var item=arr[i];
    _arr=item.split(' ')
   
    // 计算语文的及格人数
  if (Number(_arr[3]) >= 60) yw++;
  // 计算数学的及格人数
  if (Number(_arr[5]) >= 60) sx++;
  
  // 计算英语的及格人数
  if (Number(_arr[7]) >= 60) yy++;
  
}
// 统计语文、数学和英语的及格率
var _yw = Math.round(yw / arr.length*100*100)/100
var _sx = Math.round(sx / arr.length*100*100)/100
var _yy = Math.round(yy / arr.length*100*100)/100
console.log(
  `语文的及格率是${_yw}%,数学的及格率是${_sx}%,英语的及格率是${_yy}%`
);






