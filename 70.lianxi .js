// 1.斐波那契数列
// function fib(n){
// return n==0||n==1?1:fib(n-1)+fib(n-2);
// }
// for(var i=0;i<20;i++){
//     console.log(fib(i));
    
// }
// 2.递归（阶乘）
// function factorial(n){
//     return n==1?1:n*factorial(n-1);
// }
// console.log(factorial(6));
// ********************************************************************************
// 3.运行结果

// var fun=function(){
//     console.log('A');
// }
// funs();
// function funs(){
//     console.log('B');
    
// }


function fo(){
    var i=0;
    return function(n){
        return n+i++;
    }
}
// var f=fo();
// var a=f(15);            //15
// var b=fo()(15);         //15 f(0)运行，表示i清零
// var c=fo()(20);         //20
// var d=f(20);            //21 i是1，上面运回会保留下来的（i++）i变成了1

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// function outer (){
//     var m=100;
//     function inner(){
//         m+=10;
//         console.log(m);
        
//     }
//     return inner;
// }
// var i=outer();
// var j=outer();
// i(); //110
// i();//120
// j();//110

var a=true;
var b=false;
function fn(){
    if(a){
        var a=10;
    }
    if(b){
        var b=20;
    }
    console.log(a+b);
    
}
fn();

// var a=true;
// function fn(){
//     if(!a){
//         var a=10;
//     }
// //     console.log(a);
    
// // }
// // fn();

// console.log(NaN==NaN);                         //false
// console.log(NaN==undefined);                   //false

// console.log(undefined==undefined);             //true
// console.log(null==undefined);                  //false

// console.log('NaN'==NaN);                       //false

// console.log(false==0);                         //true
// console.log(true==1);                          //true

// console.log(false==-1);                        //false
// console.log(undefined==0);                     //false
// console.log(null==0);                          //false

// console.log('5'==5);                           //true

// console.log('5天'==5);                         //false
// console.log([]==true);                         //false

// console.log([]==false);                        //true

// console.log({}==true);                         //false
// console.log({}==false);                        //false
