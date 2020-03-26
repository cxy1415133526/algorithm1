// var arr=[1,2,3,4,{'m':6,'n':[1,2,3]}];
// function deepClone(o){
//     if(Array.isArray(o)){
//         var result=[];
//         for(var i=0;i<o.length;i++){
//             result.push(deepClone(o[i]));

//         }
//     }else if(typeof o=='object'){
//         var result={};
//         for(var k in o){
//             result[k]=deepClone(o[k]);
//         }
//     }else{
//         result=o;
//     }
//     return result;
// }
// var arr1=deepClone(arr);
// console.log(arr==arr1);
// console.log(arr1[4]==arr[4]);
// console.log(arr1[4].n==arr[4].n);
// 斐波那契数列
// function fib(n){
//     return n==0||n==1?1:fib(n-1)+fib(n-2);
// }
// for(var i=0;i<=20;i++){
//     console.log(fib(i));

// }
// 冒泡排序
var arr = [12, 32, -10, 4, 53, 52, 522]
// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<arr.length-1-i;j++){
//         if(arr[j]>arr[j+1]){
//             var temp=arr[j];
//             arr[j]=arr[j+1]
//             arr[j+1]=temp;
//         }
//     }
// }
// console.log(arr);

//内置sort()排序
// arr.sort(function(a,b){
//    return b-a; 
// })
//     console.log(arr);

// 数位立方和功能封装 求水仙数
// function shuweilifanghe(n){
//     var gewei=n%10;
//     var shiwei=parseInt(n/10)%10;
//     var baiwei=parseInt(n/100);

//     return lifang(gewei)+lifang(shiwei)+lifang(baiwei);
// }
// function lifang(a){
//     return Math.pow(a,3);
// }
// for(var i=1;i<1000;i++){
//     if(i==shuweilifanghe(i)){
//         console.log(i);

//     }
// }
// 闭包 fun就是高阶函数，高阶函数就是一个函数返回了另一个函数
// function fun(){
//     var a=10;
//     return function inner(){
//         console.log(a);

// //     }
// // }
// // var inn=fun();
// // inn();

// // 补充题目
// function fun(a){
//     return function(b){
//         console.log(a+b);
        
//     }
// }
// var inn=fun(10);
// inn(9);
// inn(10);
// inn(11);
console.log(null==undefined);            //true

// 闭包 偏函数 ，外部的函数参数调整了内部函数的具体细节
// function fun(a) {
//     return function  (b) {
//         if (b > a) {
//             console.log('体温不正常');

//         } else {
//             console.log('体温正常');

//         }
//     }
// }
// var biaozhun1=fun(36.8);
// biaozhun1(35);
// biaozhun1(36.9);
// biaozhun1(31.9);

// var biaozhun1=fun(35.8);
// biaozhun1(35);
// biaozhun1(36.9);
// biaozhun1(31.9);

