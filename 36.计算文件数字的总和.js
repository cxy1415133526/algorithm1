var fs=require('fs');
var str=fs.readFileSync('./数据.txt').toString();
var arr=str.split('\r\n');
console.log(arr);
//遍历数组
var sum=0;
for( var i=0;i<arr.length;i++){
    sum+=Number(arr[i]);  //注意将字符串转为数字
}
console.log(sum);

