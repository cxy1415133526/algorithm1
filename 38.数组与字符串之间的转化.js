var arr=[2,3,2,55,64,736]; 
// var str=arr.join(); //什么都不加，生成的字符串项与项之间默认是逗号隔开
var str=arr.join('')  //参数是一个空字符串，生成的字符串项与项之间不加任何的符号
var str=arr.join('-');
var str=arr.join('haha')
console.log(str);

var str='我是谁谁是我我是大魔王';
var arr=str.split('我');
console.log(arr);
