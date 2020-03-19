var fs=require('fs');
var str=fs.readFileSync('./考试成绩.txt').toString();
var arr=str.split('\r\n');
for( var i=0;i<arr.length;)

